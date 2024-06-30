from flask import Blueprint, url_for, redirect
from flask_login import login_user, logout_user
from ..models import User

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route("/login")
def login():
    print("calling login")
    login_user(User())
    return(redirect(url_for("home.home")))

@bp.route("/logout")
def logout():
    print("calling logout")
    logout_user()
    return(redirect(url_for("home.home")))