$(".menu").click(function () { //on click of my menu option
    $(this).next(".submenu").slideToggle(); //reveal the sub menu items
});

'use strict';

// Sets the default loaded story
let selection = ("story0.txt")

$("#story").val(selection);
$("#story").load(selection);

// changing the color
$("#colors").change(function () { //on change, when a new menu item is selected do this
    color = $(this).attr('id'); //the verse which is my variable for the content information is set to the new value of the selected menu item.
    $("#source").css("background-color", "color"); //upload the new verse and replace the old one
});

// extra credit clicks
let clicks = 0;
$("#increment").click(function () {
    clicks++;
    $("#currentcount").html(clicks);
})
