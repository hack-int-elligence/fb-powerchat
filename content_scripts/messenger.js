var canvas_icon_b64 = 'data:image/png;base64,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';
var modal = '<div id="modal-ce" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>A bunch of text</p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Thanks, I\'ve had enough!</a></div></div>';

var quiet_mic = 'data:image/png;base64,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';
var noisy_mic = 'data:image/png;base64,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';

var movie_icon = 'data:image/png;base64,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'

var host = 'https://fbmessengernode.azurewebsites.net';

window.twttr = (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
	if (d.getElementById(id)) return t;
	js = d.createElement(s);
	js.id = id;
	js.src = "https://platform.twitter.com/widgets.js";
	fjs.parentNode.insertBefore(js, fjs);

	t._e = [];
	t.ready = function(f) {
		t._e.push(f);
	};

	return t;
}(document, "script", "twitter-wjs"));

var generateRoomID = function(bits, base) {
	if (!base) base = 16;
	if (bits === undefined) bits = 128;
	if (bits <= 0) return '0';

	var digits = Math.log(Math.pow(2, bits)) / Math.log(base);
	for (var i = 2; digits === Infinity; i *= 2) {
		digits = Math.log(Math.pow(2, bits / i)) / Math.log(base) * i;
	}

	var rem = digits - Math.floor(digits);

	var res = '';

	for (var i = 0; i < Math.floor(digits); i++) {
		var x = Math.floor(Math.random() * base).toString(base);
		res = x + res;
	}

	if (rem) {
		var b = Math.pow(base, rem);
		var x = Math.floor(Math.random() * b).toString(base);
		res = x + res;
	}

	var parsed = parseInt(res, base);
	if (parsed !== Infinity && parsed >= Math.pow(2, bits)) {
		return hat(bits, base)
	} else return res;
};

var checkMessages = function() {
	$('._1t_s').find('._3oh-').each(function(index, message) {
		var actualMessage = $(message).text();
		if (actualMessage.indexOf('/giphy') > -1) {
			var search_term_string = actualMessage.substring(7).replace(/ /g, '+');
			$.get(host + '/giphy?keyword=' + search_term_string, function(data) {
				var data = JSON.parse(data);
				if (data.result == 'failure') {
					$(message).empty().html('<span><strong>Sorry</strong> :( We couldn\'t find a match on Giphy for that.</span>').hide().fadeIn();
				} else {
					var embed_url = data.data;
					$(message).parent().css({
						'padding': '0',
						'background-color': 'rgba(100,100,100,0.1)',
					});
					$(message).empty().append('<span><iframe frameborder="0" src="' + embed_url + '"></iframe></span>').hide().fadeIn();
				}
			});
		}
		if (actualMessage.indexOf('docs.google.com/forms') > -1) {
			var embed_url = actualMessage + '?embedded=true';
			$(message).parent().css({
				'min-height': '500px',
				'min-width': '100%',
				'padding': '0',
				'background-color': 'rgba(100,100,100,0.1)',
			});
			$(message).empty().append('<span><iframe frameborder="0" height="505px" width="100%" src="' + embed_url + '" allowfullscreen></iframe></span>');
		}
		if (actualMessage.indexOf('/youtube-list') > -1) {
			var search_term_string = actualMessage.substring(14).replace(/ /g, '+');
			$.get(host + '/youtube/list?keyword=' + search_term_string, function(data) {
				var data = JSON.parse(data);
				if (data.result == 'failure') {
					$(message).empty().html('<span><strong>Sorry</strong> :( We couldn\'t find a match on YouTube for that.</span>').hide().fadeIn();
				} else {
					var list = '';
					for (var i = 0; i < data.data.length; i++) {
						list += '<span><h1 onclick="render_player(' + data.data[i][1].replace('watch?v=', 'embed/') + ')">' + data.data[i][0] + '</h1></span><br />';
					}
					$('.modal-content').empty().append(list);
					$('#modal-ce').openModal();
					//$(message).empty().append(list);
					// $(message).parent().css({
					// 	'min-height': '250px',
					// 	'min-width': '80%',
					// 	'padding': '0',
					// 	'background-color': 'rgba(100,100,100,0.5)',
					// });
					// var embed_url = data.data.replace('watch?v=', 'embed/');
					// $(message).empty().append('<span><iframe width="100%" height="250px" frameborder="0" src="' + embed_url + '" allowfullscreen></iframe></span>');
				}
			});
		} else if (actualMessage.indexOf('/youtube') > -1) {
			var search_term_string = actualMessage.substring(9).replace(/ /g, '+');
			$.get(host + '/youtube?keyword=' + search_term_string, function(data) {
				var data = JSON.parse(data);
				if (data.result == 'failure') {
					$(element).parent().parent().empty().append('<span><p>Sorry, we couldn\'t find a match on YouTube for that.</p></span>').hide().fadeIn();
				} else {
					$(message).parent().css({
						'min-height': '250px',
						'min-width': '80%',
						'padding': '0',
						'background-color': 'rgba(100,100,100,0.1)',
					});
					var embed_url = data.data.replace('watch?v=', 'embed/');
					$(message).empty().append('<span><iframe width="100%" height="250px" frameborder="0" src="' + embed_url + '" allowfullscreen></iframe></span>');
				}
			});
		}
		if (actualMessage.indexOf('!!CanvasRequest::') > -1) {
			var room_id = actualMessage.substring(17);
			var tokens = document.URL.split('/');
			window.roomMap[tokens[tokens.length - 1]] = room_id;
			$('#canvas_trigger').trigger('click');
		}
	});
};

