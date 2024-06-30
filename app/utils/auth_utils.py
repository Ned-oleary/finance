from flask_login import LoginManager
from .db_utils import get_user, User, json_dict_to_user

login_manager = LoginManager()

@login_manager.user_loader
def load_user(user_id: str) -> User:
    user = get_user(user_id)[0]
    if user:
        return json_dict_to_user(user)
    else:
        return None


