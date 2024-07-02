from flask import Flask
from .models import init_models
from .routes import register_routes
from flask_cors import CORS

# NOTE: hardcoded CORS with localhost:3000 for NextJS frontend -- change later

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object("config.Config")
    CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})
    register_routes(app)
    init_models(app)
    return(app)
