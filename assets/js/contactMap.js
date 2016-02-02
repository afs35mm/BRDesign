var BRD = BRD || {};

BRD.contactMap = (function(){

		var config = {

		};


        // var init = function($el, moduleInstance){

        // };

		var init = function () {
		var myLatlng = new google.maps.LatLng(40.759916, -73.991149);
		var mapOptions = {
			zoom: 4,
			center: myLatlng
		};

		var map_canvas = document.getElementById('map_canvas');
		var map_options = {
			center: new google.maps.LatLng(40.759916, -73.991149),
			zoom: 16,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
		}
		var map = new google.maps.Map(map_canvas, map_options)

		google.maps.event.addDomListener(window, 'load', init);
		var contentString = '<div style="width:160; height: 85px;"><img style="padding-bottom:5px; top:0px; left:0;" src="/assets/img/map_logo.jpg"><div style="">630 Ninth Avenue, Suite 502<br>New York, NY 10036</div></div>';
		//<span style="font-size: 18px; padding-bottom:45px; padding-right: 120px; padding-top:80px; font-weight:800;">BRDesign</span>
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
