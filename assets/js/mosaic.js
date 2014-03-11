var BRD = BRD || {};

BRD.mosaic = (function(){
		var config = {
			
		};
		var init = function () {
			$(window).load(function(){
				
				var imageAddMarginRight = true;
				
				$('.mosaic img').each(function(key, value){
					$this = $(value);
					if( $this.width() < 571 ){
						$this.css('width', '49%');

						if( imageAddMarginRight ){
							$this.css('margin-right', '2%');
							imageAddMarginRight = false;
						}else{
							imageAddMarginRight = true;
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
