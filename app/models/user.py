from flask_login import UserMixin

## define class for a user
class User(UserMixin):

    def __init__(self):
        self.id = None
        self.active = True
        self._is_authenticated = False
        self.created_at = None
        self.display_name = None
        self.hashed_password = None

    @property
    def is_authenticated(self):
        return self._is_authenticated
        
    def set_authentication(self, auth_status = True):
        self._is_authenticated = auth_status
        return None
    
    def __repr__(self):
        return (f"<User(id={self.id}, active={self.active}, "
                f"_is_authenticated={self._is_authenticated}, "
                f"created_at={self.created_at}, display_name={self.display_name}, "
                f"hashed_password={'***' if self.hashed_password else None})>")



    



