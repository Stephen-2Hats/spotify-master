/**
 * Custom dropdown
 * 
 */
var list = $('.drpdwn-list');
var link = $('.drpdwn-link');
link.click(function (e) {
    e.preventDefault();
    list.slideToggle(200);
});

/**
 * Custom dropdown
 * 
 */
$(".openfrnds").click(function () {
    $(".right-nav").toggleClass("aa");
});


