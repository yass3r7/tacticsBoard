$(function () {
    // controls hide/show on double click on the board
    $("#board").dblclick(function () {
        $(".controls").fadeToggle();
    });

    // options menu
    $(".menu").click(function () {
        $(".options").slideToggle();
    })

    // option addItem()
    // function addItem() {

    // }
});