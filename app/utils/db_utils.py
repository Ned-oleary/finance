from ..models import User, supabase
from uuid import uuid4

def get_user(username: str) -> str:
    try:
        response = (
            supabase.table("users")
            .select("*")
            .eq("display_name", username)
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

def create_user(id: str = str(uuid4()), display_name: str = "", hashed_password: str = "") -> dict[any]:
    print("calling create_user")
    try:
        response = (
            supabase.table("users")
            .insert({"id": id, "display_name": display_name, "hashed_password": hashed_password})
            .execute()
        )
        print(response)
        return response, 201
    except:
        response = {"message": "error: unsuccessful record creation"}
        return response, 401

# don't think I ended up using this anywhere
def update_user(id: str, **kwargs) -> dict[any]:
    update_dict = {"id" : id}
    for key, value in kwargs.items():
        update_dict[key] = value

    try:
        response = (
            supabase.table("users")
            .update(update_dict)
            .eq("id", id)
            .execute()
        )
        return response, 201
    except:
        response = {"message": "error: unsuccessful record creation"}
        return response, 401

        











