(function checkInit() {
	try {
		EB.isInitialized() ? onInit() : EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit())
	} catch (a) {
		onInit();
}})();

function onInit() {
	console.log("*** Ad Initialised ***");
	animate();
} 

function animate(){
	var delayed = 3.0;
	TweenMax.from("#next", .05, {x:-450, delay:delayed,ease:Power4.easeIn});
    TweenMax.from("#prev", .05, {x:-450, delay:delayed,ease:Power4.easeIn}, '-=3');
}

// Support IE events
function addEvent(evnt, elem, func) {
	if (elem.addEventListener){  // W3C DOM
		elem.addEventListener(evnt,func,false);
	}else if(elem.attachEvent){ // IE DOM
		elem.attachEvent("on"+evnt, func);
	}else{ // No much to do
     elem[evnt] = func;
  }
}

// Events

addEvent("click", document.getElementById("next"), function(){
    next();
});

addEvent("click", document.getElementById("prev"), function(){
    prev();
});

document.getElementById("carousel").addEventListener("click", function(e) {
    if (e.target && e.target.id == "recipe_one") {
        EB.clickthrough("more-mmmmm");
    }

    if (e.target && e.target.id == "recipe_two") {
        EB.clickthrough("beef-tacos");
    }

    if (e.target && e.target.id == "recipe_three") {
        EB.clickthrough("crispy-chicken");
    }

    if (e.target && e.target.id == "recipe_four") {
        EB.clickthrough("chicken-burritos");  
    }

    if (e.target && e.target.id == "recipe_five") {
        EB.clickthrough("charred-chicken");  
    }       
});

var isRunning = false; // Flag to stop carousel spam
var autoRotate = setInterval(next, 2500); // Automatic carousel rotation

function prev(){
    clearInterval(autoRotate);
    if(isRunning == false){
        isRunning = true;
        var parentElement = document.getElementById("carousel");
        parentElement.insertBefore(parentElement.childNodes[4],parentElement.childNodes[0]);
        TweenMax.to(".carousel", 0.0, {x:"-=300"});
        TweenMax.to(".item", 0.5, {x:"+=300"});
        setTimeout(function(){
            isRunning = false;
        }, 500);
    }
    if(loop_counter < 3) {
        autoRotate = setInterval(next, 2500);
        loop_counter += 1;
    }
}

var loop_counter = 0;
function next(){
    clearInterval(autoRotate);
    var parentElement = document.getElementById("carousel");
    if(isRunning == false){
        isRunning = true;
        TweenMax.to(".carousel", 0.5, {x:"-=300"});
        TweenMax.delayedCall(0.5, function(){
            TweenMax.to(".item", 0.0, {x:"+=300"});
            var cln = parentElement.childNodes[0].cloneNode(true);
            parentElement.appendChild(cln);
            parentElement.removeChild(parentElement.childNodes[0]);
            isRunning = false;
        });
    }
    if(loop_counter < 3) {
        autoRotate = setInterval(next, 2500);
        loop_counter += 1;
    }
    console.log(loop_counter);
}