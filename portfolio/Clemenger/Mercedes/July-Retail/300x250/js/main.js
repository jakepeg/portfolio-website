var startAnimation;
var TimelineMax;
var TL1;

startAnimation = function() {	
	TL1 = new TimelineMax({repeat:0, repeatDelay:2.5});
	TL1.set("#banner", {visibility:"visible"})
	.to('#hero', 2, {top: -115, left:-195, scale: 0.7, ease: Power0.easeInOut},'+=1.3')
	.from('#mask', 1, {opacity: 0, ease: Power4.easeInOut},'+=2')
	.from('#copy1', 1, {opacity: 0, ease: Power4.easeInOut})
	.to('#copy1', 1, {opacity: 0, ease: Power0.easeInOut},'+=1')
	.from('#copy2', 1, {opacity: 0, ease: Power4.easeInOut})
	.from('#copy3', 1, {opacity: 0, ease: Power4.easeInOut},'+=0.5')
	.to('#logotype', 0.5, {opacity: 0, ease: Power4.easeInOut},'+=0.5')
	.from('#cta', 1, {opacity: 0, ease: Power4.easeInOut},'-=0.5');
};