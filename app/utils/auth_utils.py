from flask_login import LoginManager
from ..models import User, supabase

login_manager = LoginManager()

def exists_user(user_id: str) -> bool:
    '''queries supabase backend to determine whether a matching user exists'''
    try:
        response = (
            supabase.table("users")
            .select("*")
            .eq("id", user_id)
            .execute()
        )
        return_value = True if response.data[0] else False
    except:
        return_value = False
    return return_value

@login_manager.user_loader
def load_user(user_id) -> User:
    pass
    return User


