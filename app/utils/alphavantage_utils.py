from dotenv import load_dotenv
import os
import requests

load_dotenv()

ALPHAVANTAGE_KEY = os.getenv("ALPHAVANTAGE_KEY")
ALPHAVANTAGE_BASE_URL = "https://www.alphavantage.co/query?function="

def construct_query_url(function: str, symbol: str, apiKey = ALPHAVANTAGE_KEY) -> str:
    query_url = ALPHAVANTAGE_BASE_URL + function + "&symbol=" + symbol + "&apikey=" + apiKey
    return query_url

def get_alphavantage_data(query_url: str, frequency: str = "quarterlyReports") -> list:
    try:
        response = requests.get(query_url)
        response_json = response.json()
        response_subset = response_json[frequency]
        return response_subset
    except:
        raise ValueError("Ran into a problem with getting the alphavantage data")









 