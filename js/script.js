$(function () {
    // controls hide/show on double click on the board
    $("#board").dblclick(function () {
        $(".controls").fadeToggle();
    });

    // options menu
    $(".menu").click(function () {
        $(".options").slideToggle();
        $(".add-item-menu").hide();
    })

    // option addItem()
    $("#addItem").click(function () {
        $(".options").fadeOut("fast");
        $(".add-item-menu").slideDown();
    });

    // add a specific item
    $(".add-item-menu ul li").click(function () {
        console.log($(this).data('item'));

        $(".add-settings").show("slow");
    });
    
});

// cancel adding item
function cancelAdding() {
    $(".add-settings").hide("slow");
}

// confirm adding item
function confirmAdding() {
    let num = howMany.value;

    $(".add-settings").hide("slow");
    $(".add-item-menu").slideUp();
    console.log(num);
}