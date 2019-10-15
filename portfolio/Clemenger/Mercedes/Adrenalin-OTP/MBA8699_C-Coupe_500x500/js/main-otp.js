//SET VARIABLES
var banner;

var logo;
var logoText;

var text01;
var text02;
var text03;

var imageContainer;
var eye;
var pupil;
var hero;
var highlight;

var cta;




window.onload = function(e) {
    //DECLARE VARIABLES
    banner = document.getElementById("clm-banner");

    logo = document.getElementById("logo");
    logoText = document.getElementById("logo-text");

    text01 = document.getElementById("text01");
    text02 = document.getElementById("text02");
    text03 = document.getElementById("text03");

    imageContainer = document.getElementById("image-container");
    eye = document.getElementById("eye");
    highlight = document.getElementById("highlight");
    pupil = document.getElementById("pupil");
    hero = document.getElementById("hero");


    cta = document.getElementById("cta");

    addEventListeners();

    checkInit();

}

function addEventListeners(){
    banner.onclick = triggerClickthrough;

}

function startAnimation(){
    //Show Ad
    banner.style.opacity = 1;

    imageContainer.style.height = "0px";
    imageContainer.style.top = "88px";

    frame1();


}



function frame1(){
    resetStyles([hero, eye, pupil, highlight]);
    imageContainer.style.height = "0px";
    imageContainer.style.top = "128px";
    eye.style.top = "-115px";
    highlight.style.top = "-115px";
    pupil.style.top = "-250px";
    clm.animate(text01, 0.8, {opacity: 1});
    setTimeout(function(){
        frame2();
        //clm.animate(text01, 0.8, {opacity: 0, onComplete: frame2});
    },3200);

}

function frame2(){
    clm.animate(imageContainer, 1, {height: "257px", top: "13px", ease: "ease-in-out"});
    clm.animate(eye, 1, {top: "0px", ease: "ease-in-out"});
    clm.animate(highlight, 1, {top: "0px", ease: "ease-in-out"});
    clm.animate(pupil, 1, {top: "-135px", ease: "ease-in-out", onComplete:function(){

        clm.animate(pupil, 1.6, {delay: 0, scaleX: 1, scaleY: 1, ease:"ease-in-out"});
        clm.animate(hero, 2, {opacity: 1, delay: 1.4});

        setTimeout(function(){
            text01.style.opacity = 0;
            eye.style.opacity = 0;
            highlight.style.opacity = 0;
            pupil.style.opacity = 0;
            //clm.animate(hero, 0.8, {top: "-25px", ease:"ease-in-out", delay: 0});
            //clm.animate(imageContainer, 0.8, {height: "112px", ease:"ease-in-out", delay: 0, onComplete: frame3});
			frame3();
        },3400);

    }});


}

function frame3(){
    clm.animate(text02, 0.8, {opacity: 1});
    clm.animate(text03, 0.8, {opacity: 1, delay: 0.8});
    setTimeout(function(){
    //    clm.animate(text02, 0.8, {opacity: 0});
     //   clm.animate(text03, 0.8, {opacity: 0, onComplete: frame4});
	 frame4();
    },3500);

}

function frame4(){
    clm.animate(cta, 0.8, {opacity: 1});
    clm.animate(logoText, 0.8, {opacity: 1});
    if(clm.checkIfContinue()){
        setTimeout(function(){

            clm.animate(cta, 0.8, {opacity: 0});
            clm.animate(hero, 0.8, {opacity: 0});
			clm.animate(text02, 0.8, {opacity: 0});
			clm.animate(text03, 0.8, {opacity: 0});
            clm.animate(logoText, 0.8, {opacity: 0, onComplete: frame1});
        },4000);

    }
}


function resetStyles(array){
    for(var i=0;i<array.length; i++){
        array[i].removeAttribute("style");
    }
}
