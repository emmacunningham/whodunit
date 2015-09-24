$(document).ready(function() {
	

	var squid = new Squid('0%', '80%', '0%', '80%');
	var i = 15;
	do {


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

