from flask import Blueprint, url_for, redirect, request, jsonify
from flask_login import login_user, logout_user
from ..models import User
from ..utils.auth_utils import get_hashed_password, is_matching_password
from ..utils.db_utils import get_user

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route("/login", methods = ["POST"])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    found_user = get_user(username)
    if found_user:
        print(found_user)
        if True:
            user_to_login = User()
            user_to_login.id = "22527c6d-851f-4664-8e24-26fb84d6d793"
            login_user(user_to_login)
            #print(response.headers)
            return "Text", 200
    return "Unsuccessful login", 200        


@bp.route("/logout")
def logout():
    print("calling logout")
    logout_user()
    return(redirect(url_for("home.home")))