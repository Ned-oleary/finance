from dotenv import load_dotenv
import os

class Config:
    ALPHAVANTAGE_KEY = os.environ.get("ALPHAVANTAGE_KEY")