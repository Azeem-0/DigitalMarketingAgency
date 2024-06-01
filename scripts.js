$(document).ready(function () {
    $(".toggle-form").click(function () {
        console.log('hel');
        $("#contact-us-form").toggleClass("show-contact-form");
    });
});