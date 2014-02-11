var $random = $('.random');
var num = Math.round(Math.random() * 2);
var file = 'test-' + num + '.html';
$random.load(file);


var $dinoData = $.ajax('testimonials.json', {
		dataType: 'json' //force jquery to reconize JSON and parse the data
});

$testimonialsData.done(function (data) {
//triggered when the dino data has finished downloading
// and i ready to be used

// calculate the random number based on how many items 
// are in the JSON file
var rand = Math.round(Math.random() * (data.length - 1) );	
console.log( data[rand] ); 
	
	$('.test-1').html( data[rand].test );
	$('.test-2').html( data[rand].test );
	$('.test-3').html( data[rand].test );
});	

