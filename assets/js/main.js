var BRD = BRD || {};

BRD.App = (function(){

        var config = {

        };

        var init = function(){
            BRD.Carousel.init();
        };

        return {
                init: init
        };

})();

$('document').ready(function(){
    BRD.App.init();
});