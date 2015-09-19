var canvas_icon_b64 = 'data:image/png;base64,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';
var modal = '<div id="modal-ce" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>A bunch of text</p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Thanks, I\'ve had enough!</a></div></div>';

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
			$.get('https://fbpowerchat.cloudapp.net/giphy?keyword=' + search_term_string, function(data) {
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
			$.get('https://fbpowerchat.cloudapp.net/youtube/list?keyword=' + search_term_string, function(data) {
				var data = JSON.parse(data);
				if (data.result == 'failure') {
					$(message).empty().html('<span><strong>Sorry</strong> :( We couldn\'t find a match on YouTube for that.</span>').hide().fadeIn();
				} else {
					var list = '';
					for (var i = 0; i < data.data.length; i++) {
						list += '<span><h1 onclick="render_player(this, ' + data.data[i][1].replace('watch?v=', 'embed/') + ')">' + data.data[i][0] + '</h1></span><br />';
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
			$.get('https://fbpowerchat.cloudapp.net/youtube?keyword=' + search_term_string, function(data) {
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
	});
};

var init_microphone = function() {
	$('._4rv4').prepend('<li title="Input messages via voice"><div style="width: 30px; height: 30px;" id="microphone"></div></li>');
	// DO NOT EDIT HERE
};

var init_canvas = function() {
	//$('._4rv4').css('width', '196px');
	$('._4rv4').prepend('<li title="Work on a canvas"><a><img width="30" height="30" id="canvas_trigger" /></a></li>');
	$('#canvas_trigger').attr({
		'src': 'data:image/png;base64,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'
	});
	$('#canvas_trigger').on('click', function(e) {
		$('.modal-content').empty().append('<h1>Interactive Canvas</h1><canvas id="drawing-canvas" style="border: 1px solid rgb(170, 170, 170); position: absolute; left: 0px; top: 0px; -webkit-user-select: none;" width="650" height="420"></canvas>');
		$('.modal-content').append('<br /><div id="canvas-controls"><p>Brush Color: </p><input id="drawing-color" type="color" value="#005e7a">&nbsp;<a id="clear-canvas">Clear Canvas</a></div>');
		var canvas = new fabric.Canvas('drawing-canvas', {
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
		canvas.on('after:render', function(e) {
			var canvas_JSON = canvas.toJSON();
			var tokens = document.URL.split('/');
			window.canvas_socket.emit('change', {
				room: window.roomMap[tokens[tokens.length - 1]],
				canvas: canvas_JSON
			});
		});
		window.canvas_socket.on('draw', function(data) {
			console.log(data);
		});
	});
}

var render_player = function(elem, link) {
	console.log(elem, link);
}

console.log('Initializing the awesome.');
window.num_messages = $('._1t_p').length;
setTimeout(function() {
	checkMessages();
	$('body').append(modal);
	init_canvas();
	init_microphone();
	var tokens = document.URL.split('/');
	window.canvas_socket.emit('join', {
		room: window.roomMap[tokens[tokens - 1]]
	});
}, 1000);
window.canvas_socket = io('https://fbpowerchat.cloudapp.net:5000');
window.roomMap = {};
var tokens = document.URL.split('/');
window.roomMap[tokens[tokens.length - 1]] = generateRoomID();

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