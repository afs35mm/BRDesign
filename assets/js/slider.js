var BRD = BRD || {};

BRD.slider = (function(){

		var sayHay = function(){
			var newPageIndex = this.iCurrPageIndex;
			config.$backgroundCarousel.rwdCarousel('updateToIndex', newPageIndex);
		};

		var config = {
			$backgroundCarousel: $('#backgroundSlider'),
			hero: {
				iAutoRotate: 2000,
				bUseThumbnails: false,
				fAspectRatio: 2.105263
			},
			homeBackground: {
				fAspectRatio: 2.24168,
				BtnPaginate:'none'
			},
			homeForeground: {
				fAspectRatio: 3,
				BtnPaginate:'none',
				fnPaginateBegin: sayHay
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