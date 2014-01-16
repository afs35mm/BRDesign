var BRD = BRD || {};

BRD.contactMap = (function(){

		var config = {
			
		};


        // var init = function($el, moduleInstance){
        	
        // };

		var init = function () {
		var myLatlng = new google.maps.LatLng(40.725822, -74.004834);
		var mapOptions = {
			zoom: 4,
			center: myLatlng
		};

		var map_canvas = document.getElementById('map_canvas');
		var map_options = {
			center: new google.maps.LatLng(40.72662, -74.004834),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(map_canvas, map_options)

		google.maps.event.addDomListener(window, 'load', init);
		var contentString = '<span style="font-size: 18px; padding-bottom:15px; font-weight:800;">BRDesign</span><br><br>233 Spring St<br>New York, NY 10013';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title: 'Uluru (Ayers Rock)'
		});
		
		
		infowindow.open(map,marker);
		

		}

        return {
                init: init
        };
        
})();



 