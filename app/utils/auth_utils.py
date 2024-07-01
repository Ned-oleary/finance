from flask_login import LoginManager
from .db_utils import get_user, User, json_dict_to_user
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
# login_manager = LoginManager()

# @login_manager.user_loader
# def load_user(user_id: str) -> User:
#     user = get_user(user_id)
#     if user:
#         return json_dict_to_user(user)
#     else:
#         return None
    
def get_hashed_password(plain_text_password: str) -> str:
    hash_password = generate_password_hash(
        password = plain_text_password,
        method = 'pbkdf2', 
        salt_length = 16
    )
    return hash_password

def is_matching_password(plain_text_password: str, hashed_password: str) -> bool:
    return check_password_hash(hashed_password, plain_text_password)

