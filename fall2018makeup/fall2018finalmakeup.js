$(".menu").click(function(){ //on click of my menu option
    $(this).next(".submenu").slideToggle(); //reveal the sub menu items
});

'use strict';

// Sets the default loaded story
let selection = ("story0.txt")

$("#story").val(selection);
$("#story").load(selection);


// extra credit clicks
let clicks = 0;
            $("#increment").click(function () {
                clicks++;
                $("#currentcount").html(clicks);
            })

