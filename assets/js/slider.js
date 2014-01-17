var BRD = BRD || {};

BRD.slider = (function(){

		var config = {
			hero: {
				iAutoRotate: 2000
			},
		};

        var init = function($el, moduleInstance){
        	if( moduleInstance != undefined && config[moduleInstance] != undefined){
        		$el.rwdCarousel( config[moduleInstance] );
        	}else{
        		$el.rwdCarousel();
        	}
        };

        return {
                init: init
        };
        
})();



// $(document).ready(function(){
	
// 	var sayHay = function(){
// 		var $backgroundCarousel = $('.background');
// 		console.log($backgroundCarousel);
// 		$backgroundCarousel.rwdCarousel('startAutoRotate', 500);
// 	};

// 	$('.carousel').rwdCarousel({fnPaginateBegin: sayHay});
// 	//$('.holder').rwdCarousel();
// });