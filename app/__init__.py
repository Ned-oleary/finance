from flask import Flask
from .models import init_models
from .routes import register_routes
#from .utils import init_utils
from .utils.auth_utils import login_manager

#initialize the auth system

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object("config.Config")
    register_routes(app)
    init_models(app)
    login_manager.init_app(app)
    return(app)
