import json
import urllib

def get_embed_URL(search):
	mod_input = search.replace(" ", "+")
	url = 'http://api.giphy.com/v1/gifs/search?q='+ mod_input + '&api_key=dc6zaTOxFJmzC'
	data = urllib.urlopen(url).read()
	return json.loads(data)['data'][0]['embed_url']