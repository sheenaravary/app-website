var $trips = $('.trips img');

$('.trips-section').waypoint(function () {
	$trips.eq(0).addClass('js-ship-delay-1');
	$trips.eq(3).addClass('js-ship-delay-2');
	$trips.eq(2).addClass('js-ship-delay-3');
	$trips.addClass('js-trips-animate');
}, { offset: '60%' });