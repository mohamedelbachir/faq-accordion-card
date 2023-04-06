$(document).ready(function () {
    $(".title-summary").click(function () {
        $(this).parent().children(".details").children("p").slideToggle("show");
        $(this).children(".arrow").toggleClass("active");
        $(this).children("h3").toggleClass("active")
    })
})