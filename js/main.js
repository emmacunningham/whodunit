$(document).ready(function() {
	
	var s = skrollr.init();

	var squid = new Squid('0', '50%', '0', '80%');

});

var Squid = function(startTop, endTop, startLeft, endLeft) {
	var imgEl = $('<img class="parallax-friends" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" />');
//        <img class="parallax-friends" style="left: 30px;" src="http://www.mariowiki.com/images/thumb/9/9a/BlooperSPM.png/107px-BlooperSPM.png" data-start="top: 0px;" data-end="top: 50%" />	



	$('body').prepend(imgEl);

	return imgEl;

};

