from json import dumps, loads
from urllib.parse import urlparse

from flask import Response, redirect, request, session

from constants import IS_LOGGED_IN, USER_ID


def is_logged_in() -> bool:
    return bool(session.get(IS_LOGGED_IN))


def get_current_user():

    return (session.get(IS_LOGGED_IN) and session.get(USER_ID)) or None


def json_response(
    data: dict, status: int = 200, headers: dict = None, cookies: dict = None
) -> Response:
    dump = dumps(data)
    resp = Response(dump, status, headers, content_type="application/json")
    if cookies:
        for k, v in cookies.items():
            session[k] = v
    return resp


def clear_data():
    resp = Response(dumps({"success": True}))
    session.clear()
    return resp


def enforce_https():
    ps = urlparse(request.url)
    if "herokuapp" in ps.hostname and ps.scheme == "http":
        return redirect(request.url.replace("http://", "https://"), 301)


class ParsedRequest:
    def __init__(self, request: request, action: str):
        self.args = dict(request.args)
        self.headers = request.headers
        self.json: dict = request.get_json()
        self.action = action or ""
        self.method = request.method

    @property
    def as_json(self):
        return {
            "args": self.args,
            "headers": dict(self.headers),
            "json": self.json,
            "action": self.action,
            "method": self.method,
        }


def map_to_list(*args) -> list:
    return list(map(*args))


def safe_int(idx) -> int:
    return int(idx) if not isinstance(idx, int) else idx


def set_cors(response):
    if "Origin" in request.headers:
        response.headers["access-control-allow-origin"] = request.headers["Origin"]
        response.headers["Access-Control-Allow-Headers"] = request.headers.get(
            "Access-Control-Request-Headers", "*"
        )
        response.headers["access-control-allow-credentials"] = "true"
    return response
