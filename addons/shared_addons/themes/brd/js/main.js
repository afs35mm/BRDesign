$(document).ready(function(){
	$(function() {
    	$('#slider').slidesjs({
 			width: 1280,
    		height: 608,
	    	pagination: {
	    		 active: false,
	    	},
	    	play : {
	    		auto: true,
	    		interval: 3000,
	    	}
    	});
    });
});