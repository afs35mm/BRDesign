var BRD = BRD || {};

BRD.mosaic = (function(){
		var config = {
			
		};
		var init = function () {
			$(window).load(function(){
				$('.mosaic img').each(function(key, value){
					$this = $(value);
					if( $this.width() < 571 ){
						$this.css('width', '49%');
						if( (key % 2 == 1 && key != 1)|| key == 0){
							$this.css('margin-right', '2%');
						}
					}else{
						$this.css('width', '100%');
					}
					$this.fadeIn();
				});	
			});
		}
        return {
                init: init
        };
        
})();
