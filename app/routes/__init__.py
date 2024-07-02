from flask import Blueprint
from .auth_routes import bp as auth_bp
from .home_routes import bp as home_bp
from .av_routes import bp as av_bp

def register_routes(app):
    '''
    called in create_app(); registers routes with app
    pass in Flask object as parameter
    '''
    app.register_blueprint(auth_bp)
    app.register_blueprint(home_bp)
    app.register_blueprint(av_bp)
    return None