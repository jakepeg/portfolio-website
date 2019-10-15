startAnimation = function() {
    TL1 = new TimelineMax({repeat:1, repeatDelay: 2});
    TL1.set("#banner", {visibility:"visible"})
    .to('#bg', 12, {scale:1.2, rotation:0.01, ease:Linear.easeNone, force3D:false})
    .from('#c1', 1.7, {y:135, ease: Power4.easeOut},'-=12')
    .from('#c1b', 1.7, {y:135, ease: Power4.easeOut},'-=11.8')
    .to("#sprite", 1.5, {backgroundPosition:"-1080px 0px", ease:SteppedEase.config(12)},'-=12')
    .from('#shadow', 2, {opacity:0, ease: Power4.easeInOut},'-=11.5')
    .to('#c1', 1.7, {y:-200, ease: Power4.easeInOut},'-=8')
    .to('#c1b', 1.7, {y:-200, ease: Power4.easeInOut},'-=7.8')
    .from('#c2', 1.7, {y:135, ease: Power4.easeOut},'-=7')
    .from('#c2b', 1.7, {y:135, ease: Power4.easeOut},'-=6.8')
    .from('#c3', 1.7, {y:135, ease: Power4.easeOut},'-=6.5')
    .from('#c4', 1, {opacity:0, ease: Power4.easeInOut},'-=4')
    .from('#cta', 1, {opacity:0, ease: Power4.easeInOut},'-=4');
};
