$(document).ready(function() {
	$(".menu-trigger").click(function() {
		$(".nav-right").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
	});
});