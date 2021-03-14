
$("input").keypress(function (event) {
    if (event.which === 13 & $(this).val() != "") {
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + $(this).val() + "</li>");
        $(this).val("");
    }
});

$("ul").on('click', "span", function (event) {
    $(this).parent().fadeOut(function () {
        $(this).remove()
    })
    event.stopPropagation();
});


$("ul").on('click', "li", function () {
    $(this).toggleClass("completed");
})

$(".fa-plus").on('click', function () {
    $("input").fadeToggle();
})