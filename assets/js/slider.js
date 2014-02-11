var BRD = BRD || {};

BRD.slider = (function(){

		var slideBgCarousel = function(){
			var newPageIndex = $(event.target).data('index');
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
				BtnPaginate:'none',
				bUseThumbnails: false
			},
			homeForeground: {
				fAspectRatio: 3,
				BtnPaginate:'none',
				fnPaginateBegin: slideBgCarousel,
				paginateItems:'circles',
			},
			projectHome: {
				bUseThumbnails: false,
			}
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


