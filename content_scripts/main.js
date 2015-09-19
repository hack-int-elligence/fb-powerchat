var generateForm = function(message) {
	var form = '';
	var queries = message.split('?');
	for (var i = 1; i < queries.length; i++) {
		var KVPair = queries[i];
		var key = KVPair.split('=')[0];
		var value = KVPair.split('=')[1];
		if (key === 'input') {
			form += '<span><form action="https://www.google.com"><input type="text" placeholder="Enter text here"><input type="submit" value="Submit"></form>';
		} else {
			form += '<span><p>' + key + ': ' + value + '</p></span>';
		}
	}
	return form;
};

var renderForm = function() {
	$('.webMessengerMessageGroup').each(function(index, messageGroup) {
		$(messageGroup).find('p').each(function(index, element) {
			var actualMessage = $(element).text();
			renderElement(actualMessage, element);
		});
	});
};

var renderElement = function(actualMessage, element) {
	if (actualMessage.indexOf('!!FBForm') > -1) {
		var form = generateForm(actualMessage);
		$(element).parent().parent().empty().append(form);
	}
	if (actualMessage.indexOf('/giphy') > -1) {
		var search_term_string = actualMessage.substring(7).replace(/ /g, '+');
		var searchURL = 'https://api.giphy.com/v1/gifs/search?q=' + search_term_string + '&api_key=dc6zaTOxFJmzC';
		$.get(searchURL, function(data) {
			if (!data.data[0]) {
				$(element).parent().parent().empty().append('<span><h1>Sorry, we couldn\'t find a match on Giphy for that.</h1></span>').hide().fadeIn();
			}
			var embed_url = data.data[0].embed_url;
			$(element).parent().parent().empty().append('<span><iframe src="' + embed_url + '"></iframe></span>').hide().fadeIn();
		});
	}
};

$(document).on('click', renderForm);
$(document).on('keyup', function(e) {
	if (e.keyCode === 13) {
		setTimeout(function() {
			renderForm();
		}, 200);
	}
});
// $('.uiTextareaNoResize uiTextareaAutogrow _1rv').on('keyup', function(e) {
// 	if (e.keyCode === 13) {
// 		setTimeout(function() {
// 			renderForm();
// 		}, 200);
// 	}
// });

// window.onload = window.onpageshow = function () {
//     console.log('Running script on a Facebook messages page.');
//     loadBox();
// };