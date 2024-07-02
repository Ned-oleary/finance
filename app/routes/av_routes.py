from flask import Blueprint, request, send_file
from ..models.alphavantage_statements import BalanceSheet, IncomeStatement, CashFlowStatement
from ..utils.alphavantage_utils import get_alphavantage_data, construct_query_url
import csv, io

bp = Blueprint("av", __name__, url_prefix="/av")

@bp.route("/download", methods = ["POST"])
def download():
    data = request.get_json()
    function = data["function"]
    symbol = data["symbol"]

    query_url = construct_query_url(function = function, symbol = symbol)
    av_list = get_alphavantage_data(query_url= query_url)

    output = io.StringIO()
    writer = csv.writer(output)

    column_names = list(av_list[0].keys())
    writer.writerow(column_names) # set column names

    print(av_list[0][column_names[0]])

    for dicts in av_list:
        temp_dict = {}
        for i in range(0, len(column_names)): # no idea why the fuck this was broken for a while
            temp_dict[column_names[i]] = dicts[column_names[i]]
        writer.writerow(temp_dict.values())
    
    output.seek(0)
    return send_file(
        io.BytesIO(output.getvalue().encode('utf-8')),
        mimetype='text/csv',
        as_attachment=True,
        download_name='data.csv'
    )



