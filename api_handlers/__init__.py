
from .auth import handler as auth_handler
from .exam import handler as exam_handler

route_map = {"auth": auth_handler, "exam": exam_handler}


def get_handler(route):
    return route_map.get(route)
