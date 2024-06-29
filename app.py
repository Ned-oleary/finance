from flask import Flask, request, render_template
from dotenv import load_dotenv
import requests
import os

app = Flask(__name__)
load_dotenv()

av_api_key = os.environ.get("ALPHAVANTAGE_KEY")

@app.route("/")
def home():
    url = 'https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=' + av_api_key
    r = requests.get(url)
    data = r.json()
    for keys in data.keys():
        if keys == "annualReports":
            for subkeys in data[keys]:
                print(type(subkeys))
    return("<p>" + "here's some stuff" + "<p>")

