from flask import Blueprint, url_for, redirect, request, jsonify
from ..models import User
from ..utils.db_utils import get_user, json_dict_to_user, update_user
from werkzeug.security import generate_password_hash, check_password_hash
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
        if check_password_hash(user.hashed_password, password):
            user.set_authentication()
            session["user_id"] = user.id
            return jsonify({'message': 'Logged in'}), 200
    return jsonify({"msg": "Bad username or password"}), 401

@bp.route("/logout", methods = ["POST"])
def logout():
    if(session):
        session.pop("user_id")
    return jsonify({'message': 'Logged out'}), 200

@bp.route("/validate_session", methods = ["GET"])
def get_session():
    print("calling get_session()")
    if(session):
        print("Found a session")
        user = get_user(session["user_id"])
        return jsonify({"message": "Successfully identified user from session", "user_id": user["id"], "display_name": user["display_name"], }), 200
    else:
        return jsonify({"message": "No active session"}), 401
    
@bp.route("/update_self", methods = ["POST"])
def update_self():
    data = request.get_json()
    print(data)
    user_id = data.pop("username", None)
    print(user_id)
    if session and session.get("user_id") == user_id:
        try:
            response, status_code = update_user(user_id, **data)
            return response, status_code
        except:
            print(f"Error: {Exception}")
            return {"message": "Update failed"}, 500
    else:
        return {"message": "Unauthorized"}, 401
        
