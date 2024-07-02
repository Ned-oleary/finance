from .user import User #IDE thinks I don't need this, but it's important to keep here
from dotenv import load_dotenv
from supabase import create_client, Client
import os

load_dotenv()
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_PRIVATE_KEY = os.environ.get("SUPABASE_PRIVATE_KEY")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_PRIVATE_KEY)

# didn't end up using this at alll
def init_models(app):
    pass    