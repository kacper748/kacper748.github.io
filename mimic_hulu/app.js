let backgroundChange = document.getElementById('backgroundChange');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let title = document.getElementById('sportsTitle');
let description = document.getElementById('sportsDescription');

function changeToSports() {
    bar1.style.borderBottom = "4px solid white";
    bar2.style.borderBottom = "none";
    bar3.style.borderBottom = "none";
    title.innerHTML = "Live Sports";
    description.innerHTML = "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.";
    if (window.matchMedia("(max-width: 600px)").matches) {
        backgroundChange.style.background = "url(../mimic_hulu/images/live-sports-small.jpg) center / cover";
    } 
    else {
        backgroundChange.style.background = "url(../mimic_hulu/images/live-sports.jpg) center / cover";
    }
}   

function changeToNews() {
    bar1.style.borderBottom = "none";
    bar2.style.borderBottom = "4px solid white";
    bar3.style.borderBottom = "none";
    title.innerHTML = "Breaking News";
    description.innerHTML = "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
    if (window.matchMedia("(max-width: 600px)").matches) {
        backgroundChange.style.background = "url(../mimic_hulu/images/breaking-news-small.jpg) center / cover";
    }
    else {
        backgroundChange.style.background = "url(../mimic_hulu/images/breaking-news.jpg) center / cover";
    }
}   

function changeToEvents() {
    bar1.style.borderBottom = "none";
    bar2.style.borderBottom = "none";
    bar3.style.borderBottom = "4px solid white";
    title.innerHTML = "Biggest Events";
    description.innerHTML = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
    if(window.matchMedia("(max-width: 600px)").matches) {
        backgroundChange.style.background = "url(../mimic_hulu/images/biggest-events-small.jpg) center / cover";
    }
    else {
        backgroundChange.style.background = "url(../mimic_hulu/images/biggest-events.jpg) center / cover";
    }
}   

bar1.addEventListener("click", changeToSports);
bar2.addEventListener("click", changeToNews);
bar3.addEventListener("click", changeToEvents);


let hiddenTable = document.getElementById('hiddenTable');
let addOns = document.getElementById('addOns');
let addOns2 = document.getElementById('addOns2');
let plans = document.querySelector('.plans');
var intervalShowed;
var intervalHidden;

function showTable() {
    hiddenTable.style.display = "initial";
    addOns.style.display = "none";
    intervalShowed = setInterval(checkWidthForShowedTable, 100);
    if (intervalHidden != null) {
        clearInterval(intervalHidden);
        intervalHidden = null;
    } 
}

function checkWidthForShowedTable() {
    if(window.matchMedia("(max-width: 600px)").matches) {
        plans.style.height = "2400px";
    }
    else {
        plans.style.height = "1800px";
    }  
}

function hideTable() {
    hiddenTable.style.display = "none";
    addOns.style.display = "initial"; 
    clearInterval(intervalShowed);
    intervalShowed = null;
    intervalHidden = setInterval(checkWidthForHiddenTable, 100);  
}

function checkWidthForHiddenTable() {
    if(window.matchMedia("(max-width: 600px)").matches) {
        plans.style.height = "1600px";
    }
    else {
        plans.style.height = "1200px";
    }
}

addOns.addEventListener("click", showTable);
addOns2.addEventListener("click", hideTable);

