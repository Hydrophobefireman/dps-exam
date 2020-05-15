from os import environ
from secrets import token_hex
from json import dumps, loads

from flask import Flask, Response, redirect, request, session
from flask_sqlalchemy import SQLAlchemy

from set_env import setup_env
from util import enforce_https, set_cors, safe_int

setup_env()


app = Flask(__name__)
app.secret_key = environ.get("secret-key", token_hex(10))


database_url: str = environ.get("DATABASE_URL")
app.config["SQLALCHEMY_DATABASE_URI"] = database_url
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)


app.before_request(enforce_https)

app.after_request(set_cors)



class UserTable(db.Model):
    # pylint: disable=E1101
    scholar = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    grade = db.Column(db.Integer)
    subject_info = db.Column(db.String)
    dob = db.Column(db.String)
    testing_info = db.Column(db.String)
    # pylint: enable=E1101

    def __init__(
        self,
        scholar: int = 0,
        name: str = None,
        grade: int = 0,
        subject_info: list = None,
        dob: str = None,
        testing_info: dict = {},
    ):

        if any(not x for x in (scholar, name, grade, subject_info, dob)):
            raise Exception("Invalid Values")
        self.scholar = safe_int(scholar)

        self.name = name

        self.grade = safe_int(grade)

        self.set_subject_info(subject_info)

        self.dob = dob

        self.set_testing_info(testing_info)

    def set_testing_info(self, info: dict):

        self.testing_info = dumps(info) if info else None

    def set_subject_info(self, info: dict):
        self.subject_info = dumps(info) if info else None

    @property
    def as_json(self) -> dict:

        return {
            "scholar": self.scholar,
            "name": self.name,
            "grade": self.grade,
            "subject_info": loads(self.subject_info) if self.subject_info else None,
            "dob": self.dob,
            "testing_info": loads(self.testing_info) if self.testing_info else None,
        }


class TestPapers(db.Model):
    # pylint: disable=E1101
    text_id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String)
    grade = db.Column(db.Integer)
    question_data = db.Column(db.String)
    time_alloted = db.Column(db.Integer)
    paper_time = db.Column(db.Integer)
    # pylint: enable=E1101
    def __init__(
        self,
        subject: str,
        grade: int,
        time_alloted,
        question_data: dict,
        paper_time: int,
    ):

        self.subject = subject

        self.grade = safe_int(grade)

        self.set_question_data(question_data)

        self.time_alloted = time_alloted  # typo.......

        self.paper_time = float(paper_time)

    def set_question_data(self, q_data: dict):

        self.question_data = dumps(q_data)

    def __repr__(self):
        return f"<{self.subject} - {self.grade}"
    @property
    def as_json(self):
        return {
            "subject": self.subject,
            "grade": self.grade,
            "question_data": loads(self.question_data),
            "time_allotted": self.time_alloted,
            "paper_time": self.paper_time,
        }
