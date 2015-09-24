$(document).ready(function() {
	

	var squid = new Squid('0px', '50%', '0', '80%');


	setTimeout(function() {

		var s = skrollr.init();

	}, 500);

});

var Squid = function(startTop, endTop, startLeft, endLeft) {
	var imgEl = $('<img class="parallax-friends" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" />');
//        <img class="parallax-friends" style="left: 30px;" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" data-start="top: 0px;" data-end="top: 50%" />	


	imgEl.attr('data-start', 'top: ' + startTop + ';');
	imgEl.attr('data-end', 'top: ' + endTop + ';');

	$('body').prepend(imgEl);

	return imgEl;

};

