from flask import Blueprint, url_for, redirect, request, jsonify
from ..models import User
from ..utils.db_utils import get_user, json_dict_to_user
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token
from flask_login import login_user
from flask import session

bp = Blueprint("auth", __name__, url_prefix="/auth")

@bp.route("/login", methods = ["POST"])
def login():
    print("calling login")
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    found_user = get_user(username)
    if found_user:
        user = json_dict_to_user(found_user)
        user.hashed_password = generate_password_hash("password") # need a better way to handle this in the future!
        if check_password_hash(user.hashed_password, password):
            user.set_authentication()
            session["user_id"] = user.id
            #access_token = create_access_token(identity=user.id)
            #response = {"access_token":access_token}
            return jsonify({'message': 'Logged in'}), 200
    return jsonify({"msg": "Bad username or password"}), 401

@bp.route("/logout")
def logout():
    print("calling logout")
    session.pop('user_id', None)
    return jsonify({'message': 'Logged out'}), 200
