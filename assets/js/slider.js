var BRD = BRD || {};

BRD.slider = (function(){

		var slideBgCarousel = function(newPageIndex){
			config.$backgroundCarousel.rwdCarousel('updateToIndex', newPageIndex);
		};

		var config = {
			$backgroundCarousel: $('#backgroundSlider'),
			$desktopSlider: $('#desktopSlider'),
			$mobileSlider: $('#mobileSlider'),
			hero: {
				iAutoRotate: 2000,
				bUseThumbnails: false,
				fAspectRatio: 2.105263,
				iAutoRotate: 3000
			},
			homeBackground: {
				fAspectRatio: 2.24168,
				BtnPaginate:'none',
				bUseThumbnails: false
			},
			homeForeground: {
				fAspectRatio: 3,
				BtnPaginate:'none',
				paginateItems:'circles',
				//fAspectRatio: 1.8,
			},
			projectDesktopSlider: {
				bUseThumbnails: false,
				fAspectRatio: 1,
				iPerPage: 2,
			},
			projectMobileSlider: {
				bUseThumbnails: false,
				fAspectRatio: .488872,
				iPerPage: 1,
			},
			workplaceFilmStrip: {
				bUseThumbnails: false,
				iPerPage: 4,
				iNumToPaginate: 1
			},
			carousels: {},
		};

        var init = function($el, moduleInstance){
        	
        	if( moduleInstance != undefined && config[moduleInstance] != undefined){
        		$el.rwdCarousel( config[moduleInstance] );
        	}else{
        		$el.rwdCarousel();
        	}
        	
        	if(moduleInstance == 'homeForeground'){
        		$('.circlePaginate').on('click',function(e){
	        		//console.log($(this).data('index'));
	        		slideBgCarousel($(this).data('index'));
	        	});	
        	}
        };

        return {
                init: init
        };
        
})();


