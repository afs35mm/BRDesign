var BRD = BRD || {};

BRD.Carousel = (function(){

		var config = {
			hero: {
				width: 1280,
	            height: 608,
	            pagination: {
	            	active: false,
	            },
	            play : {
                    auto: true,
                    interval: 3000,
	            },
	            navigation: 'largeBRD',
	            
			},
		};

		var findCarousels = function(){
			$('.BRD-ui-module').each(function(index){
				var carouselType = $(this).data('carousel');
				$(this).slidesjs( config[carouselType] );
			});
		};

        var init = function(){
        	findCarousels();
        };

        return {
                init: init
        };
        
})();



