var BRD = BRD || {};

BRD.social = (function(){

		var config = {
			
		};

		var replacePostsLinks = function(){
				$('.fb-like').each(function(){
		        	var closestURL = $(this).prev('h3').children('.title').attr('href');
		            $(this).attr('data-href', closestURL);
		        });
		};

		var replaceSinglePost = function(){
				var $fb = $('.fb-like');
				var closestURL = $fb.prev('h3').children('.title').attr('href');
				$fb.attr('data-href', closestURL);
		};

		var init = function ($el, moduleInstance) {
			if( moduleInstance != undefined){
				if(  moduleInstance == 'posts'){
					replacePostsLinks();	
				}else if (moduleInstance == 'singlepost') {
					replaceSinglePost();
				}
			}
		}

        return {
                init: init
        };
        
})();



 