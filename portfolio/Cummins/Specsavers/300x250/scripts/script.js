var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("clickthrough").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

window.addEventListener("load", initEB);

function showBack(){
	document.getElementById("flipper").className = "showBack";
}

function showFront(){
	document.getElementById("flipper").className = "showFront";
}

function go900(){
    document.getElementById("flipper").className = "go900";
}

function go720(){
    document.getElementById("flipper").className = "go720";
}

function go540(){
    document.getElementById("flipper").className = "go540";
}

function go360(){
    document.getElementById("flipper").className = "go360";
}