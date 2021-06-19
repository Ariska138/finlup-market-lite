
// document.getElementsByTagName("BODY")[0].style.display = "block";
// $("#demo-content").show();

$(function () {

    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 1000);

});