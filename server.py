from flask import Flask
from flask import request
from flask_sockets import Sockets

import urllib
import json

app = Flask(__name__)
sockets = Sockets(app)

@sockets.route('/echo')
def echo_socket(ws):
    while True:
        message = ws.receive()
        ws.send(message)

@app.route('/')
def hello():
	return 'Hello World!'

@app.route('/giphy', methods=['GET'])
def giphy():
	if request.method == 'GET':
		mod_input = request.args.get('keyword').replace(" ", "+")
		url = 'http://api.giphy.com/v1/gifs/search?q='+ mod_input + '&api_key=dc6zaTOxFJmzC'
		data = urllib.urlopen(url).read()
		json_list = json.loads(data)['data']
		print(json_list)
		if len(json_list) == 0:
			return "{'type': 'giphy', 'data':'no data', 'result':'failure'}"
		else:
			return "{'type': 'giphy', 'data':" + json_list[0]['embed_url'] + ", 'result':'success'}"

if __name__ == "__main__":
    app.run()