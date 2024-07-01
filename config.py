from dotenv import load_dotenv
import os

class Config:
    ALPHAVANTAGE_KEY = os.getenv("ALPHAVANTAGE_KEY")
    SECRET_KEY = os.getenv("APP_SECRET")
    SESSION_COOKIE_HTTPONLY=True
    SESSION_COOKIE_SAMESITE='Lax'
    SESSION_COOKIE_SECURE=True  # Use True if your app is served over HTTPS
