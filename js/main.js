$(document).ready(function() {

	var i = 15;
	do {

		var squidLeftStart = i * 10;
		var squidTopStart = i * 10;

		var squidLeftEnd = 100 / i;
		var squidTopEnd = 100 / i;		

		var squid = new Squid(squidLeftStart + '%', squidLeftEnd + '%', squidTopStart + '%', squidTopEnd + '%');
		i--;
	}
	while (i > 0);

	var i = 15;
	do {

		var squidLeftStart = 1200/i;
		var squidTopStart = 0;

		var squidLeftEnd = 150 / i;
		var squidTopEnd = 120 / i;		

		var squid = new Squid(squidTopStart + '%', squidTopEnd + '%', squidLeftStart + '%', squidLeftEnd + '%');
		i--;
	}
	while (i > 0);	

	var s = skrollr.init();



});

var Squid = function(startTop, endTop, startLeft, endLeft) {
	var imgEl = $('<img class="parallax-friends" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" />');
//        <img class="parallax-friends" style="left: 30px;" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" data-start="top: 0px;" data-end="top: 50%" />	


	imgEl.attr('data-start', 'top: ' + startTop + '; left: ' + startLeft + ';');
	imgEl.attr('data-end', 'top: ' + endTop + ';' + '; left: ' + endLeft + ';');

	$('body').prepend(imgEl);

	return imgEl;

};

