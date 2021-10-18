function changeToBenefits() {
    $("#benefits").css("color", "var(--mainColor)");
    $("#benefits").css("border-bottom", "1px solid var(--mainColor)");
    $("#sections").css("color", "black");
    $("#sections").css("border-bottom", "1px solid lightgray");

    $(".sections").css("display", "none");
    $(".benefits").css("display", "flex");
}

function changeToSections() {
    $("#sections").css("color", "var(--mainColor)");
    $("#sections").css("border-bottom", "1px solid var(--mainColor)");
    $("#benefits").css("color", "black");
    $("#benefits").css("border-bottom", "1px solid lightgray");

    $(".benefits").css("display", "none");
    $(".sections").css("display", "flex");
}

$("#benefits").click(changeToBenefits);
$("#sections").click(changeToSections);

function changePopup() { 
    var popups = new Array(
        "url(../mimic_allegro/images/popup1.png) center / cover",
        "url(../mimic_allegro/images/popup2.jpg) center / cover",
        "url(../mimic_allegro/images/popup3.jpg) center / cover",
        "url(../mimic_allegro/images/popup4.png) center / cover",
        "url(../mimic_allegro/images/popup5.png) center / cover"
    );
    var popupText = new Array (
        "#popup1",
        "#popup2",
        "#popup3",
        "#popup4",
        "#popup5"
    );
    var i = 1;

    function changeBackground() {
        $("#popupPlace").css("background", popups[i]);
        $(popupText[i]).css("border-top", "2px solid var(--mainColor)");
        if (i == 0) {
            $(popupText[4]).css("border-top", "none");
        }
        else {
            $(popupText[i-1]).css("border-top", "none");
        }

        i++;
        if (i == 5) {
            i = 0;
        }
    }
    setInterval(changeBackground, 5000);
 };

$(document).ready(changePopup);



var scrolledItems = false;

function scrollItems() {
    if (scrolledItems == false) {
        document.querySelector("#lastItem").scrollIntoView({
            behavior: "smooth",
            block: 'nearest', 
        });
        $("#itemsToSee").css("transform", "rotate(90deg)");
        $("#itemsToSee").css("right", "initial");
        $("#itemsToSee").css("left", "7%");
        scrolledItems = true;
    }
    else {
        document.querySelector("#firstItem").scrollIntoView({
            behavior: "smooth",
            block: 'nearest', 
        });
        $("#itemsToSee").css("transform", "rotate(-90deg)");
        $("#itemsToSee").css("left", "initial");
        $("#itemsToSee").css("right", "7%");
        scrolledItems = false;
    }
    
}

$("#itemsToSee").click(scrollItems);