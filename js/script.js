let clickedItem;

$(function () {
    // controls hide/show on double click on the board
    $("#board").dblclick(function (e) {
        if (e.target == board) {
            $(".item-options").hide();
            $(".controls").fadeToggle();
        }
    });

    // options menu
    $(".menu").click(function () {
        $(".options").slideToggle();
        $(".add-item-menu").hide();
        $(".item-options").slideUp("fast");
    })

    // option addItem()
    $("#addItem").click(function () {
        $(".options").fadeOut("fast");
        $(".add-item-menu").slideDown();
    });

    // add a specific item
    $(".add-item-menu ul li").click(function () {
        // console.log($(this).data('item'));
        $(".add-settings").show("slow");
    });

    // component settings
    $(".component").dblclick(function () {
        clickedItem = $(this);

        $(".controls").fadeIn();
        $(".item-options").slideUp("fast");
        $(".item-options").slideDown();
    });

    $("#itemProp").click(function () {
        if (clickedItem.data("type") == "vec") {
            $(".item-options").hide();
            $(".item-settings").show("slow");
            $(".vec-item-settings").removeClass("hidden");
        } else if (clickedItem.data("type") == "img") {
            $(".item-options").hide();
            $(".item-settings").show("slow");
            $(".img-item-settings").removeClass("hidden");
        }
    });
});

// confirm adding item
function confirmAdding() {
    let num = howMany.value;

    if (num < 1 || num > 100) {
        alert("PLease, choose a number between 1 and 100");
        return false;
    }

    $(".add-settings").hide("slow");
    $(".add-item-menu").slideUp();
}

// cancel adding item
function cancelAdding() {
    $(".add-settings").hide("slow");
}

// confirm changes
function confirmChanges() {
    $(".item-settings").hide("slow");
    $(".vec-item-settings").addClass("hidden");
    $(".img-item-settings").addClass("hidden");
}

// cancel changes
function cancelChanges() {
    $(".item-settings").hide("slow");
    $(".vec-item-settings").addClass("hidden");
    $(".img-item-settings").addClass("hidden");
}

// remove item
function removeItem() {
    $(".item-options").hide();
    clickedItem.remove();
}