var init_map = function() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: -34.397,
			lng: 150.644
		},
		zoom: 6
	});
	var infoWindow = new google.maps.InfoWindow({
		map: map
	});

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			map.setCenter(pos);
		}, function() {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
};

var handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
};

var init_microphone = function() {
	$('._4rv4').prepend('<li title="Input messages via voice"><img style="width: 30px; height: 30px;" id="microphone" src="' + quiet_mic + '" "></li>');
	var final_transcript = '';
	var recognizing = false;
	var ignore_onend;
	var start_timestamp;
	var start_img = $('#microphone');
	$('#microphone').on('click', function() {
		if (recognizing) {
			recognition.stop();
			return;
		}
		final_transcript = '';
		recognition.lang = 'en-US';
		recognition.start();
		ignore_onend = false;
		$('._3br6').text('Listening to voice input...');
		window.interim_span.innerHTML = '';
		start_img.attr('src', noisy_mic);
		//showInfo('info_allow');
		//showButtons('none');
		window.start_timestamp = event.timeStamp;
	});
	if (!('webkitSpeechRecognition' in window)) {
		console.log('Unsupported in this browser.')
	} else {
		var recognition = new webkitSpeechRecognition();
		recognition.continuous = true;
		recognition.interimResults = true;

		recognition.onstart = function() {
			recognizing = true;
			console.log('Recognition beginnning');
			start_img.attr('src', noisy_mic);
		};

		recognition.onerror = function(event) {
			if (event.error == 'no-speech') {
				start_img.attr('src', quiet_mic);
				console.log('no speect');
				ignore_onend = true;
			}
			if (event.error == 'audio-capture') {
				start_img.attr('src', quiet_mic);
				console.log('info_no_microphone');
				ignore_onend = true;
			}
			if (event.error == 'not-allowed') {
				start_img.attr('src', quiet_mic);
				if (event.timeStamp - window.start_timestamp < 100) {
					console.log('info_blocked');
				} else {
					console.log('info_denied');
				}
				ignore_onend = true;
			}
		};

		recognition.onend = function() {
			recognizing = false;
			if (ignore_onend) {
				return;
			}
			start_img.attr('src', quiet_mic);
			if (!final_transcript) {
				console.log('info_start');
				return;
			}
			// if (window.getSelection) {
			// 	window.getSelection().removeAllRanges();
			// 	var range = document.createRange();
			// 	range.selectNode(document.getElementById('final_span'));
			// 	window.getSelection().addRange(range);
			// }
		};

		recognition.onresult = function(event) {
			window.interim_transcript = '';
			if (typeof(event.results) == 'undefined') {
				recognition.onend = null;
				recognition.stop();
				return;
			}
			//start_img.attr('src', q_mic);
			for (var i = event.resultIndex; i < event.results.length; ++i) {
				if (event.results[i].isFinal) {
					final_transcript += event.results[i][0].transcript;
				} else {
					interim_transcript += event.results[i][0].transcript;
				}
			}

			//$('._3br6').text(linebreak(final_transcript));
			console.log(linebreak(final_transcript));
			if (final_transcript.trim().length > 0) {
				var react_id = $('._4rv3').find('br').data('reactid');
				$('._4rv3').find('br').parent().append('<span data-reactid="' + react_id + '">' + final_transcript.trim() + '</span>');
				$('._4rv3').find('br').remove();
				$('._5ywb').remove();
			}
			// interim_span.innerHTML = linebreak(interim_transcript);
			if (final_transcript || interim_transcript) {
				console.log('complete', final_transcript);
			}
		};
	};
}

