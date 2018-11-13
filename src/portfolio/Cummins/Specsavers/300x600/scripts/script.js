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
 //   TweenMax.to('#flip-container', 0.2, { rotationZ:-1, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1 }, "swingme")
 //   TweenMax.to('#flip-container', 0.4, { rotationZ:1, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.2 }, "swingme")
 //   TweenMax.to('#flip-container', 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.6 }, "swingme");
}

function go900(){
    document.getElementById("flipper").className = "go900";
 //   TweenMax.to('#flip-container', 0.2, { rotationZ:-1, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1 }, "swingme")
 //   TweenMax.to('#flip-container', 0.4, { rotationZ:1, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.2 }, "swingme")
 //   TweenMax.to('#flip-container', 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.6 }, "swingme");
}

function go720(){
    document.getElementById("flipper").className = "go720";
 //   TweenMax.to('#flip-container', 0.2, { rotationZ:-1, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1 }, "swingme")
 //   TweenMax.to('#flip-container', 0.4, { rotationZ:1, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.2 }, "swingme")
 //   TweenMax.to('#flip-container', 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.6 }, "swingme");
}

function go540(){
    document.getElementById("flipper").className = "go540";
 //   TweenMax.to('#flip-container', 0.2, { rotationZ:-1, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1 }, "swingme")
 //   TweenMax.to('#flip-container', 0.4, { rotationZ:1, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.2 }, "swingme")
 //   TweenMax.to('#flip-container', 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.6 }, "swingme");
}

function go360(){
    document.getElementById("flipper").className = "go360";
 //   TweenMax.to('#flip-container', 0.2, { rotationZ:-1, ease:Power1.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1 }, "swingme")
 //   TweenMax.to('#flip-container', 0.4, { rotationZ:1, ease:Power1.easeInOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.2 }, "swingme")
 //   TweenMax.to('#flip-container', 2, { rotationZ:0, ease:Elastic.easeOut, onUpdate:onUpdate, onUpdateParams:["{self}"], delay:1.6 }, "swingme");
}

function onUpdate(tween)
{
    var target = tween.target;
}