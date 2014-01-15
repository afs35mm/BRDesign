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