var two_line = /\n\n/g;
var one_line = /\n/g;

function linebreak(s) {
	return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var init_canvas = function() {
	//$('._4rv4').css('width', '196px');
	$('._4rv4').prepend('<li title="Work on a canvas"><a><img width="30" height="30" id="canvas_trigger" /></a></li>');
	$('#canvas_trigger').attr({
		'src': 'data:image/png;base64,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'
	});

	$('#canvas_trigger').on('click', function(e) {
		/* Join the canvas socket room */
		tokens = document.URL.split('/');
		var other_identifier = tokens[tokens.length - 1];
		var xhr = createCORSRequest('GET', 'http://facebook.com/profile.php?=73322363');
		$.get(xhr, function(data) {
			var start = data.indexOf(other_identifier);
			d = data.substr(start + other_identifier.length + 13);
			other_identifier = d.substr(0, d.indexOf('\"'));

			var roomID = '';
			console.log(window.vanity);
			if (window.vanity < other_identifier) {
				roomID = window.vanity + ':' + other_identifier;
			} else {
				roomID = other_identifier + ':' + window.vanity;
			}
			window.canvas_socket.emit('join', {
				room: roomID
			});

			$('.modal-content').empty().append('<canvas id="drawing-canvas" style="border: 1px solid rgb(170, 170, 170); position: absolute; left: 0px; top: 0px; -webkit-user-select: none;" width="650" height="350"></canvas>');
			$('.modal-content').append('<br /><p>This canvas allows you to interact with people on this chat. Start whiteboarding your ideas instantly on Facebook!</p><div id="canvas-controls">Brush Color: <input id="drawing-color" type="color" value="#005e7a">&nbsp;<a style="float: right" id="clear-canvas">Clear Canvas</a></div>');
			var canvas = window.canvas = new fabric.Canvas('drawing-canvas', {
				isDrawingMode: true
			});

			fabric.Object.prototype.transparentCorners = false;

			var drawingModeEl = document.getElementById('drawing-mode'),
				drawingOptionsEl = document.getElementById('drawing-mode-options'),
				drawingColorEl = document.getElementById('drawing-color'),
				drawingShadowColorEl = document.getElementById('drawing-shadow-color'),
				drawingLineWidthEl = document.getElementById('drawing-line-width'),
				drawingShadowWidth = document.getElementById('drawing-shadow-width'),
				drawingShadowOffset = document.getElementById('drawing-shadow-offset'),
				clearEl = document.getElementById('clear-canvas');

			clearEl.onclick = function() {
				canvas.clear()
			};

			drawingColorEl.onchange = function() {
				canvas.freeDrawingBrush.color = this.value;
			};

			if (canvas.freeDrawingBrush) {
				canvas.freeDrawingBrush.color = drawingColorEl.value;
				canvas.freeDrawingBrush.width = 5;
				canvas.freeDrawingBrush.shadowBlur = 0;
			}
			$('#modal-ce').openModal();
			canvas.on('mouse:up', function(e) {
				var canvas_JSON = canvas.toJSON();
				var tokens = document.URL.split('/');
				window.canvas_socket.emit('change', {
					room: roomID,
					canvas_json: canvas_JSON
				});
			});
		});
	});
}

var init_streamer = function() {
	$('._4rv4').prepend('<li title="Uploaed video files to stream!"><a><img style="width: 30px; height: 30px;" id="start_stream" src="' + movie_icon + '" "></a></li>');
	$('#start_stream').on('click', function() {
		$('.modal-content').empty().append('<h1>Select a video file to stream!</h1><input id="file-upload" type="file"></input>');
		$('#modal-ce').openModal();
	});
	//var mediaSource = new MediaSource();
	$(document).on('change', '#file-upload', function(e) {
		var file = e.target.files[0];
		var stream = ss.createStream();

		// upload a file to the server. 
		ss(window.streamer_socket).emit('file', stream, {
			size: file.size,
			file: file.name.replace(/ /g, '_'),
			type: file.type
		});
		ss.createBlobReadStream(file).pipe(stream);
	});
	// window.streamer_socket.on('livestream', function(stream, data) {
	// 	console.log(stream, data);
	// 	$('.modal-content').empty().append('<video width="640" height="380" id="video"></video>');
	// 	$('#video').attr('src', window.URL.createObjectURL(mediaSource));
	// 	mediaSource.addEventListener('webkitsourceopen', function(e) {
	// 		var sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vorbis,vp8"');

	// 		stream.on('data', function(data) {
	// 			console.log(data);
	// 			sourceBuffer.append(data);
	// 		});
	// 	});
	// });
	window.streamer_socket.on('livestream', function(data) {
		var source = host + '/stream/' + data.file;
		$('.modal-content').empty().append('<video width="640" height="380" id="video src="' + source + '" "></video>');
	});
};

var render_player = function(link) {
	console.log(link);
	$('.modal-content').empty().append('<iframe width="500" frameborder="0" height="400" src="' + link + '" allowfullscreen></iframe>');
}

console.log('Initializing the awesome.');
window.num_messages = $('._1t_p').length;
setTimeout(function() {
	checkMessages();
	$('body').append(modal);
	init_canvas();
	init_streamer();
	init_microphone();
	var tokens = document.URL.split('/');
}, 1000);
window.canvas_socket = io(host);
window.streamer_socket = io.connect(host + '/stream');
window.roomMap = {};
var tokens = document.URL.split('/');
window.roomMap[tokens[tokens.length - 1]] = generateRoomID();
window.MediaSource = window.MediaSource || window.WebKitMediaSource;
if (!!!window.MediaSource) {
	console.log('MediaSource API is not available!');
}

function createCORSRequest(method, url) {
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr) {
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined") {
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhr = null;
	}
	return xhr;
}

var xhr = createCORSRequest('GET', 'http://facebook.com/profile.php?=73322363');
$.get(xhr, function(data) {
	var start = data.indexOf('\"USER_ID\"');
	d = data.substr(start + 11);
	window.vanity = d.substr(0, d.indexOf('\"'));
});

window.canvas_socket.on('draw', function(data) {
	console.log(data);
	//window.canvas.clear();
	window.canvas.loadFromJSON(data.data);
});

function hasGetUserMedia() {
	return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
		navigator.mozGetUserMedia || navigator.msGetUserMedia);
}

if (hasGetUserMedia()) {
	// Good to go!
} else {
	alert('getUserMedia() is not supported in your browser');
}

setInterval(function() {
	var num_messages = $('._1t_p').length;
	if (num_messages > window.num_messages) {
		window.num_messages = num_messages;
		checkMessages();
	}
	if (!$('#canvas_trigger').length) {
		init_canvas();
	}
}, 1500);

$(document).on('keyup', function(e) {
	if (e.keyCode === 13) {
		setTimeout(function() {
			checkMessages();
		}, 200);
	}
});