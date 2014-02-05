var $trips = $('.trips img');

$('.trips-section').waypoint(function () {
	$trips.addClass('js-trips-animate');
}, { offset: '40%' });