from flask import Blueprint, url_for, redirect, request, jsonify
#from flask_login import login_user, logout_user, current_user
from ..models import User
from ..utils.db_utils import get_user, json_dict_to_user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route("/login", methods = ["POST"])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    found_user = get_user(username)
    if found_user:
        user = json_dict_to_user(found_user)
        user.hashed_password = generate_password_hash("password")
        print(user)
        if check_password_hash(user.hashed_password, password):
            user.set_authentication()
            access_token = create_access_token(identity = {"username": user.id})
            output = jsonify({'access_token': access_token})
            print(output.data)
            return output, 200
    return jsonify({"msg": "Bad username or password"}), 401

@bp.route("/logout")
def logout():
    print("calling logout")
    logout_user() # need to fix
    return(redirect(url_for("home.home")))