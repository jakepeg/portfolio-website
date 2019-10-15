
var content;
// var fullscreenContent;

//COLLAPSED
var imageContainer;
var hero;

//EXPANDED

var galleryThumbs = [];
var galleryImages = [];
var currentContainer;
var feature;

var clicktag;
var cta;
var expand;
var supportsTouch;

var snapSpeed = 1;

var isTransition = true;

var collapsedInterval;

var clm = new CLM(0);

var currentBlinks = 0;
var totalBlinks = 3;

var collapsedBlinkHeight = 130;
var collapsedBlinkYoffset= 40;


var isExpanded = false;
var hasTouchScreen;
var isMobile;
var supported = false;

function onLoadHandler(){
	console.log('PAGE LOADED');
	if(Enabler.isInitialized()){
		enablerInitHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
}

function enablerInitHandler(){
	Enabler.setExpandingPixelOffsets(
		0, // left offset of expanded ad
		0, // top offset of expanded ad
		970, // expanded width of ad
		640); // expanded height of ad
//	Enabler.setHint('expansionMode', 'lightbox');

	if(Enabler.isPageLoaded()){
		pageLoadedHandler();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
	}
}

pageLoadedHandler = function(){
	content = document.getElementById('collapse_content');
	expandedContent = document.getElementById('expanded_content');
	imageContainer = document.getElementById("image-container");
	hero = document.getElementById("hero");
	feature = document.getElementById("feature");
	clicktag = document.getElementById("clicktag");
	cta = document.getElementById("cta");
	expand = document.getElementById("expand");
	imageContainer.style.height = "0px";
	imageContainer.style.top = "105px";
	hero.style.top = "-65px";
	setDetectMobile();
	expandUnit();
	collapsedAnimation();
	//-- Add expand and button events --//
	addListeners();
	//Show collapse content
	content.style.display = "block";
	setupGallery();
}

function expandUnit(){
		document.getElementById("button-rollover").style.opacity = 1;
		content.addEventListener('mouseover', expandHandler, false);
		clm.animate(expand, 0.8, {opacity: 1});
}

//Add Event Listeners
addListeners = function(){
	clicktag.addEventListener('click', expandExitHandler, false);
	cta.addEventListener('click', expandExitHandler, false);
	feature.addEventListener('click', expandExitHandler, false);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
    Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
}

function setupGallery(){
	galleryThumbs = document.getElementsByClassName("thumbnail");
	galleryImages = document.getElementsByClassName("feature-container");
	currentContainer = galleryImages[0];
	for(var i = 0; i < galleryThumbs.length; i++) {
		var thumb = galleryThumbs[i];
		thumb.onclick = handleClick;
	}
}

function handleClick(event){
	for(var i = 0; i < galleryThumbs.length; i++) {
		var thumb = galleryThumbs[i];
		if(thumb == event.currentTarget){

			if(!isTransition) {
				if(galleryImages[i] != currentContainer) {
					blinkTransition(currentContainer, galleryImages[i], 366, 0, snapSpeed);
					currentContainer = galleryImages[i];
					thumb.className = "thumbnail selected";
					thumb.getElementsByClassName("thumb-border")[0].className = "thumb-border selected";
					unselectThumbsNails(i);
				}
			}
		}
	}
}

function unselectThumbsNails(excludeNo){
	for(var i = 0; i < galleryThumbs.length; i++) {
		var thumb = galleryThumbs[i];
		if(i != excludeNo){
			thumb.getElementsByClassName("thumb-border")[0].className = "thumb-border";
			thumb.className = "thumbnail";
		}
	}
}


function revealImage(container, height, top, speed){
	var image = container.getElementsByTagName("img")[0];
	clm.animate(container, speed/2, {height: height+"px", top: top+"px", ease: "ease-out"});
	clm.animate(image, speed/2, {top: "0px", ease: "ease-out", onComplete:function(){isTransition = false;}});
}

function blinkTransition(oldConatiner, newConatiner, height, top, speed){
	isTransition = true;
	var imageOld = oldConatiner.getElementsByTagName("img")[0];
	var imageNew = newConatiner.getElementsByTagName("img")[0];
	clm.animate(oldConatiner, speed/2, {height: "0px", top: ((height/2)+top)+"px", ease: "ease-in"});
	clm.animate(imageOld, speed/2, {top: "-"+(height/2)+"px", ease: "ease-in", onComplete: function(){
		clm.animate(newConatiner, speed/2, {height: height+"px", top: top+"px", ease: "ease-out"});
		clm.animate(imageNew, speed/2, {top: "0px", ease: "ease-out", onComplete:function(){isTransition = false;}});
	}});
}

function collapsedAnimation(){
	collapsedInterval = setInterval(function(){
		currentBlinks ++;
		if(currentBlinks <= totalBlinks) {
			blinkAnimation(imageContainer, hero, collapsedBlinkHeight, collapsedBlinkYoffset, snapSpeed);
		} else {
			killCollapsed();
		}
	}, 4000);
}

function blinkAnimation(container, image, height, top, speed){
	clm.animate(container, speed/2, {height: height+"px", top: top+"px", ease: "ease-out"});
	clm.animate(image, speed/2, {top: "0px", ease: "ease-out", onComplete: function(){
		clm.animate(container, speed/2, {height: "0px", top: ((height/2)+top)+"px", ease: "ease-in"});
		clm.animate(image, speed/2, {top: "-"+(height/2)+"px", ease: "ease-in"});
	}});
}

function killCollapsed(){

	if(collapsedInterval)clearInterval(collapsedInterval);
}

function onExpandHandler(){
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
}

var isExpanded = false;

expandHandler = function(){
	Enabler.requestExpand();
	console.log("expanded");
	var isExpanded = true;
}

expandStartHandler = function(){
	expandedContent.style.display = 'block';
	killCollapsed();
	Enabler.finishExpand();
}

expandFinishHandler = function(){
	isExpanded = true;
	Enabler.counter('Expansion_Ctr');
	Enabler.startTimer('Expansion_Timer');
	setTimeout(function(){
		revealImage(currentContainer, 366, 0, snapSpeed);
	},500);
}

collapseStartHandler = function(){
	Enabler.finishCollapse();


}

collapseFinishHandler = function() {
	isExpanded = false;
	Enabler.counter('Collapse_Ctr');
	Enabler.stopTimer('Expansion_Timer');
	expandedContent.style.display = 'none';

}

expandExitHandler = function(){
	Enabler.requestCollapse();
	Enabler.exit('Expanded_Clickthrough');
}

collapsedExitHandler = function(){

	Enabler.exit('Collapsed_Clickthrough');
}

window.addEventListener('load', onLoadHandler);


function setDetectMobile() {
	isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()) && hasTouchScreen();
		}
	};
	hasTouchScreen = function () {
		var n = !1,
			o = function (n) {
				return -1 !== window.navigator.userAgent.toLowerCase().indexOf(n)
			};
		return ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && (o("NT 5") || o("NT 6.1") || o("NT 6.0") || (n = !0)), n
	};

}