from flask import Blueprint
from ..utils.db_utils import exists_user

bp = Blueprint("home", __name__)

# didn't end up using this for anything
# left for testing reasons
@bp.route("/")
def home():
    if exists_user("22527c6d-851f-4664-8e24-26fb84d6d793"):
        return("Yep, found that user")
    return("Nope")