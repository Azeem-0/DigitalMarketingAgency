$(document).ready(function () {

    // Toggling the visibility of contact us form

    $(".toggle-form").click(function () {
        $("#contact-us-form").toggleClass("show-contact-form");
    });


});

// Sliding the images in what we do section

function moveImage(value) {

    for (let i = 1; i < 4; i++) {
        $(`.sec${i}`).removeClass("active-sec");
        $(`.sec${i}-dot`).removeClass("active");
    }
    $(`.sec${value}`).toggleClass("active-sec");
    $(`.sec${value}-dot`).toggleClass("active");
}

//Changing image based on option

function changeImage(value) {
    const element = $(".project-image");
    console.log(element[0]);
    element[0].src = `./assets/${value}.png`;
}