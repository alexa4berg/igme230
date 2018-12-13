/* Don't use <script> tags in a linked js file! */
$(".menuitem").click(function(){ //on click of my menu option
    $(".submenu").slideToggle(500); //show or hide the submenu
});

//loading in the content, individual pages

'use strict';
let verse = ("content1.txt")  // sets default verse element

$("#choose-content").val(verse); // changes menu option to default
$("#content").load(verse);   // retrieves only default element

$("#choose-content").change(function() { //on change, when a new menu item is selected do this
verse = $(this).val(); //the verse which is my variable for the content information is set to the new value of the selected menu item.
$("#content").load(verse); //upload the new verse and replace the old one
});
