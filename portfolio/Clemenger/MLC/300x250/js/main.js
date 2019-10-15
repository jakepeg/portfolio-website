//SET VARIABLES
var bannerContent;
var startAnimation;
var TimelineMax;
var TL1;

function addEventListeners(){
    bannerContent.onclick = triggerClickthrough;

}

		startAnimation = function() {			
			TL1 = new TimelineMax({repeat:0, repeatDelay:2.5});
			TL1.set("#banner", {visibility:"visible"})
			.from('#copy1', 0.5, {opacity: 0, ease: Power4.easeInOut})
	        .from('#iconstrip', 0.3, {top: 100, ease: Power4.easeInOut})
            .from('#labelstrip', 0.3, {top: 50, ease: Power4.easeInOut})
            .to('#iconstrip', 0.3, {top: -100, ease: Power4.easeInOut},'+=2')
            .to('#labelstrip', 0.3, {top: -50, ease: Power4.easeInOut})
            .to('#iconstrip', 0.3, {top: -200, ease: Power4.easeInOut},'+=2')
            .to('#labelstrip', 0.3, {top: -100, ease: Power4.easeInOut})
            .to('#iconstrip', 0.3, {top: -300, ease: Power4.easeInOut},'+=2')
            .to('#labelstrip', 0.3, {top: -150, ease: Power4.easeInOut})
            .from('#stars-in', 0.1, {scale: 0, ease: Power4.easeInOut})
            .from('#stars-out', 0.1, {scale: 0, ease: Power4.easeInOut})
            .to('#stars-in', 0.1, {top: -100, opacity: 0, ease: Power4.easeInOut},'+=3')
            .to('#stars-out', 0.1, {top: -100, opacity: 0, ease: Power4.easeInOut},'-=0.1')
            .to('#iconstrip', 0.1, {top: -400, opacity: 0, ease: Power4.easeInOut},'-=0.1')
            .to('#labelstrip', 0.1, {top: -200, ease: Power4.easeInOut})
			.to('#copy1', 0.5, {opacity: 0, ease: Power4.easeInOut})
			.from('#copy2', 0.5, {opacity: 0, ease: Power4.easeInOut})
			.from('#cta', 0.3, {opacity: 0, ease: Power4.easeInOut})
			.from('#disclaimer_button', 0.3, {top:300, opacity: 0, ease: Power4.easeInOut});
		};
		
	function disclaimerOn(){
		// show the disclaimer element
		TL1.pause();
		 var disc = document.getElementById("disclaimer");
		 disc.style.visibility = "visible";
		 console.log("visible");
	}
	function disclaimerOff(){
		// hide the disclaimer element
		TL1.play();
		 var disc = document.getElementById("disclaimer");
		 disc.style.visibility = "hidden";
		 console.log("hidden");
	}