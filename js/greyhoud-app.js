var $items = $('.carousel-items img');

var switchSlide = function (outgoing, incoming) {
        $items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
                $items.eq(outgoing).attr('data-state', '').hide();
                $items.eq(incoming).attr('data-state', 'current');
        });
};

$items.filter(':not([data-state="current"])').hide();

	setInterval(function(){
        var current = $items.filter('[data-state="current"]').index();
        var next = current + 1;

        if (next >= $items.length) {
                next = 0;
        }

        switchSlide(current, next);
},4300);

var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/68787849?color=c9ff23&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$videoDialog.get(0).showModal();
});

$('.btn-close').on('click', function () {
	/*
	.shows() allow user to interact with the stuff behind the dialog
	.showModal() disables user interaction behind the dialog
	*/
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});