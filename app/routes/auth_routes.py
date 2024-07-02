from flask import Blueprint, request, jsonify
from ..models import User
from ..utils.db_utils import get_user, json_dict_to_user, create_user #removed update_user
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
            #session["user_id"] = user.id
            session["display_name"] = user.display_name
            return jsonify({'message': 'Logged in'}), 200
    return jsonify({"msg": "Bad username or password"}), 401

@bp.route("/logout", methods = ["POST"])
def logout():
    if(session):
        session.pop("display_name")
    return jsonify({'message': 'Logged out'}), 200

@bp.route("/validate_session", methods = ["GET"])
def get_session():
    if(session):
        user = get_user(session["display_name"])
        return jsonify({"message": "Successfully identified user from session", "user_id": user["id"], "display_name": user["display_name"], }), 200
    else:
        return jsonify({"message": "No active session"}), 401

## Didn't end up using this endpoint
# @bp.route("/update_self", methods = ["POST"])
# def update_self():
#     data = request.get_json()
#     user_id = data.pop("username", None) # kind of a neat trick
#     if session and session.get("user_id") == user_id:
#         try:
#             response, status_code = update_user(user_id, **data)
#             return response, status_code
#         except:
#             print(f"Error: {Exception}")
#             return {"message": "Update failed"}, 500
#     else:
#         return {"message": "Unauthorized"}, 401
    

@bp.route("/add_user", methods = ["POST"])
def add_user():
    print("hitting add_user endpoint")
    data = request.get_json()
    display_name = data["display_name"] # need to change this
    password = data["password"] # plaintext
    hashed_password = generate_password_hash(password) # use defaults
    try:
        response, status_code = create_user(display_name=display_name, hashed_password=hashed_password)
        if status_code == 201:
            return response.data, 201
        else:
            return response.data, 401
    except:
        print(f"Exception occurred: {Exception}")
        return {"message": "Exception during user creation"}, 500  # Return an internal server error status 
        
