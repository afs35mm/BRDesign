var BRD = BRD || {};

BRD.slider = (function(){

		var slideBgCarousel = function(){
			console.log( $(event.target).data('index') );
			var newPageIndex = $(event.target).data('index');
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
				fnPaginateBegin: slideBgCarousel,
				paginateItems:'circles',
			},
			projectDesktopSlider: {
				bUseThumbnails: false,
				fAspectRatio: 1,
				iPerPage: 2,
				// fnPaginateBegin: function(){
				// 	config.$mobileSlider.rwdCarousel('updateToIndex', 1);
				// 	console.log(config.$desktopSlider);
				// },
			},
			projectMobileSlider: {
				bUseThumbnails: false,
				fAspectRatio: .488872,
				iPerPage: 1,
				// fnPaginateBegin: function(){
				// 	config.$desktopSlider.rwdCarousel('updateToIndex', 1);
				// 	console.log('helllo2');
				// },
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
        };

        return {
                init: init
        };
        
})();


