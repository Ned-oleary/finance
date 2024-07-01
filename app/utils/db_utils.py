from ..models import User, supabase

def get_user(user_id: str) -> str:
    try:
        response = (
            supabase.table("users")
            .select("*")
            .eq("id", user_id)
            .execute()
        )
        return response.data[0]
    except:
        return None
    
def match_username_and_password(display_name: str, hashed_password: hash) -> bool:
    try:
        response = (
            supabase.table("users")
            .select("*")
            .eq("display_name", display_name)
            .eq("hashed_password", hashed_password)
            .execute()
        )
        return response.data[0]
    except:
        return None

def exists_user(user_id: str) -> bool:
    return True if get_user(user_id) else False

def json_dict_to_user(dict_input) -> User:
    '''takes in a dict from the json and creates a User object'''
    user = User()
    user.id = dict_input["id"]
    user.created_at = dict_input["created_at"]
    user.hashed_password = dict_input["hashed_password"]
    user.display_name = dict_input["display_name"]
    return user








