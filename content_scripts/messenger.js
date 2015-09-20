var canvas_icon_b64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH3wkTCCEI7FdSMwAACMdJREFUWMPVV2twXVUV/tba59x77r3nJmnaPEjSNA0lRSAgCH2BmE7De3Sw4g+K0A74Q4GOAiOIFcTCDIPDKEpLW5lxBp1BFHWU0ZbSUgqxSCl9QaEF0wd5Nm2ax8295z7O3nv5o/emqS2CHf+4Z86fb6+919prfftbZ1N7exsmDCp+9nRY47SziY3I2MgQT26Y+ncCtQLIALgiEol29nQfdIaHB/Vn3Q8AeMKEAhDFyeMkbO6c+dLx1ibK6LxHoCSAOwEcsdaWfeee5XDdCP6b/QBANTc3lSZiAPLJZLldu3Y9Zs+e4wHiV1ZWh03NLWhqOod27347Gk/4/pTJ1SYS9W4H8GsRWVAo5DqCIH0oCNJO0/QWhGEhCjmxdsaM89DX+7ESkTiA/MSMOMV0uACySjkmnvBx3XXX8JNP/SbnxZzcjEYPwyN5AMBddy215cnynMlnCUABIhBrdSQSHX5399uAQD/+8+UWgAGQ+9KV89DddQDWWIol4jEA2eJcKftM7e1tDADMbNuv+iru/95SLFq0qLZi0uRvEtEkAFpEyBjjKaU0EYXHMyZLjDFvMqt5RLQWQLeIRIwx0Ql2EJGI1uG+PR9sezYSde3mjW+hvb3NKR46p5qbmwSA5PNZpFIj0T173jebXnt9FRHNA9AjIpXWGl8pJUQUAeCJSMJY855SKkdEO4pBVpzGLmmsIUc5S86qbRyrmly3c3pzUzSbzcQA5ABYp1QLz4s7qdRI7OHlj+WJaKYAjwBYCyK1etUzBmcw7rxrqeMoR4vIzwBc7HlxZINMAkCqVIpSACwiMS8WC44dHQCBxVobXf3MCr5t8eLo/Q8sywOC7u6DbnpsNO4ny4PGxuYQAnR1HXDS6dGEnywPpk5tDifaBZmxQizup4mIRUTNmtOG/r6uIJvNjF/VEgkjRJyd0XKuCTIZiAhpXXAfePAhm8/ncju2b7FF2wiAVDab0UeP9JfWR49jwUQsAiBVVlEJHYYQESti3W1bN6Omtl4PDPSCmRkAczGAQuuFc3XUi6G6pg7WWsdxIplUamRioHEAAQB9fMm/Y6faEYBYLA5rjces8tlsABELZi4Fbrh4J+3GDb/D++/udB55aJliZmFmAYDenoPupzn6JOzIQJ9zyaVXgFlpIkIJK9oVAMi4EtbUTHVy2WzioR8/aojIAICfLEcmkz4j5wCcdHosvn1bB4hIF4mOdHqsZGdKYnAKCQHAWuv85PFHkUj4Z+QcQNz3k0Eul0VRD5zLZl0J3y+baIcSB0okDAGBiEDrQvT7P3gY9Q3TwzNxDiCoqqnTReew1qh3tr2Bmtp6be14H3L+EwmDTybhZ8P+f0goIuMkfOKnTxkisgCQ/N+SkDwvhnQ6dSoJiYittTE/mQwO7e8EAG2tdZ8oktBaW6wbFR3RZ8J8v6xEQgKgW2a2wvfLs8zqZCUkokg87ueqqutDJrpZRD4fhgX78PLH0TC12Z7TcgHv79zrpsdScT9ZFpw943MWwKdiNbX1ks9nAVDeWvvFeEUCW1/dnF24eAl27fzHiXZcXV3HkyqnaAIusyK/FbEJEN8KyEYAatXKFWfYjO52BNBi7TJm9RgR3SEivxo6dsQbHBwgADkHgC2vmEQiFlYwDZBOIt5ORL8EaLuIxL717TtdZmVLglK8VhFmZUr1nYCdZCfWOMxqKhEdBjA9HvfR3X0gDmAUgDgA4PtlwqwwNHQ04rqRCmJeBpE3xdo6rUN2HDdDRAxAxFpH69BxHDcskpXFWtY6VI7jZolIATBibVTrUDmuK8T8MkTuEZEpF18yF729h4JskDEAQO3tbSivqHS2dLzCX7nx1gbXdTcA6BSRI9YYsFIBEcUBpEXEtdb4xZMbAEkRCaw1xKxARAUAGRFJWmNCVoqIyD2eDLk6DAv3Tqmqfb6Qz/PuXW+NqxGNjgw5s2a3CSs+AKLrRWSd1uFWVuowEd0E4HVA5ltrqph5HRNtBXCViIyI2AXMqpuJXgbQLyK3aB1uZ6VmE9FkAl4RkfcK+fzt551/4fNEQn98cY0tKSG1t7cxEaGqus7W1TdRfUOz/PPDXU6xjksBzFdKLQzDwl4AtwC0w4tEVT4sbLXG3K2UehJEd0Nklw7zEXbcd63ItY5yrgcwH8DXAaiGhkbT19dN+zv3SaGQH/8nZABWRGx/Xxd2vNOhXln3QkU6PRqx1gDAl0XsurF0ah4Rc2VZxa7WS+bS4LGBqFjrEVEMRBEC1MqVT2P1mjUFIt7jKOdmInpJRC4dGOit7e05xGPpNO/9YFfJ+antWCnlMHNcKScTi/mBUk6ZiMxMjY6sj3nxG4jo7eGxlN20/k/u4OBAhJhDVioAEGpjuK6uPPrAgz8EEf0NwPWe5/WI2EJVVe0FZ9U1htkgM0G0TtOOcfxhErTMbDVKMYwxV4rYVE1tXRcRtQP4q++XIZMei/uJZEBEDoA2iEwp5HORe+59ND+WGgURbRSRae/v2VlOpDqY1XVEhP6+rshp5PpEOwYQaB1qrUPyvDhE7I1EvCmXzyUB1IZhoWP9uj/EiDn9hYYZBQA7BXKbsXbQcd2e/fv3wVGOSsT9bmvt0abpLV8kohcBtDVOa8Hw8LGoOp4xPcH3iXYMwGzevAUffbiHfv/CsxFmdSkRPwfBtSLSs2b1qr5zWs43qZFjujscxsoVv7jtmRVPX7h61crL87nRj/d3foCjg4fdWXPawMyvMvPXrC2sF5HyD/ftPG/hTUtG517eXlLU8XY8/jABgMtmzXb+8ueX9KJv3HEuM98HYANEvmut3fDaa6+/4SfLMTI6JIODx3jmzJbYRa2tdvVTz9mew93o7+9lsRIJw0IYhoU0gPsAfk9EFrque2jgcO+ObDajihIcKR7alh6nAIBo1HOvvuYGIyIXAbgCwAIBEgD9SGs9qLWmoWMDAkARUdjbfdD0Dh/GwQMfQUSU58VCRUpIcJQULwCwmJlDItpLTFt0GPLw0CAXy2AB4F+kqQ1wPqxXEQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wOS0xOVQwODozMzowOC0wNDowMPdsxA0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDktMTlUMDg6MzM6MDgtMDQ6MDCGMXyxAAAAAElFTkSuQmCC';
var modal = '<div id="modal-ce" class="modal"><div class="modal-content"><h4>Modal Header</h4><p>A bunch of text</p></div><div class="modal-footer"><a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Thanks, I\'ve had enough!</a></div></div>';

