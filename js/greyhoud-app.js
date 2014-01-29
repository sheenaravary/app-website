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
	$videoDialog.children('.video-open').html('<iframe src="http://player.vimeo.com/video/81434464" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$videoDialog.get(0).showModal();
	$videoDialog.css('width', '60%');
});

$('.btn-close').on('click', function () {
	$videoDialog.get(0).close('');
	$videoDialog.children('.video-open').html('');
});
