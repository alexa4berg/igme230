//$(".menu").click(function () { // when menu is clicked
//    $(this).next(".items").slideToggle(); //the selected menus next items slide toggle
//});

// change back to .menu for top
var targetedID;
var paragraphs = $("p")
paragraphs.click(function(){
    targetedID = this.id;
    $(targetedID).css("background-color", "green");

})

// sets the initial article txt

let selection = ("article0.txt")

$("article").val(selection);
$("article").load(selection);

// when a radio button is selected load that values txt
$('input[type=radio][name=article]').change(function () {
            selection = $(this).val();
            $("article").load(selection);

});


// clicks
let clicks = 0;
            $("#clickme").click(function () {
                clicks++;
                $("#count").html(clicks);
            })
