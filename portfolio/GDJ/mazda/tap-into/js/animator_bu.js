// JavaScript Document

	var adDiv;

	var startTime;
	var imgLoadTimer;
	var imgsLoaded;
	var imgsLoading;
	var anims = [];
	var Ease = {};
	
/*
 *	The following Ease equations from Robert Penner
 *	http://robertpenner.com/Ease/
 * Open source under the BSD License. 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 */
	Ease.linear = function (t, b, c, d) {
		// t: current time, b: begInnIng value, c: change In value, d: duration
		if (t==0) return b;
		if (t>=d) return b+c;
		return c*t/d + b;
	}
	
	Ease.eIQ = function ( t, b, c, d) {
		return c*(t/=d)*t + b;
	}
	Ease.eOQ = function ( t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	}
	Ease.eIOQ = function ( t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
	Ease.eIC = function ( t, b, c, d) {
		return c*(t/=d)*t*t + b;
	}
	Ease.eOC = function ( t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	}
	Ease.eIOC = function ( t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	}
	Ease.eIQt = function ( t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	}
	Ease.eOQt = function ( t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	}
	Ease.eIOQt = function ( t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	}
	Ease.eIQnt = function ( t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	}
	Ease.eOQnt = function ( t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	}
	Ease.eIOQnt = function ( t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
	Ease.eISin = function ( t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	}
	Ease.eOSin = function ( t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	}
	Ease.eIOSin = function ( t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	}
	Ease.eIExp = function ( t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	}
	Ease.eOExp = function ( t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	}
	Ease.eIOExp = function ( t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	}
	Ease.eICirc = function ( t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	}
	Ease.eOCirc = function ( t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	}
	Ease.eIOCirc = function ( t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	}
	Ease.eIElastic = function ( t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	}
	Ease.eOElastic = function ( t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	}
	Ease.eIOElastic = function ( t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	}
	Ease.eIBack = function ( t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	}
	Ease.eOBack = function ( t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}
	Ease.eIOBack = function ( t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	}
	Ease.eIBnc = function ( t, b, c, d) {
		return c - Ease.eOBnc ( d-t, 0, c, d) + b;
	}
	Ease.eOBnc1 = function ( t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (1.8/2.75)) {
			return c*(1.0625*(t-=(1.5/2.75))*t + .98) + b;
		} else {
			return b+c;
		}
	}
	Ease.eOBnc = function ( t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	}
	Ease.eIOBnc = function ( t, b, c, d) {
		if (t < d/2) return Ease.eIBnc ( t*2, 0, c, d) * .5 + b;
		return Ease.eOBnc ( t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
	
	
	
	
	
	function hasPX(prop){
		if ((prop == "top")||(prop == "right")||(prop == "bottom")||(prop == "left")||(prop == "width")||(prop == "height")){
			return true;
		}else{
			return false;
		}
	}
	
	function doAnims(){
		
		var i = 0;
		if (isNaN( startTime) || (startTime <= 0)){
			 startTime = Date.now();
			while (i < anims.length){
				anims[i].state = 0;
				i++;
			}
		}
		var cTimer = Date.now() - startTime;
		i = 0;
		var waiting = 0;
		var inprog = 0;
		
		while (i < anims.length){
			var anim = anims[i];
			var elem = document.getElementById(anim.elem);
			
			if (anim.state == 0){
				// not yet started
				if (anim.start > cTimer){
					// animation waiting to start
					waiting++;
				} else {
					// animation starting now
					
					for (var prop in anim.f) {
				      if(anim.f.hasOwnProperty(prop)){
				 			
							if (prop == "rot"){
								elem.style["transform"] = "rotate(" + anim.f[prop] + "deg)";
								elem.style["-webkit-transform"] = "rotate(" + anim.f[prop] + "deg)";
							} else if (hasPX(prop)){
								elem.style[prop] = anim.f[prop] + "px";
							}else{
								elem.style[prop] = anim.f[prop];
							}
							if (prop == "opacity"){
								elem.style.visibility = "visible";
							}
		      			}
   					}
					anim.state = 1;
					inprog++;
				}
			} else if (anim.state == 1){
				if (cTimer >= (anim.start + anim.dur)){
					// animation ended
					for (var prop in anim.f) {
				      if((anim.f.hasOwnProperty(prop))&&(anim.t.hasOwnProperty(prop))){
						  	
							if (prop == "rot"){
								elem.style["transform"] = "rotate(" + anim.t[prop] + "deg)";
								elem.style["-webkit-transform"] = "rotate(" + anim.t[prop] + "deg)";
							} else if (hasPX(prop))
						 			elem.style[prop] = anim.t[prop] + "px";
							else
								elem.style[prop] = anim.t[prop];
		      			}
   					}
					anim.state = 2;
				} else {
					
					// animation active
					
					tDelta = (cTimer - anim.start)/(anim.dur);
					
					var tweenFunc = Ease.linear;
					if (anim.hasOwnProperty("tfn")){
						tweenFunc = Ease[anim.tfn];
					}
					
					for (var prop in anim.f) {
				      if((anim.f.hasOwnProperty(prop))&&(anim.t.hasOwnProperty(prop))){
						  
						//t: current time, b: begInnIng value, c: change In value, d: duration
							var t = (cTimer - anim.start);
							var b = anim.f[prop];
							var c = anim.t[prop] - anim.f[prop];
							var d = anim.dur;
							var pVal = tweenFunc(t,b,c,d);
							
							if (prop == "rot"){
								elem.style["transform"] = "rotate(" + pVal + "deg)";
								elem.style["-webkit-transform"] = "rotate(" + pVal + "deg)";
							} else if (hasPX(prop))
						 			elem.style[prop] = pVal + "px";
							else
								elem.style[prop] = pVal;
					  }
					}
					anim.state = 1;
					inprog++;
				}
			}
			i++;
		}
		
		if ((waiting == 0)&&(inprog == 0)){
			clearInterval(animTimer);
		}
	}
	
	function showElem(elemID){
		var el = document.getElementById(elemID);
  		el.style.visibility = "visible";
	}
	function hideElem(elemID){
		var el = document.getElementById(elemID);
  		el.style.visibility = "hidden";
	}
	
	setBgndImg = function(element, path){
		var img = new Image();
		img.src = path;
		img.addEventListener("load", function(){
			var elem = document.getElementById(element);
			imgsLoaded++;
			if (elem != null){
			
			if ('style' in elem){
			
				elem.style.backgroundImage = "url('"+path+"')";
				elem.style.width = img.width + "px";
				elem.style.height = img.height +"px";
			} else {
				//console.log("UNDEFINED!!");
			
			}}
		}, false);
	}
	
	loadThisImage = function(element, path){
		var img = new Image();
		img.src = path;
		img.addEventListener("load", function(){
			document.getElementById(element).src = this.src;
		}, false);
	}
	
	function checkImgLoad(){
		if (imgsLoaded >= imgsLoading){
			clearInterval(imgLoadTimer);
			startAnimation();
		}
	}
	
	function AddAChild (newID) {
            var newElem = document.createElement ("div");
            newElem.innerHTML = "";
			newElem.id = newID;

            var container = document.getElementById ("ad");
            container.appendChild (newElem);
        }
		
	var createdDivs = {};
	// Fires when ad is initialized.
	function startAdDisplay(){
		
		startTime = 0;
		var inLP = false;
		var endLP = false;
		var LPstart = 0;
		var li = 0;
		var limiter = '';
		var cntr = '';
		
		imgsLoaded = 0;
		imgsLoading = 0;
		for(var i = 0; i< elems.length; i++){
			
			endLP = false;
		
			if(elems[i].hasOwnProperty("LP")){
				
				if (elems[i].LP == "start"){
					
					cntr = elems[i].cntr;
					limiter = elems[i].limit;
					li = 0;
					LPstart = i;
					inLP = true;
				} else if (elems[i].LP == "end"){
					endLP = true;
				}
		
			} else if(elems[i].hasOwnProperty("fp")){
				fp = elems[i].a.fp;
			} else if(elems[i].hasOwnProperty("pause")){
				fp += elems[i].pause;
			} 
			
			var procID = '';
			if (elems[i].hasOwnProperty("id")) {
				
				procID = elems[i].id;
				
				if (inLP){
					procID = elems[i].id.split(cntr).join(String(li));
				} 
				
				createdDivs[procID] = true;
					
				if ((typeof(document.getElementById(procID)) == "null")||(document.getElementById(procID) == null)){
					
					AddAChild(procID);
				}	
				if (elems[i].hasOwnProperty("imgSrc")) {
						setBgndImg(procID, elems[i].imgSrc);
						imgsLoading++;
				} else if (elems[i].hasOwnProperty("imgSrcVar")) {
						setBgndImg(procID, this[elems[i].imgSrcVar]);
						imgsLoading++;
				}
				
				if (elems[i].hasOwnProperty("autosize")) {
					
					var elem = document.getElementById(procID);
						
					if (elem != null){
						
						var divWid = elem.offsetWidth;
						var divHig = elem.offsetHeight;
						
						elem.style.width = "auto";
						
						var fSize = 200;
						elem.style.fontSize = fSize +'px';
						while (elem.offsetWidth > divWid){
							
							elem.style.fontSize = fSize +'px';
							fSize --;
						}
					}
				}
				
				if (elems[i].hasOwnProperty("matchwidth")) {
					
					var elem = document.getElementById(procID);
					var elemRef = document.getElementById(elems[i].matchwidth);
						
					if ((elem != null)&&(elemRef != null)){
						
						elem.style.width = elemRef.offsetWidth + "px";
					}
				}
				
				if (elems[i].hasOwnProperty("init")) {
						if (elems[i].init == "hidden") hideElem(procID);
				}
			} 
			
			if (elems[i].hasOwnProperty("a")) {
				
				if (elems[i].a.hasOwnProperty("delay")){
					elems[i].a.start = fp + elems[i].a.delay;
				}
				if (inLP){
					//we need to clone this!!
					var nxtA = {};
					nxtA.elem = elems[i].id.split(cntr).join(String(li));
					nxtA.delay = elems[i].a.delay;
					nxtA.dur = elems[i].a.dur;
					nxtA.f = elems[i].a.f;
					nxtA.t = elems[i].a.t;
					nxtA.tfn = elems[i].a.tfn;
					nxtA.start = elems[i].a.start;
					nxtA.state = 0;
					
				} else {
					var nxtA = elems[i].a;
					nxtA.elem = elems[i].id;
				}
				anims.push(nxtA);
			}
			
			if (endLP){
				
				li++;
				var limitEval = document.getElementById(limiter.split(cntr).join(String(li))).innerHTML;
				if ((limitEval == "")||(limitEval == null)){
					
					inLP = false;
					endLP = false;
					li = 0;
				
				} else {
					
					i = LPstart;
				}
			}
		}
		imgLoadTimer = setInterval(function(){checkImgLoad();},100);
	}

	function clearAnimTimers(){
		clearInterval(animTimer);
	}

	var fp = 0;
		
	function startAnimation(){
		 animTimer = setInterval(function(){doAnims();},75);
	} 

	// Returns a modified element with show and hide methods.
	function $(id) {
		var $ = document.getElementById(id);
		$.show = function() {
			var _this = this;
			_this.style.visibility = "visible";
		}
		$.hide = function() {
			var _this = this;
			_this.style.visibility = "hidden";
		}
		return $;
	}
	
	function disclaimerOn(){
		 var disc = document.getElementById("disc_div");
		 disc.style.visibility = "visible";
	}
	function disclaimerOff(){
		 var disc = document.getElementById("disc_div");
		 disc.style.visibility = "hidden";
	}