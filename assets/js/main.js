var BRD = BRD || {};

BRD.App = (function(){

        var config = {
        	$window: $(window),
        	$nav: $('nav'),
        	navTop: $('nav').offset().top,
        };

        var bindDomEvents = function(){
        	config.$window.scroll(function(){
				if( config.$window.scrollTop() >= config.navTop ){
					config.$nav.addClass('fixed');
				}else{
					config.$nav.removeClass('fixed');
				}
		    });
            $( window ).resize(function() {
                $('.carousel').rwdCarousel('resize');
            });
        };

        var findUiModules = function(){
			$('.BRD-ui-module').each(function(index){
				var $el, moduleType, moduleInstance;
				$el = $(this);
				moduleType = $el.data('module');
				moduleInstance = $el.data(moduleType);
                BRD[moduleType].init($el, moduleInstance);
			});
		};

        var init = function(){
            bindDomEvents();
            findUiModules();
        };

        return {
            init: init
        };

})();

$('document').ready(function(){
    BRD.App.init();
});