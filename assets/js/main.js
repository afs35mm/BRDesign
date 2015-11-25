var BRD = BRD || {};

BRD.App = (function(){

        var config = {
        	$window: $(window),
        	$nav: $('nav'),
        	navTop: 0,
            $outerWrap: $('#outerWrap'),
            layout: null,
            smBreakpoint: 721
        };

        var makeStickyHeader = function(){
            if( !config.$nav.hasClass('fixed') ){
            config.navTop = $('nav').offset().top;    
            }
            if( config.$window.scrollTop() >= config.navTop ){
                config.$nav.addClass('fixed');
            }else{
                config.$nav.removeClass('fixed');
            }
        };

        var getLayout = function(){
            if($(window).width() >= config.smBreakpoint ){
                config.layout = 'large'
            }else{
                config.layout = 'small'
            }
        }

        var showMobileMenu = function(){
            config.$outerWrap.toggleClass('mobileOpen');
        };

        var bindDomEvents = function(){
        	config.$window.scroll(function(){
                makeStickyHeader();
		    });
            $( window ).resize(function() {
                
                getLayout();
                
                $('.carousel').each(function(){
                    $(this).rwdCarousel('resize');
                });
                if( $(window).width() >= config.smBreakpoint && $('#outerWrap').hasClass('mobileOpen') ){
                    $('#outerWrap').removeClass('mobileOpen');
                }
            });
            $('.navMenuBtn').on('click', showMobileMenu);
        };
        
        // var duplicateCarouselForMobile = function(){
        //     var projectHomeContents = $('.projectHome').html();
        //     $('.projectHomeMobile').html(projectHomeContents);
        // };

        var findUiModules = function(){
			$('.BRD-ui-module').each(function(index){
				var $el, moduleType, moduleInstance;
				$el = $(this);
				moduleType = $el.data('module');
				moduleInstance = $el.data(moduleType);
                // if(moduleInstance == 'projectHome'){
                //     duplicateCarouselForMobile();
                // }
                BRD[moduleType].init($el, moduleInstance);
			});
		};

        var init = function(){
            bindDomEvents();
            findUiModules();
            getLayout();
        };

        return {
            init: init
        };

})();

$('document').ready(function(){
    BRD.App.init();
});