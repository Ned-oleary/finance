from flask import Blueprint

bp = Blueprint("home", __name__)

@bp.route("/")
def home():
    pass
    return("root url")