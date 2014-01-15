var BRD = BRD || {};

BRD.App = (function(){

        var config = {
        	$window: $(window),
        	$nav: $('nav'),
        	navTop: $('nav').offset().top,
        };

        var bindDomEvents = function(){
        	config.$window.scroll(function(){
		    	//console.log(config.$window.scrollTop());
				if( config.$window.scrollTop() >= config.navTop ){
					config.$nav.addClass('fixed');
				}else{
					config.$nav.removeClass('fixed');
				}
		    });
        };

        var init = function(){
            BRD.Carousel.init();
            bindDomEvents();
            console.log(config.navTop);
        };

        return {
            init: init
        };

})();

$('document').ready(function(){
    BRD.App.init();
});