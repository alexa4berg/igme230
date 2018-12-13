$(".menu").click(function(){ //on click of my menu option
    $(this).next(".submenu").slideToggle(); //reveal the sub menu items
});

'use strict';

// Sets the default loaded story
let selection = ("story0.txt")

$("#story").val(selection);
$("#story").load(selection);


