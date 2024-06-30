from flask_login import UserMixin

## define class for a user
class User(UserMixin):

    def __init__(self):
        self.id = None
        self.active = None
        self._is_authenticated = False

        @property
        def is_authenticated(self):
            return self._is_authenticated
        
        def get_id():
            return self.id
        
        def set_authentication(self, auth_status = True):
            self._is_authenticated = auth_status
            return None



