(function checkInit() {
	try {
		EB.isInitialized() ? onInit() : EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit())
	} catch (a) {
		onInit();
	}
})();

function onInit() {
	console.log("*** Ad Initialised ***");
	animate();
} 

function animate(){
	var delayed = 0;
	TweenMax.to([".copy_1",".copy_2",".copy_3"], 0.0, {scale:0, ease:Back.easeOut.config(1)});
	TweenMax.to(".copy_1", 0.5, {scale:1, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 0.25;
	TweenMax.to(".copy_2", 0.5, {scale:1, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 0.25;
	TweenMax.to(".copy_3", 0.5, {scale:1, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 2;
	TweenMax.to([".copy_1",".copy_2",".copy_3"], 0.5, {opacity:0, delay:delayed, ease:Back.easeIn.config(1)});
	delayed += 0.5;
	TweenMax.to(".copy_4", 0.5, {opacity:1, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 3.5;
	TweenMax.to(".copy_4", 0.5, {opacity:0, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 0.25;
	TweenMax.to(".copy_5", 0.5, {opacity:1, delay:delayed, ease:Back.easeOut.config(1)});
	delayed += 3;
	TweenMax.to([".copy_5",".copy_6",".background"], 0.5, {opacity:0, delay:delayed});
	delayed += 0.5;
	TweenMax.to(".disclaimer", 0.5, {opacity: 1,delay:delayed});
	TweenMax.to(".logo", 0.5, {opacity:1, delay:delayed});
	delayed += 1;
	TweenMax.to(".endframe_copy", 0.5, {opacity: 1,delay:delayed, ease:Power4.easeOut});
	delayed += 0.85;
	TweenMax.to("#cta", 0.5, {opacity: 1,delay:delayed, ease:Power4.easeOut});
	TweenMax.delayedCall(delayed, function(){
		addEvent("mouseover", document.getElementById("cta_hover"), function(){
			TweenMax.to("#cta", 0.25, {opacity:0});
			TweenMax.to("#cta2", 0.25, {opacity:1});
		});
		addEvent("mouseout", document.getElementById("cta_hover"), function(){
			TweenMax.to("#cta", 0.25, {opacity:1});
			TweenMax.to("#cta2", 0.25, {opacity:0});
		});
	});
}

addEvent("click", document.getElementById("stage"), function(){
	EB.clickthrough();
	console.log("*** Generic Exit ***");	
});
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