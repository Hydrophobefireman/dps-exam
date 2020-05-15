from secrets import token_hex

from flask import session

from constants import IS_LOGGED_IN, USER_ID, SESSION_TOKEN
from util import ParsedRequest, safe_int, get_current_user

from .common import get_student_by_id


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


def handler(req: ParsedRequest):
    action = req.action
    data = req.json
    if action == "login":
        return login(data.get("scholar"), data.get("dob"))
    if action == "get-status":
        return get_status()
