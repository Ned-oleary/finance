from dotenv import load_dotenv
import os

class Config:
    ALPHAVANTAGE_KEY = os.getenv("ALPHAVANTAGE_KEY")
    SECRET_KEY = os.getenv("APP_SECRET")