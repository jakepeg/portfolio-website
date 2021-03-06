// animator.js
// lightweight animation engine for dynamic html5 advertising 
// gdj.com.au


	var adDiv;

	var startTime;
	var imgLoadTimer;
	var imgsLoaded;
	var imgsLoading;
	var anims = [];
	var createdDivs = {};
	
	
	var Ease = {};
	
/*
 *	The following Ease equations from Robert Penner
 *	http://robertpenner.com/Ease/
 * Open source under the BSD License. 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 
 Ease	An object containing a collection of tweening functions
 		each tweening function takes parameters (t, b, c, d)
 		t	current time (milliseconds from tween start)
 		b	beginning value for tween
 		c	change in value for tween
 		d	duration of tween (milliseconds)

 	Available tween functions are
	Ease.linear		Linear
	Ease.eIQ		ease in - Quadratic
	Ease.eOQ		ease out - Quadratic
	Ease.eIOQ		ease in and out - Quadratic
	Ease.eIC		ease in - Cubic
	Ease.eOC		ease out - Cubic
	Ease.eIOC		ease in and out - Cubic
	Ease.eIQt		ease in - Quartic
	Ease.eOQt		ease out - Quartic
	Ease.eIOQt		ease in and out - Quartic
	Ease.eIQnt		ease in - Quintic
	Ease.eOQnt		ease out - Quintic
	Ease.eIOQnt		ease in and out - Quintic
	Ease.eISin		ease in - Sinusoidal
	Ease.eOSin		ease out - Sinusoidal
	Ease.eIOSin		ease in and out - Sinusoidal
	Ease.eIExp		ease in - Exponential
	Ease.eOExp		ease out - Exponential
	Ease.eIOExp		ease in and out - Exponential
	Ease.eICirc		ease in - Circular
	Ease.eOCirc		ease out - Circular
	Ease.eIOCirc	ease in and out - Circular
	Ease.eIElastic	ease in - Elastic
	Ease.eOElastic	ease out - Elastic
	Ease.eIOElastic	ease in and out - Elastic
	Ease.eIBack		ease in - Back
	Ease.eOBack		ease out - Back
	Ease.eIOBack	ease in and out - Back
	Ease.eIBnc		ease in - Bounce
	Ease.eOBnc1		ease out - Bounce (simplified)
	Ease.eOBnc		ease out - Bounce
	Ease.eIOBnc		ease in and out - Bounce
	
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
	
		/*
			takes a css property (string)as a parameter
			 - returns true if it requires a 'px' suffix
			 - false returned otherwise
		*/
	
		if ((prop == "top")||(prop == "right")||(prop == "bottom")||(prop == "left")||(prop == "width")||(prop == "height")){
			return true;
		}else{
			return false;
		}
	}
	
	function doAnims(){
		
		/*
			loops through 'anim' - the array of animation objects
			calculates and sets an elements tweened property values as required
		*/
		
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
		
			// check next animation in list ...
			
			var anim = anims[i];
			var elem = document.getElementById(anim.elem);
			
			/*
			
			anim.state tracks the current phase of the animation
			0 - not yet started
			1 - animation in progress
			2 - animation ended
			
			*/
			
			if (anim.state == 0){
				
				// not yet started
				
				if (anim.start > cTimer){
					// still not start time ... animation remains waiting to start
					waiting++;
				} else {
				
					// animation starting now
					
			//		if (anim.hasOwnProperty('dep')){
			//			
			//			console.log((anim.dep));
			//			console.log(eval(anim.dep));
			//		}
					
					
					//if (! anim.hasOwnProperty('dep') || (this[anim.dep])){
					//if (! anim.hasOwnProperty('dep') || (eval(anim.dep))){
				
						
						for (var prop in anim.f) {
						
							// loop through properties in animation object
							// and set the specified starting values
						
						  if(anim.f.hasOwnProperty(prop)){
								
								if (prop == "rot"){
									// object rotation requires transform application
									elem.style["transform"] = "rotate(" + anim.f[prop] + "deg)";
									elem.style["-webkit-transform"] = "rotate(" + anim.f[prop] + "deg)";
								} else if (hasPX(prop)){
									// 'px' sufixed string
									elem.style[prop] = anim.f[prop] + "px";
								} else {
									// numeric value
									elem.style[prop] = anim.f[prop];
								}
								if (prop == "opacity"){
									// turn visibility on
									elem.style.visibility = "visible";
								}
							}
						}
						anim.state = 1;
						inprog++;
					//} else {
					//	anim.state = 2;
					//}
				}
			} else if (anim.state == 1){
				if (cTimer >= (anim.start + anim.dur)){
					
					// animation ended
					
					for (var prop in anim.f) {
					
						// loop through properties in animation object
						// and set the specified end values
						
				      if((anim.f.hasOwnProperty(prop))&&(anim.t.hasOwnProperty(prop))){
						  	
							if (prop == "rot"){
								// object rotation requires transform application
								elem.style["transform"] = "rotate(" + anim.t[prop] + "deg)";
								elem.style["-webkit-transform"] = "rotate(" + anim.t[prop] + "deg)";
							} else if (hasPX(prop)){
								// 'px' sufixed string
					 			elem.style[prop] = anim.t[prop] + "px";
							} else {
								// numeric value
								elem.style[prop] = anim.t[prop];
							}
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
					
						// loop through properties in animation object
						// calculate and set the tweened values
						
				      if((anim.f.hasOwnProperty(prop))&&(anim.t.hasOwnProperty(prop))){
						  
						//t: current time, b: begInnIng value, c: change In value, d: duration
						var t = (cTimer - anim.start);
						var b = anim.f[prop];
						var c = anim.t[prop] - anim.f[prop];
						var d = anim.dur;
						var pVal = tweenFunc(t,b,c,d);
						
						if (prop == "rot"){
							// object rotation requires transform application
							elem.style["transform"] = "rotate(" + pVal + "deg)";
							elem.style["-webkit-transform"] = "rotate(" + pVal + "deg)";
						} else if (hasPX(prop)){
							// 'px' sufixed string
							elem.style[prop] = pVal + "px";
						} else {
							// numeric value
							elem.style[prop] = pVal;
						}
					  }
					}
					anim.state = 1;
					inprog++;
				}
			}
			i++;
		}
		
		if ((waiting == 0)&&(inprog == 0)){
			// nothing more to animate
			// kill the animation interval timer
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
		
		// set the background image style of an element
		// once loaded, we size the element to match the background image
		
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
		// load an image
		// this can just cache/preload ... we don't actually need to display use it
		var img = new Image();
		img.src = path;
		img.addEventListener("load", function(){
			document.getElementById(element).src = this.src;
		}, false);
	}
	
	function checkImgLoad(){
		// check the state of loaded images
		// once we have them all, we'll start the animation
		if (imgsLoaded >= imgsLoading){
			clearInterval(imgLoadTimer);
			startAnimation();
		}
	}
	
	function AddAChild (newID) {
		
		// create and append a new div element to the 'ad' container
	
		var newElem = document.createElement ("div");
		newElem.innerHTML = "";
		newElem.id = newID;

		var container = document.getElementById ("ad");
		container.appendChild (newElem);
	}
		
	
	
	function startAdDisplay(){
		
		/*
			Fires when ad is initialized.
			
			Here we pre-process the 'elems' data array from animation.js
			
			'elems' is an array of the dynamic elements and their various properties, tween information, image src values etc.
			it also supports looping of animation blocks.
			
			This 'startAdDisplay' function is called after we have loaded the dynamic data in 'dco_advanced_block.js'
			we transform the relative time values in the 'elems' data to absolute values
			as we run through and evaluate the pauses, loop sections and any loop limiters and counters
			
			
			This function initiates preloading of any required images.
			
			
			The function can also pre-process element sizes ...
			currently, this supports 
			 - matching the width of an element to that of an existing element 
			 - matching the height of an element to that of an existing element 
			 - sizing the fontsize to fit a string within the width of it's container
			
			
			Looping ...
			
			a numeric loop could be defined (within animation.js) as follows
			( this would loop the fading in and out of div with id 'tile' displaying the image 'tile.png' )
							
				{LP:"start", limit:3},
				{id:"tile", imgSrc:"images/tile.png", init:"hidden", a:{t:{opacity:1},f:{opacity:0},dur:1200, delay:200, tfn:"eIOExp"}},
				{id:"tile", a:{t:{opacity:0},f:{opacity:1},dur:1200, delay:1500, tfn:"eIOExp"}},
				{pause:4000},
				{LP:"end"},

			
			a loop with a dynamic content limiter could be defined as follows.
			( this would continue to slide text content across the screen while an element of id 'feat##a' existed and had a non-null innerHTML value -- where ## is the loop counter)
			
				{LP:"start", cntr:"_li_", limit:"feat_li_a"},
				{id:"feat_li_a", init:"hidden", a:{t:{left:-300},f:{opacity:1,left:300},dur:2500, delay:50, tfn:"eIOExp"}},
				{pause:3000},
				{LP:"end"},
		*/
		
		startTime = 0;		// animation start time
		var inLP = false;	// currently in loop (boolean)
		var endLP = false;	// 
		var LPstart = 0;
		var li = 0;
		var limiter = '';
		var cntr = '';
		
		
		imgsLoaded = 0;
		imgsLoading = 0;
		for(var i = 0; i< elems.length; i++){
			
			
			if (inLP){
				
				var lastLoop = false;
				if (Number(limiter) == limiter){
					
					if (li+1 >= limiter) lastLoop = true;
					
				} else {
					
					var limitEval = document.getElementById(limiter.split(cntr).join(String(li+1))).innerHTML;
					
					if((limitEval == "")||(limitEval == null)) lastLoop = true;
					else lastLoop = false;
					
				}	
			}
			
			
			endLP = false;
		
			
			var depEval = true;
			if (elems[i].hasOwnProperty('dep')){
				console.log("dep:" +elems[i].dep);
				var depArr = elems[i].dep.split('|');
				for (var di=0; di < depArr.length; di++){
					
					console.log(depArr[di] + " : " + eval(depArr[di]));
					if (!(eval(depArr[di]))) depEval = false;
				}
				
				depEval = eval(elems[i].dep);
				console.log("depEval:" +depEval);
			}
			
			if ((depEval)){
				
				
			if(elems[i].hasOwnProperty("LP")){
				
				if (elems[i].LP == "start"){
					
					// this is the start of a loop
					
					if (elems[i].hasOwnProperty("cntr"))  cntr = elems[i].cntr;
					else cntr = '-no-token-';
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
				
				// this is a pause defined in milliseconds
				
				fp += elems[i].pause;
			} 
		
		//!hasPrice|lastLoop
		
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
						// load and set the background image of this div from a static source
						setBgndImg(procID, elems[i].imgSrc);
						imgsLoading++;
				} else if (elems[i].hasOwnProperty("imgSrcVar")) {
						// load and set the background image of this div from a variable source
						setBgndImg(procID, this[elems[i].imgSrcVar]);
						imgsLoading++;
				}
				
				if (elems[i].hasOwnProperty("autosize")) {
					
			 // - sizing the fontsize to fit the content string to the width of it's container
			 
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
					
					// match the width of this element to that specified by the 'matchwidth' property
					
					var elem = document.getElementById(procID);
					var elemRef = document.getElementById(elems[i].matchwidth);
						
					if ((elem != null)&&(elemRef != null)){
						
						elem.style.width = elemRef.offsetWidth + "px";
					}
				}
				if (elems[i].hasOwnProperty("matchheight")) {
					
					// match the height of this element to that specified by the 'matchheight' property
					
					var elem = document.getElementById(procID);
					var elemRef = document.getElementById(elems[i].matchheight);
						
					if ((elem != null)&&(elemRef != null)){
						
						elem.style.height = elemRef.offsetHeight + "px";
					}
				}
				
				if (elems[i].hasOwnProperty("init")) {
					// initially hide the element  
						if (elems[i].init == "hidden") hideElem(procID);
				}
			} 
			
			if (elems[i].hasOwnProperty("a")) {
				
				// this is the animation definition
				
				if (elems[i].a.hasOwnProperty("delay")){
					elems[i].a.start = fp + elems[i].a.delay;
				} else {
					elems[i].a.start = fp;
				}
				if (inLP){
					// 
					// We are currently in a loop and we need to clone this!!
					// 
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
				// add it to the processed animation array
				anims.push(nxtA);
			}
			
			
			if (endLP){
				
				li++;
				var loopAgain = false;
				if (Number(limiter) == limiter){
					
					// limiter is a numeric loop count
					if (li < limiter) loopAgain = true;
					
				} else {
					
					// limiter is a string that requires evaluation of html content after replacing the counter token (cntr) with the current loop value;
					var limitEval = document.getElementById(limiter.split(cntr).join(String(li))).innerHTML;
					
					if((limitEval == "")||(limitEval == null)) loopAgain = false;
					else loopAgain = true;
					
				}
				
				if (! loopAgain){
					
					inLP = false;
					endLP = false;
					li = 0;
				
				} else {
					
					i = LPstart;
				}
			}
			}
		}
		
		// begin testing the state of preloaded images ...
		imgLoadTimer = setInterval(function(){checkImgLoad();},100);
	}

	function clearAnimTimers(){
		// shut it down when we've finished all animation
		clearInterval(animTimer);
	}

	var fp = 0;
		
	function startAnimation(){
		// begin the animation counter
		// a 75 ms value works out to 13.3 fps
		 animTimer = setInterval(function(){doAnims();},50);
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
		// show the disclaimer element
		 var disc = document.getElementById("disc_div");
		 disc.style.visibility = "visible";
	}
	function disclaimerOff(){
		// hide the disclaimer element
		 var disc = document.getElementById("disc_div");
		 disc.style.visibility = "hidden";
	}