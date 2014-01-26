var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video-open').html('<iframe src="http://player.vimeo.com/video/81434464" width="800" height="450" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$videoDialog.get(0).showModal();
});

$('.btn-close').on('click', function () {
	/*
	.shows() allow user to interact with the stuff behind the dialog
	.showModal() disables user interaction behind the dialog
	*/
	$videoDialog.get(0).close('');
	$videoDialog.children('.video').html('');
});