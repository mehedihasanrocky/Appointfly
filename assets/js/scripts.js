
$(document).ready(function(){

	// Mobile Menu
	$('.menu-icon').click(function(){
		$('.menu-items').slideToggle();
	});

    $('.apps-carousel').owlCarousel({
        nav:true,
        navText:['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        dots:false,
        responsive : {
            0 : {
                items:1,
            },
            480 : {
                items:3,
            },
            768 : {
               items:4,
            }
        }
    });

  

});