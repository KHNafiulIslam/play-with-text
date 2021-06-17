$(document).ready(function(){
    $('#btn1').click(function(){
       $('h1').hide();
    });
    $('#btn2').click(function(){
        $('h1').show();
     });
     
    $('#btn3').click(function(){
        $('h1').fadeOut();
     });
     
    $('#btn4').click(function(){
        $('h1').fadeIn();
     });
     $('#moveleft').click(function() {
		$('h1').animate({
		'marginLeft' : "-=30px" //moves left
		});
	});
	$('#moveright').click(function() {
		$('h1').animate({
		'marginLeft' : "+=30px" //moves right
		});
	});
	$('#movedown').click(function() {
		$('h1').animate({
		'marginTop' : "+=30px" //moves down
		});
	});
	$('#moveup').click(function() {
		$('h1').animate({
		'marginTop' : "-=30px" //moves up
		});
	});
     
});