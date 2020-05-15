
from numpy import isnan

g = []
for i in d:
    obj = {}
    for k, v in i.items():
        if isinstance(v, float) and isnan(v):
            break
        obj[k.strip()] = int(v) if isinstance(v, (float, int)) else v.strip()
    if obj:
        g.append(obj)


def fix(x):
    return str(x).replace(" ", "").lower()


def remv(x: str):
    # return x.strip()
    if x[0] == "(":
        x = x[x.find(")") + 1 :].strip()
    elif x[0].lower() in "a,b,c,d,1,2,3,4".split(",") and x[1:].lstrip()[0] == ")":
        return x[1:].lstrip()[1:].strip()
    return x


h = []
for i in g:
    o = {}
    o["question"] = i["question"]
    o["options"] = list(
        map(lambda x: (str(x).strip()), [i["o1"], i["o2"], i["o3"], i["o4"]])
    )
    o["correct"] = list(map(fix, o["options"])).index(remv(fix(i["ans"])))
    h.append(o)

import string


def parse_exponents(st):
    if not isinstance(st, str):
        return
    prev = None
    rep = []
    buf = []
    is_currently_exponent = False
    for i in st:
        if prev is not None and (
            (
                i.isdigit()
                and (
                    (is_currently_exponent and prev not in string.ascii_letters)
                    or prev in string.ascii_letters
                )
            )
            or ((prev == ")" or is_currently_exponent) and i in string.ascii_letters)
        ):
            if is_currently_exponent:
                rep[-1]["value"] += i
            else:
                rep.append({"type": "text", "value": "".join(buf)})
                buf.clear()
                rep.append({"type": "sup", "value": i})
                is_currently_exponent = True
        else:
            is_currently_exponent = False
            buf.append(i)
        prev = i
    if len(buf):
        rep.append({"type": "text", "value": "".join(buf)})
    return rep


px = deepcopy(h)

for i in px:
    i["question"] = parse_exponents(i["question"])
    i["options"] = [parse_exponents(x) for x in i["options"]]


#  subject: str,
#         grade: int,
#         time_alloted,
#         question_data: dict,
#         paper_time: int,
from app_init import *

from time import time


def add_paper(subject, data, tx, cl=12,ts=0):
    p = TestPapers(subject.lower().strip(), cl, tx, data, ts or time() + 2000)
    db.session.add(p)
    db.session.commit()


import json


def add():
    obj = []
    while 1:
        i = input("type:").strip().lower()
        if not i:
            return obj
        value = input("value:")
        obj.append({"type": i, "value": value})


def make_q():
    print("\nQuestion:")
    q = add()
    o1, o2, o3, o4 = [print("\no" + str(i)) or add() for i in range(4)]
    nl = "\n"
    opts = (o1, o2, o3, o4)
    correct = int(
        input(
            f"correct?{nl}{nl.join(str(i)+' '+''.join(x['value'] for x in j) for i,j in enumerate((opts)))}\n"
        )
    )
    return {"question": q, "options": list(opts), "correct": correct}


def attemp_minify(o: list):
    ret = []
    for i in o:
        is_dict = isinstance(i, dict)
        if is_dict and i["type"] != "text":
            return o
        ret.append(i["value"] if is_dict else i)
    return "".join(i)


def optimize_question_data(q_data: list):
    next_l = []
    for i in q_data:
        obj = {
            "question": attemp_minify(i["question"]),
            "options": list(map(attemp_minify, i["options"])),
            "correct": i["correct"],
        }
        next_l.append(obj)
    return next_l


def make_q():
    add = input
    print("\nQuestion:")
    q = add("q:")
    o1, o2, o3, o4 = [print("\no" + str(i)) or add() for i in range(4)]
    nl = "\n"
    opts = (o1, o2, o3, o4)
    correct = 0
    return {"question": q, "options": list(opts), "correct": correct}
