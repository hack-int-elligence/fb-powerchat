var checkMessages = function() {
	$('._3oh-').each(function(index, message) {
		var actualMessage = $(message).text();
		if (actualMessage.indexOf('/giphy') > -1) {
			var search_term_string = actualMessage.substring(7).replace(/ /g, '+');
			var searchURL = 'https://api.giphy.com/v1/gifs/search?q=' + search_term_string + '&api_key=dc6zaTOxFJmzC';
			$.get(searchURL, function(data) {
				if (!data.data[0]) {
					//$(element).parent().parent().empty().append('<span><h1>Sorry, we couldn\'t find a match on Giphy for that.</h1></span>').hide().fadeIn();
				} else {
					var embed_url = data.data[0].embed_url;
					$(message).empty().append('<span><iframe frameborder="0" src="' + embed_url + '"></iframe></span>');
					//$(element).parent().parent().empty().append('<span><iframe src="' + embed_url + '"></iframe></span>').hide().fadeIn();
				}
			});
		}
		if (actualMessage.indexOf('docs.google.com/forms') > -1) {
			var embed_url = actualMessage + '?embedded=true';
			$(message).parent().css({
				'min-height': '500px',
				'min-width': '400px'
			});
			$(message).empty().append('<span><iframe frameborder="0" height="500px" width="400px" src="' + embed_url + '" allowfullscreen></iframe></span>');
		}
	});
};

console.log('Initializing the awesome.');
window.num_messages = $('._3oh-').length;

setInterval(function() {
	var num_messages = $('._3oh-').length;
	if (num_messages > window.num_messages) {
		window.num_messages = num_messages;
		checkMessages();
	}
}, 1500);

$(document).on('keyup', function(e) {
	if (e.keyCode === 13) {
		setTimeout(function() {
			checkMessages();
		}, 200);
	}
});