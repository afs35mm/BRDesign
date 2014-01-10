
	/**
	* @name OLYMPUS-_initOlympusUiModules
	* @exports OLYMPUS-_initOlympusUiModules as OLYMPUS.initUiModules
	* @function
	* @description Find OLYMPUS UI modules used on the site, and initialize those that exist.
	* @param {object} [$scope] An option scope element to check for olympusui modules within.
	*/
	// _initOlympusUiModules = function($scope) {
	// 	$scope = $scope || OLYMPUS.$content;
	// 	var $olympusui = $scope.find('.olympusui-module'), limit = $olympusui.length, $module, module, i;
	// 	for (i=0; i<limit; i++) {
	// 		$module = $olympusui.eq(i);
	// 		if ($.contains(document.documentElement, $module[0])) {
	// 			module = $module.attr('data-olympusui-module');
	// 		if (module && OLYMPUS[module] && OLYMPUS[module].initialize) {
	// 			OLYMPUS[module].initialize($module, self.LAYOUT);
	// 			}
	// 		}
	// 	}
	// },


var BRD = BRD || {};

BRD.App = (function(){

        var config = {

        };

        var init = function(){
                alert('inite!');
        };

        return {
                init: init
        };
        
        

})();

$('document').ready(function(){
        BRD.App.init();
});