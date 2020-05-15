from flask import send_from_directory, request

from api_handlers import get_handler
from app_init import app
from util import ParsedRequest, clear_data, json_response


@app.route("/favicon.ico")
def favicon():
    return send_from_directory(".", "favicon.ico")


kwargs = dict(strict_slashes=False, methods=["post", "get"])


@app.route("/<route>/", **kwargs)
@app.route("/<route>/<action>/", **kwargs)
@app.route("/")
def index(route=None, action=None):
    return send_from_directory("docs", "index.html", cache_timeout=0)


@app.route("/docs/<path:asset>")
def file_send(asset):
    return send_from_directory("docs", asset)


@app.route("/api/logout/", strict_slashes=False, methods=["post"])
def handle_logout():
    return clear_data()


@app.route("/api/<route>/<action>/", **kwargs)
def handle_api_call(route, action=None):
    # get one of the user/play/admin handlers
    handler = get_handler(route)
    if not handler:
        return json_response(
            {"error": f"no handler for api '{route[:50]}'"}, status=404
        )
    # parse request
    parsed_request = ParsedRequest(request, action)
    data = handler(parsed_request)
    kwargs = {}
    # if our handler returned a tuple, the second element is kwargs object
    if isinstance(data, tuple):
        kwargs = data[1]
        data = data[0]
    if data is None:
        return json_response({"data": data}, **kwargs)
    return json_response(data if "error" in data else {"data": data}, **kwargs)


@app.route("/-cache/", strict_slashes=False)
def clr_():
    from shutil import rmtree
    from os.path import isdir

    if isdir("@cache"):
        rmtree("@cache")
    return "ok"


if __name__ == "__main__":
    app.run(debug=True, use_reloader=True)
