$(function(){

	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 60) {
			
			
			$(".header").addClass("navbar-fixed-top");
			
			
		} else {
			
			$(".header").removeClass("navbar-fixed-top");
		}
		
	});
	
	$(".header .openMenu").click(function () {
		
		$(this).toggleClass("active");
		
		$(".header .menu").slideToggle();
		
	});

	
	
	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>'
		
	});
	
	$.scrollIt({topOffset:-91});
	
	
});
