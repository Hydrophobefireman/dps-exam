from os import environ
from secrets import token_hex

from flask import session

from constants import IS_LOGGED_IN, SESSION_TOKEN, USER_ID
from util import ParsedRequest, get_current_user, safe_int

from .common import get_student_by_id, get_all_students
from .exam import reset

ADMIN_ACTION_TOKEN = environ.get("ADMIN_ACTION_TOKEN")
r_id = environ.get("reset-id")


def login(scholar: int, dob: str):
    scholar = safe_int(scholar)

    details = get_student_by_id(scholar)

    if details is None:
        return {"error": "No such student"}
    if details.dob.replace("/", "").replace("-", "") != dob.replace("/", "").replace(
        "-", ""
    ):
        return {"error": "Invalid date of birth"}
    return (
        {"success": True, "user_data": details.as_json},
        {
            "cookies": {
                USER_ID: details.scholar,
                IS_LOGGED_IN: True,
                SESSION_TOKEN: token_hex(15),
            }
        },
    )


def get_status():

    scholar = get_current_user()
    if scholar is None:
        return {"user_data": None}
    student = get_student_by_id(scholar)
    if student is None:
        return {"error": "No student exists"}
    return {"user_data": student.as_json}


def is_action_invalid(token):
    if ADMIN_ACTION_TOKEN is None:
        return {"error": "Please add token to the server"}
    token = token.strip()
    if token != ADMIN_ACTION_TOKEN:
        return {"error": "Invalid token"}
    return False


def all_students(js: dict):
    print("LOL", get_current_user())
    return {"error": "password is hunter2.."}
    invalid_action = is_action_invalid(js.get("token"))
    if invalid_action:
        return invalid_action
    return get_all_students()


def reset_student(js: dict):
    invalid_action = is_action_invalid(js.get("token"))
    if invalid_action:
        return invalid_action
    reset({"id": r_id, **js})
    return get_all_students()


def handler(req: ParsedRequest):
    action = req.action
    data = req.json
    if action == "login":
        return login(data.get("scholar"), data.get("dob"))
    if action == "get-status":
        return get_status()
    if action == "get-all-students":
        return all_students(data)
    if action == "reset-subject":
        return reset_student(data)
