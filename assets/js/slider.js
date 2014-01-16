var BRD = BRD || {};

BRD.slider = (function(){

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

        var init = function($el, moduleInstance){
        	if( moduleInstance != undefined && config[moduleInstance] != undefined){
        		$el.slidesjs( config[moduleInstance] );
        	}else{
        		$el.slidejs();
        	}
        };

        return {
                init: init
        };
        
})();



