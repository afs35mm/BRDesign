var BRD = BRD || {};

BRD.clients = (function(){
		var config = {
			
		};
		var init = function () {
			$('.clientsList .imgWrap').each(function(){
				$(this).hover(function(){
					$(this).children('.color').animate({opacity: 1}, 250);
				}, 
				function(){
					$(this).children('.color').animate({opacity: 0}, 250);
				});
			});
		}
        return {
                init: init
        };
        
})();
