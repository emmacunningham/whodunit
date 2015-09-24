var randomIntFromInterval = function (min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min);
};


$(document).ready(function() {

	// These should go down
	var i = 15;
	do {
		var squidLeftStart = randomIntFromInterval(-20, 100);
		var squidTopStart = randomIntFromInterval(0, 100);

		var squidLeftEnd = randomIntFromInterval(0, 100);;
		var squidTopEnd = 100;		

		var squid = new Squid(squidTopStart + '%', squidTopEnd + '%', squidLeftStart + '%', squidLeftEnd + '%');
		i--;
	}
	while (i > 0);

	// These should come up
	var i = 15;
	do {

		var squidLeftStart = randomIntFromInterval(0, 100);
		var squidTopStart = 100;

		var squidLeftEnd = randomIntFromInterval(0, 100);
		var squidTopEnd = randomIntFromInterval(0, 100) * -1;		

		var squid = new Squid(squidTopStart + '%', squidTopEnd + '%', squidLeftStart + '%', squidLeftEnd + '%');
		i--;
	}
	while (i > 0);	

	var s = skrollr.init();



});

var Squid = function(startTop, endTop, startLeft, endLeft) {
	var imgEl = $('<img class="parallax-friends" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" />');

	imgEl.attr('data-start', 'top: ' + startTop + '; left: ' + startLeft + ';');
	imgEl.attr('data-end', 'top: ' + endTop + ';' + '; left: ' + endLeft + ';');

	$('body').prepend(imgEl);

	return imgEl;

};

