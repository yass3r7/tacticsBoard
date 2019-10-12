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
        let i_layer = clickedItem.data("layer"),
            i_color = clickedItem.data("color"),
            i_width = clickedItem.data("width"),
            i_height = clickedItem.data("height"),
            i_rotate = clickedItem.data("rotate");

        if (clickedItem.data("type") == "vec") {
            $(".item-options").hide();
            $(".item-settings").show("slow");
            $(".vec-item-settings").removeClass("hidden");

            n_1_layer.value = i_layer;
            n_1_width.value = i_width;
            n_1_height.value = i_height;
            n_1_rotate.value = i_rotate;
            n_1_color.value = i_color;

        } else if (clickedItem.data("type") == "img") {
            $(".item-options").hide();
            $(".item-settings").show("slow");
            $(".img-item-settings").removeClass("hidden");

            n_2_layer.value = i_layer;
            n_2_width.value = i_width;
            n_2_height.value = i_height;
            n_2_rotate.value = i_rotate;
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

    clickedItem = null;
}

// remove item
function removeItem() {
    $(".item-options").hide();
    clickedItem.remove();
}

// move item
let move = false;
function moveItem() {
    $(".item-options").hide();
    move = true;
}

$(".board").dblclick(function (e) {
    if (move) {
        
        let x = e.offsetX,
            y = e.offsetY;

        let w = $(".board")[0].clientWidth, // 100% 
            h = $(".board")[0].clientHeight;// 100%

            console.log(x, y);
            console.log(w, h);

        clickedItem.animate({
            left: ((x * 100) / w) - ((clickedItem[0].offsetWidth / 2 * 100) / w) + "%",
            top: ((y * 100) / h) - ((clickedItem[0].offsetHeight / 2 * 100) / w) + "%"
        }, 500);

        move = false;
    }
});