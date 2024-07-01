from flask import Flask
from .models import init_models, supabase
from .routes import register_routes
#from .utils import init_utils
from .utils.auth_utils import login_manager
from flask_cors import CORS
from flask_jwt_extended import JWTManager

#cors = cors()

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object("config.Config")
    CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})
    register_routes(app)
    init_models(app)
    login_manager.init_app(app)
    jwt = JWTManager(app)
    return(app)
