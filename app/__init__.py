from flask import Flask
#from .models import *
from .routes import register_routes
#from .utils import *

def create_app() -> Flask:
    app = Flask(__name__)
    app.config.from_object("config.Config")
    register_routes(app)
    return(app)