(function() {

	window.addEventListener('load', function() {


		var nSwipe = function(querySelector, callback) {

			var touchSurface = document.querySelectorAll(querySelector);

			touchSurface.forEach(function (element) {
			
				var	startX,
						startY,
						distanceX,
						distanceY,
						threshold		= 30,
						allowedTime	= 300,
						elapsedTime	= 0,
						startTime		= 0;

				function handleSwipe(top, right, bottom, left) {
					callback(top, right, bottom, left);
				}

				element.addEventListener('touchstart', function(event) {
					var touchObj	= event.changedTouches[0];

					distanceX	= 0;
					distanceY	= 0;
					startX		= touchObj.pageX;
					startY		= touchObj.pageY;

					startTime	= new Date().getTime();

					// event.preventDefault();
				}, false);

				element.addEventListener('touchmove', function(event) {
					event.preventDefault();
				}, false);

				element.addEventListener('touchend', function(event) {
					var touchObj		= event.changedTouches[0];

					distanceX		= touchObj.pageX - startX;
					distanceY		= touchObj.pageY - startY;
					elapsedTime	= (new Date().getTime()) - startTime;

					var swipeTopBoolean = (elapsedTime <= allowedTime && distanceY <= threshold && Math.abs(touchObj.pageX - startX) <= 100);
					var swipeRightBoolean = (elapsedTime <= allowedTime && distanceX >= threshold && Math.abs(touchObj.pageY - startY) <= 100);
					var swipeBottomBoolean = (elapsedTime <= allowedTime && distanceY >= threshold && Math.abs(touchObj.pageX - startX) <= 100);
					var swipeLeftBoolean = (elapsedTime <= allowedTime && distanceX <= threshold && Math.abs(touchObj.pageY - startY) <= 100);

					handleSwipe(swipeTopBoolean, swipeRightBoolean, swipeBottomBoolean, swipeLeftBoolean);

					event.preventDefault();

				}, false);

			});

		};


		nSwipe('.main-content', function(top, right, bottom, left) {
			if(top) {
				console.log('subiu');
			} else if(right) {
				console.log('direita');
			} else if(bottom) {
				console.log('baixo');
			} else if (left) {
				console.log('esquerda');
			}
		});

	}, false);

})();