$(document).ready(function() {
    // Function to check conditions and update grid layout
    function updateGridLayout() {
        // Check for screen width greater than 700px and hover capability
        if (window.matchMedia("(min-width: 700px)").matches && window.matchMedia("(hover: hover)").matches) {
            $('nav').hover(
                function() {
                    $('body').css('grid-template-columns', '15% 75% 10%');
                },
                function() {
                    $('body').css('grid-template-columns', '5% 85% 10%');
                }
            );
        }
    }

    updateGridLayout();

    // Call the updateGridLayout function on viewport resize
    $(window).resize(function() {
        updateGridLayout();
    });
});
