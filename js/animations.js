var $trips = $('.trips img');

$('.trips-section').waypoints(function () {
	$trips.addClass('js-trips-animate');
}, { offset: '40%' });