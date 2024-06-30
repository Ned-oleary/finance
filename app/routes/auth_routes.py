from flask import Blueprint
from flask_login import login_user, logout_user, 

bp = Blueprint("auth", __name__, url_prefix="auth")

@bp.route("/login")
def login():
    pass

@bp.route("/logout")
def logout():
    pass