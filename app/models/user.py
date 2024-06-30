from flask_login import UserMixin

## define class for a user
class User(UserMixin):

    def __init__(self):
        self.id = None
        self.active = None
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



