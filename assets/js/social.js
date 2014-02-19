var BRD = BRD || {};

BRD.social = (function(){

		var config = {
			
		};

		// var replacePostsLinks = function(){
		// 		$('.fb-like').each(function(){
		//         	var closestURL = $(this).prev('h3').children('.title').attr('href');
		//             $(this).attr('data-href', closestURL);
		//         });
		// };

		// var replaceSinglePost = function(){
		// 		var $fb = $('.fb-like');
		// 		var closestURL = $fb.prev('h3').children('.title').attr('href');
		// 		$fb.attr('data-href', closestURL);
		// };

		var init = function ($el, moduleInstance) {
			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
			// if( moduleInstance != undefined){
			// 	if(  moduleInstance == 'posts'){
			// 		replacePostsLinks();	
			// 	}else if (moduleInstance == 'singlepost') {
			// 		replaceSinglePost();
			// 	}
			// }
			//console.log(document.URL, 'hello!');
			//$('.fb-like').attr('data-href',document.URL );
			$('.socialParent').hover(function(){
				console.log('hover on');
				$(this).find('.socialList').fadeIn('fast');
			},
			function(){
				$(this).find('.socialList').fadeOut('fast');
			});
		}

        return {
                init: init
        };
        
})();



 