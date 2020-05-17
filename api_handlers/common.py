from app_init import UserTable as _U, TestPapers as _T, db as _db
from util import map_to_list as _map
from response_caching import cache as _cache


def _get_subject_data(data: _T):
    js = data.as_json
    js.pop("question_data")  # don't send questions
    return js


def _get_student_data(data: _U):
    return data.as_json


def get_student_by_id(idx: int) -> _U:
    return _U.query.filter_by(scholar=idx).first()


@_cache(lambda x, y: f"{y}--{x}-paper")
def get_question_paper(grade: int, subject: str) -> _T.as_json:
    res = _T.query.filter_by(grade=grade, subject=subject).first()
    return res.as_json if res else None


def get_eligible_subjects(student: _U) -> list:
    return _map(
        _get_subject_data,
        _T.query.filter(
            (_T.grade == student.grade)
            & _T.subject.in_(student.as_json["subject_info"])
        ).all(),
    )


def get_all_students():
    return _map(_get_student_data, _U.query.all())


# pylint: disable=E1101


def save_to_db():

    _db.session.commit()


def add_to_db(obj, batch: bool = False):

    _db.session.add(obj)

    if not batch:
        save_to_db()


def remove_from_db(obj, batch: bool = True):

    _db.session.delete(obj)

    if not batch:
        save_to_db()


# pylint: enable=E1101
