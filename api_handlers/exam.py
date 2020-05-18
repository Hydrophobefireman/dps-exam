from os import environ
from time import time

from flask import session

from constants import SESSION_TOKEN
from util import ParsedRequest, get_current_user, safe_int

from .common import (
    get_eligible_subjects,
    get_question_paper,
    get_student_by_id,
    save_to_db,
)

spec = tuple(map(int, environ.get("SPEC_USER_IDS").split("|")))
r_id = environ.get("reset-id")


def remove_answers(js: dict,):
    q_data = js.get("question_data")
    for i in q_data:
        i.pop("correct")

    return js


_DISALLOW_TEST_IF_TOO_LATE = True
MAX_ALLOW = 2 * 60 * 60


def should_allow(user):
    return user in spec


def _get_subject_test_info(student):
    test_info = student.as_json["testing_info"] or {}
    # previously_taken_tests = test_info.get("previously_taken_tests") or {}
    # test_info = previously_taken_tests.get("test_info") or {}

    # previously_taken_tests["test_info"] = test_info
    # test_info["previously_taken_tests"] = previously_taken_tests
    student.set_testing_info(test_info)
    return test_info


def start_test(js: dict):
    if not js:
        return {"error": "no"}

    user = safe_int(js.get("scholar"))
    subject = js.get("subject")

    FORCE_ALLOW_TEST = should_allow(user)
    if not user or not subject:

        return {"error": "Invalid request"}
    auth_token = session.get(SESSION_TOKEN)

    start_time = time()

    if not auth_token:
        return {"error": "Not logged in"}

    student = get_student_by_id(user)

    if subject not in student.as_json["subject_info"]:
        return {"error": "Not eligible to give test"}

    if student is None:
        return {"error": "No such user.."}

    test_info = _get_subject_test_info(student)
    has_taken_test = test_info.get(subject) is not None

    if has_taken_test:
        has_submitted = test_info[subject].get("submitted")
        if has_submitted:
            return {"error": "You have already given this test"}
        start_time = test_info[subject]["test_taken_at"]

    test_info[subject] = test_info.get(subject, {})

    question_paper = get_question_paper(student.grade, subject)

    if question_paper is None:
        return {"error": "No such paper exists"}
    previous_answers = test_info.get(subject).get("answers")
    if not FORCE_ALLOW_TEST:
        if not has_taken_test and question_paper["paper_time"] > start_time:
            return {"error": "Paper has not started yet"}

        if (
            _DISALLOW_TEST_IF_TOO_LATE
            and (start_time - question_paper["paper_time"]) > MAX_ALLOW
        ):
            return {"error": "you are too late!"}

        test_info[subject] = {
            "score": None,
            "answers": previous_answers,
            "test_taken_at": start_time,
            "submitted": False,
        }
        student.set_testing_info(test_info)

        save_to_db()
    js = remove_answers(question_paper)
    js["now"] = time()
    js["start_time"] = start_time
    js["previous_answers"] = previous_answers
    return js


def get_subject_info():
    user = get_current_user()
    if user is None:
        return {"error": "Not logged in"}
    student = get_student_by_id(user)
    subjects = get_eligible_subjects(student)
    return {"subjects": subjects, "now": time(), "user_data": student.as_json}


def grade_test(js: dict):
    user = safe_int(js.get("scholar"))
    subject = js.get("subject")
    answers = js.get("answers")
    assert session[SESSION_TOKEN]

    test_end_time = time()

    student = get_student_by_id(user)

    if student is None:
        return {"error": "No such student"}

    if subject not in student.as_json["subject_info"]:
        return {"error": "Not eligible to give test"}

    test_info: dict = _get_subject_test_info(student)

    previous_subject = test_info.get(subject, {})
    if previous_subject.get("submitted"):
        return {"error": "Already graded"}
    # time_taken_at = previous_subject.get("test_taken_at")

    question_paper = get_question_paper(student.grade, subject)

    question_data = question_paper["question_data"]

    score = 0

    total = len(question_data)

    for (i, j) in enumerate(question_data):
        _answer = answers[i]
        answered = safe_int(_answer) if isinstance(_answer, int) else None
        if answered == j["correct"]:
            score += 1

    if not should_allow(user):
        if not subject in test_info:
            test_info[subject] = {}
        test_info[subject] = {
            "submitted": True,
            "score": score,
            "answers": answers,
            "test_taken_at": test_info[subject].get("test_taken_at"),
        }
        student.set_testing_info(test_info)
        save_to_db()
    return {"total": total, "score": score, "user_data": student.as_json}


def reset(js: dict):
    idx = str(js.get("id")).strip()
    scholar = str(js.get("scholar")).strip()
    if idx != r_id:
        return {"error": "Invalid Password"}

    student_scholar = safe_int(scholar)

    subject = js.get("subject").strip().lower()

    student = get_student_by_id(student_scholar)

    if student is None:
        return {"error": "No such student"}

    js_data = student.as_json["subject_info"]

    if subject not in js_data:
        nl = "\n"
        return {"error": f"No such subject, available subjects:\n{nl.join(js_data)}"}

    test_info = _get_subject_test_info(student)

    if subject in test_info:
        test_info.pop(subject)

    student.set_testing_info(test_info)
    save_to_db()
    return {
        "success": f"Please ask {student.name} ({student.scholar}) to reload their page and restart the test"
    }


def quicksave(js: dict):
    try:
        user = safe_int(get_current_user())
        if should_allow(user):
            return {}
        subject = js.get("subject")
        answers = js.get("answers")

        student = get_student_by_id(user)
        test_info = _get_subject_test_info(student)

        sub = test_info.get(subject) or {}

        sub["answers"] = answers
        test_info[subject] = sub
        student.set_testing_info(test_info)
        save_to_db()
        return {"success": True}
    except Exception as e:
        print(e)
        return {"fail": True}


SIX_HOURS = 6 * 60 * 60


def report_answers(js: dict):
    user = get_current_user()
    if not user:
        return {"error": "Not logged in"}

    student = get_student_by_id(user)

    testing_info = _get_subject_test_info(student)

    subject = js.get("subject").strip()

    if subject not in testing_info:
        return {"error": "Not so fast.."}
    subj = testing_info[subject]
    test_time = subj.get("test_taken_at", 0)
    if time() - test_time < SIX_HOURS:
        return {
            "error": "Answers are not available yet..they will be released 6 hours from your attempt"
        }
    student_score = subj["score"]
    paper = get_question_paper(student.grade, subject)
    if paper is None:
        return {"error": "Invalid request"}
    paper["score"] = student_score
    return paper


def handler(req: ParsedRequest):
    action = req.action
    data = req.json
    if action == "get-subject-info":
        return get_subject_info()
    if action == "start-test":
        return start_test(data)
    if action == "grade-test":
        return grade_test(data)
    if action == "reset-score":
        return reset(data)
    if action == "quicksave":
        return quicksave(data)
    if action == "get-report":
        return report_answers(data)