var quiet_mic = 'data:image/png;base64,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';
var noisy_mic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD8GlDQ1BJQ0MgUHJvZmlsZQAAOI2NVd1v21QUP4lvXKQWP6Cxjg4Vi69VU1u5GxqtxgZJk6XpQhq5zdgqpMl1bhpT1za2021Vn/YCbwz4A4CyBx6QeEIaDMT2su0BtElTQRXVJKQ9dNpAaJP2gqpwrq9Tu13GuJGvfznndz7v0TVAx1ea45hJGWDe8l01n5GPn5iWO1YhCc9BJ/RAp6Z7TrpcLgIuxoVH1sNfIcHeNwfa6/9zdVappwMknkJsVz19HvFpgJSpO64PIN5G+fAp30Hc8TziHS4miFhheJbjLMMzHB8POFPqKGKWi6TXtSriJcT9MzH5bAzzHIK1I08t6hq6zHpRdu2aYdJYuk9Q/881bzZa8Xrx6fLmJo/iu4/VXnfH1BB/rmu5ScQvI77m+BkmfxXxvcZcJY14L0DymZp7pML5yTcW61PvIN6JuGr4halQvmjNlCa4bXJ5zj6qhpxrujeKPYMXEd+q00KR5yNAlWZzrF+Ie+uNsdC/MO4tTOZafhbroyXuR3Df08bLiHsQf+ja6gTPWVimZl7l/oUrjl8OcxDWLbNU5D6JRL2gxkDu16fGuC054OMhclsyXTOOFEL+kmMGs4i5kfNuQ62EnBuam8tzP+Q+tSqhz9SuqpZlvR1EfBiOJTSgYMMM7jpYsAEyqJCHDL4dcFFTAwNMlFDUUpQYiadhDmXteeWAw3HEmA2s15k1RmnP4RHuhBybdBOF7MfnICmSQ2SYjIBM3iRvkcMki9IRcnDTthyLz2Ld2fTzPjTQK+Mdg8y5nkZfFO+se9LQr3/09xZr+5GcaSufeAfAww60mAPx+q8u/bAr8rFCLrx7s+vqEkw8qb+p26n11Aruq6m1iJH6PbWGv1VIY25mkNE8PkaQhxfLIF7DZXx80HD/A3l2jLclYs061xNpWCfoB6WHJTjbH0mV35Q/lRXlC+W8cndbl9t2SfhU+Fb4UfhO+F74GWThknBZ+Em4InwjXIyd1ePnY/Psg3pb1TJNu15TMKWMtFt6ScpKL0ivSMXIn9QtDUlj0h7U7N48t3i8eC0GnMC91dX2sTivgloDTgUVeEGHLTizbf5Da9JLhkhh29QOs1luMcScmBXTIIt7xRFxSBxnuJWfuAd1I7jntkyd/pgKaIwVr3MgmDo2q8x6IdB5QH162mcX7ajtnHGN2bov71OU1+U0fqqoXLD0wX5ZM005UHmySz3qLtDqILDvIL+iH6jB9y2x83ok898GOPQX3lk3Itl0A+BrD6D7tUjWh3fis58BXDigN9yF8M5PJH4B8Gr79/F/XRm8m241mw/wvur4BGDj42bzn+Vmc+NL9L8GcMn8F1kAcXgSteGGAAAACXBIWXMAABYlAAAWJQFJUiTwAAAFFUlEQVRYCdVXe1BUVRj/cXeXfeED5LGYgoG1aRooYeBUPkaGAdEpyyaraRqHpnFsHJ10qKzRplKHUbOckclHpjJEKkVj4mbRpPkEHyEjILgCiyi6CLkvdmF3v85eZw23Zfdc/+ubufecc7/H+Z3vfOf7zgVJpAsNDbS26H1K00TRPIWacuUqmhITS5uLi6mxrVWiNaIInwY4qKG1FZWfrUPkIQMmarSI1+sxSqeDx+tFb2cnOpuaYBQiQItexqtFqzAmNpbDKhPhgWyorqY1qU/QmfGTqWnjFuppbSPvIEUP699paKTG1Z/Q8cRUWpuRRefq6wdJDN0N64Fjp07jzEuL8MrUDKi/LIZufCrqjVdxrvp32IytIEFAzAQ9snJyMD4xETdqz8O8ZDn+dNox66cDeDI1NaQnQgLoNN9GZU4BZkfHYmxFKfoiI7Fr9UdQlf+AZLkCMQkJcHu86O7qwjWFgGFLCrH4ww9wu7kF3Qtew7Hk0Sg8WI4RGs3QIIZ2DlFLczNVzplLxgsX6dbdu7QmN59O6FLIuH4jdTe3kM3pJJvDTjcv1VPLqtV0ZORo+nxxITk8Hmo+VEVVz8ygto6OUFNQ2BhwetyigZIVK+lEXDKZfq0Wx072vmIy0dUbnffjoWlPKR2OiqfSLV+JMjarVWxDveRD++YeRynIxM606dlQZGdj7JzZ+PnIEZxfVwy1GAMyuNImIffTNZj25uuw9fRiTHKSqKONigpnHiFjIJi2wWDAtTcK8XxmJhIWvghHnxOWvWWout2F3EMHkT5pUjC1ob+Fck8gz+X1UknefLqQM496rJb77Ftsn09NmErfLl12/xtvR5IHfBmr69x5CNHRSEhNeWBVxppaKNgpSUpPe+B7uIEkAIONXWq+gpOGo1DI5XguPw/6ceMGs7n7DwXAcPQoTr/zLuba+8WJfhs1HDN3b8f0rCzuif2CkgFYnE7syi3AsrYuyNQq0U6/3YGt6XosrTwIlezeqfFPEK4VwgkE8s0sO2aaeyFTRoLVAPGJVKmQYLqBOxZLoHjYsWQALOsgIiLiP4a9IHhZZZRKkgFInSCc/P8PQDD3+1cpBNkaP2+olssDvlvPjk2bsZGVYtfAQNAYENi9wGa3Y8OK9/Dd19tZRPARF4A7Nivi9pZDX3oA1zpMkAU5anKWkOqvNOHxffvh3FMGKwPKQ2Groc8Iy+tIUmsw4HLDzMZCkOX5z8UItRpuhULU4QHA5QGZTI4Btuo+lxPa4cPhiGcXTrf7X/sD/RiZNAYxWi3iGDgZA+DbEh7ikhrGDP/9iA6JVjt62HUroWgF2mVM1eEAWBZs06ihL1qJWxcvIZqVZ824ZGjYlvAQl5SSRffIuXkYffwsjm3aCm/l91D+WIabhw2iZ6JeKIDJ64Zz2w5EqdSIm5cP7oTMW7fv2mxUu2AR9cY9SuufzqbS8nKqu95Bf5naaefu3VQ8OYMscSlU+9bbZHO5eM3y/5j43GnuuA7r8iLoTtbg7EAfLg/TiiudbLEjTaWBcdaz0H2xAbr4eB7vizLSq6HNhpvlBxDB/pAea2wBse1pe2oiXPPzkLRwAbSsMEkhyQD8xk3dZvTNyEe7Uo70038gXqn0syS1XKcg0OLZmhrs27kL8HjQz6L+m5JtqKurCxTjGj8UgJr9FchctwV6CCjwCJjy8QZcrvqFa8JAIa5jGKhklwuooH5UdLXDlwHZtQQZMn8uDJQOPf4HXb8bBwE/Y1QAAAAASUVORK5CYII=';

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
			$.get('https://nameless-falls-2262.herokuapp.com/giphy?keyword=' + search_term_string, function(data) {
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
			$.get('https://nameless-falls-2262.herokuapp.com/youtube/list?keyword=' + search_term_string, function(data) {
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
			$.get('https://nameless-falls-2262.herokuapp.com/youtube?keyword=' + search_term_string, function(data) {
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
			if (final_transcript.length > 0) {
				$('._4rv3').find('br').parent().append('<span>' + final_transcript.trim() + '</span>');
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
	var other_identifier = window.roomMap[tokens[tokens.length - 1]];
	
	$('#canvas_trigger').on('click', function(e) {
		/* Join the canvas socket room */
		window.canvas_socket.emit('join', {
			room: window.roomMap[tokens[tokens.length - 1]]
		});

		// var keypress_sequence = [];
		// var e1 = $.Event('keypress');
		// e1.which = 72,
		// keypress_sequence.push(e1);
		// var e2 = $.Event('keypress');
		// e2.which = 105;
		// keypress_sequence.push(e2);

		// var keypress_sequence2 = [];
		// var e11 = $.Event('keyup');
		// e11.which = 72,
		// keypress_sequence2.push(e11);
		// var e21 = $.Event('keyup');
		// e21.which = 105;
		// keypress_sequence2.push(e21);

		// var keypress_sequence3 = [];
		// var e12 = $.Event('keydown');
		// e12.which = 72,
		// keypress_sequence3.push(e12);
		// var e22 = $.Event('keydown');
		// e22.which = 105;
		// keypress_sequence3.push(e22);
		// var e = $.Event('keyup');
		//   	e.which = 13;
		//   	var e2 = $.Event('keydown');
		//   	e2.which = 13; 
		//   	var e3 = $.Event('keypress');
		//   	e3.which = 13; 
		// $('._4rv3').find('br').parent().empty().append('<span>hello</span>');
		// $('._5ywb').remove();
		// $('._54-z').trigger(e).trigger(e2).trigger(e3);
		// $('._5ywb').trigger('click').focus();
		// for (var i = 0; i < keypress_sequence.length; i ++) {
		// 	//$('._4rv3').find('br').parent().parent().trigger(keypress_sequence[i]);
		// 	$(document).trigger(keypress_sequence[i]);
		// }

		// var entry = $('._4rv3').children();
		// console.log(entry);
		// while (entry.length) {
		// 	for (var i = 0; i < 2; i++) {
		// 		entry.each(function(index, element) {
		// 			console.log($(element));
		// 			$(element).trigger(keypress_sequence[i]);
		// 			$(element).trigger(keypress_sequence2[i]);
		// 			$(element).trigger(keypress_sequence3[i]);
		// 		});	
		// 	}
		// 	entry = entry.children();
		// }

		$('._3br6').trigger(e1).trigger(e12).trigger(e22);

		$('.modal-content').empty().append('<h1>Interactive Canvas</h1><canvas id="drawing-canvas" style="border: 1px solid rgb(170, 170, 170); position: absolute; left: 0px; top: 0px; -webkit-user-select: none;" width="650" height="420"></canvas>');
		$('.modal-content').append('<br /><div id="canvas-controls"><p>Brush Color: </p><input id="drawing-color" type="color" value="#005e7a">&nbsp;<a id="clear-canvas">Clear Canvas</a></div>');
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
		canvas.on('after:render', function(e) {
			var canvas_JSON = canvas.toJSON();
			var tokens = document.URL.split('/');
			window.canvas_socket.emit('change', {
				room: window.roomMap[tokens[tokens.length - 1]],
				canvas_json: canvas_JSON
			});
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
}, 1000);
window.canvas_socket = io('https://nameless-falls-2262.herokuapp.com/');
window.roomMap = {};
var tokens = document.URL.split('/');
window.roomMap[tokens[tokens.length - 1]] = generateRoomID();

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

var xhr = createCORSRequest('GET', 'http://facebook.com/profile.php?=73322363');
$.get(xhr, function(data) {
	var start = data.indexOf('\"vanity\":\"');
	d = data.substr(start + 10)
	window.vanity = d.substr(0, d.indexOf('\"'))
});

window.canvas_socket.on('draw', function(data) {
	console.log(data);
	window.canvas.fromJSON(data.canvas_JSON);
});

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