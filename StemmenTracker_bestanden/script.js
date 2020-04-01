$ = {};//hack
jQuery(document).ready(function($$) {
	$ = $$;
	
	$(window).resize(function(){
    boxify('.boxify');
	}).resize();

	$(".hamburger-icon, .hamburger-close").click(function(){
	  $(".block-xs-header-nav .hamburger-wrapper").toggle();
    boxify('.hamburger-container');
	});
});

