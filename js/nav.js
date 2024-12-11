$(document).ready(function() {
    $('nav').hover(
        function() {
            $('body').css('grid-template-columns', '15% 75% 10%');
        },
        function() {
            $('body').css('grid-template-columns', '5% 85% 10%');
        }
    );
});