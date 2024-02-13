$(document).ready(function() {
    $('.toggle-sidebar').on('click', function() {
        $('.sidebar').toggleClass('active');
    });

    // Scroll to corresponding section when a menu item is clicked
    $('.scrollby-menu ol li').on('click', function() {
        var menuItemText = $(this).text().toLowerCase();
        console.log('text',menuItemText)
        var targetSection = $('#' + menuItemText.replace(/\s+/g, '-'));
        var targetTop = targetSection.offset().top;
        $('html, body').animate({
            scrollTop: targetTop
        }, 1000);
    });
    
});
