from .user import User
from dotenv import load_dotenv
from supabase import create_client, Client
import os

load_dotenv()
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_PRIVATE_KEY = os.environ.get("SUPABASE_PRIVATE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_PRIVATE_KEY)

def init_models(app):
    #handle all the database setup and shit?
    pass    