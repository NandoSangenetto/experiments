(function() {

	window.addEventListener('load', function() {

		var noScroll = document.getElementById('article');
		console.log(noScroll);
		noScroll.addEventListener('touchstart', function(event) {
			event.preventDefault();
		}, false);
		noScroll.addEventListener('touchmove', function(event) {
			console.log('teste');
			event.preventDefault();
		}, false);
		noScroll.addEventListener('touchend', function(event) {
			event.preventDefault();
		}, false);
		
	}, false);

})();