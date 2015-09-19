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
		if len(json_list) == 0:
			return "{'type': 'giphy', 'data':'no data', 'result':'failure'}"
		else:
			return "{'type': 'giphy', 'data':" + json_list[0]['embed_url'] + ", 'result':'success'}"

@app.route('/youtube', methods=['GET'])
def youtube():
	if request.method == 'GET':
		mod_input = request.args.get('keyword').replace(" ", "+")
		API_key = 'AIzaSyBQB5ELmm4MbpQUJLT3xR9rfyhYFEksgvc'
		url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + mod_input + "&key=" + API_key
		data = urllib.urlopen(url).read()
		json_list = json.loads(data)['items']
		if len(json_list) == 0:
			return "{'type': 'youtube', 'data':'no data', 'result':'failure'}"
		else:
			video_id = json_list[0]['id']['videoId']
			url = 'https://www.youtube.com/watch?v=' + video_id
			return "{'type': 'youtube', 'data':" + url + ", 'result':'success'}"


if __name__ == "__main__":
    app.run()