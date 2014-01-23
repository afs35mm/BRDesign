var BRD = BRD || {};

BRD.App = (function(){

        var config = {
        	$window: $(window),
        	$nav: $('nav'),
        	navTop: 0,
            $outerWrap: $('#outerWrap'),
        };

        var makeStickyHeader = function(){
            if( !config.$nav.hasClass('fixed') ){
            config.navTop = $('nav').offset().top;    
            }
            //console.log(config.navTop);
            if( config.$window.scrollTop() >= config.navTop ){
                config.$nav.addClass('fixed');
            }else{
                config.$nav.removeClass('fixed');
            }
        };

        var showMobileMenu = function(){
            config.$outerWrap.toggleClass('mobileOpen');
            //alert('hi');
        };

        var bindDomEvents = function(){
        	config.$window.scroll(function(){
                makeStickyHeader();
		    });
            $( window ).resize(function() {
                $('.carousel').each(function(){
                    $(this).rwdCarousel('resize');
                });
            });
            $('.navMenuBtn').on('click', showMobileMenu);
        };

        var findUiModules = function(){
			$('.BRD-ui-module').each(function(index){
				var $el, moduleType, moduleInstance;
				$el = $(this);
				moduleType = $el.data('module');
				moduleInstance = $el.data(moduleType);
                //console.log(moduleInstance, moduleType);
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