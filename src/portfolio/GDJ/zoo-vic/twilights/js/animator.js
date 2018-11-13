// animator.js
// lightweight animation engine for dynamic html5 advertising 
// gdj.com.au

var paths = [];
	
function Animator(){
	
	this.adDiv = null;

	this.stTm = null;
	this.imgLoadTimer = null;
	this.imgsLoaded = null;
	this.imgsLoading = null;
	this.createdDivs = {};
	this.adLps =0;
	this.adFrmCnt =0;
	this.lastAdLp = false;
	this.cAnim = 0;
	this.requestID = null;
	
	this.killAnim = false;
	
	this.frameSkip =  3;
	
}

function d(el){ return document.getElementById(el)};

function hasPX(prop){
	
	if   ((prop == "top")
		||(prop == "right")
		||(prop == "bottom")
		||(prop == "left")
		||(prop == "width")
		||(prop == "height")
		||(prop == "letterSpacing")
		||(prop == "fontSize")){
		return true;
	}else{
		return false;
	}
}

function Ease_linear (t, b, c, d) {
	if (t==0) return b;
	if (t>=d) return b+c;
	return c*t/d + b;
}
function Ease_eIOExp ( t, b, c, d) {
	if (t==0) return b;
	if (t==d) return b+c;
	if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
}
	
	Animator.prototype.setProp = function(el, prop, pVal, incFn){
		
		var isFunc = false;

		if ((prop == "color")||(prop == "backgroundColor")){
			el.style[prop] = 'RGBA(' + (pVal[0] | 0) + ',' + (pVal[1] | 0) + ',' + (pVal[2] | 0) + ',' + pVal[3]  + ')';
		} else if (prop == "posn"){
			el.style.left = pVal.x + 'px';
			el.style.top = pVal.y + 'px';
		} else if (prop == "rot"){
			// object rotation requires transform application
			el.style["transform"] = "rotate(" + pVal + "deg)";
			el.style["-webkit-transform"] = "rotate(" + pVal + "deg)";
		} else if (hasPX(prop)){
			// 'px' sufixed string
			el.style[prop] = pVal + "px";
		} else if (prop == "opacity"){
			// turn visibility on
			el.style.visibility = "visible";
			el.style[prop] = pVal;
		} else if (prop == "func"){
			// evaluate a function
			if (incFn) eval(pVal);
			isFunc = true;
		} else {
			// numeric value
			el.style[prop] = pVal;
		}
		return isFunc;
	}
	
	Animator.prototype.doAnims = function(){
		/*
			Lps through 'anim' - the array of animation objects
			calculates and sets an elements tweened property values as required
		*/
		
		var cAnim = this.cAnim;
		var aList = this.aList;
		var els = aList[this.cAnim].elems;
		var anims = aList[this.cAnim].anims;
			
		var adDiv = this.adDiv;
		
		if (!(this.adFrmCnt % this.frameSkip)){
						
			var i = 0;
			if (isNaN( this.stTm) || (this.stTm <= 0)){
				 this.stTm = Date.now();
				while (i < anims.length){
					anims[i].state = 0;
					i++;
				}
			}
			
			var cTmr = Date.now() - this.stTm;
			i = 0;
			var waiting = 0;
			var inprog = 0;
			
			while (i < anims.length){
			
				// check next animation in list ...
				
				var anim = anims[i];
				var el = d(anim.elem);
								
				/*
				anim.state tracks the current phase of the animation
				0 - not yet started
				1 - animation in progress
				2 - animation ended
				*/
			
				var onlyFunc = true;
					
				if (anim.state == 0){
					// not yet started
					
					if (anim.start > cTmr){
						// still not start time ... animation remains waiting to start
						waiting++;
						
					} else {
					
						// animation starting now
						
						var rtde = true;
						if (('realtimedep' in anim)){
							rtde = eval(anim.realtimedep);
						}
						
						if ((rtde)){
							var hasfunc = false;
							
							if (('path' in anim)){
								this.setProp(el, 'posn', paths[anim.path].getXYAtTime(0), true);
								onlyFunc = false;
							} else {
								
								for (var prop in anim.f) {
								
									// Lp through properties in animation object
									// and set the specified starting values
									
									
									if (this.setProp(el, prop, anim.f[prop], true))  hasfunc = true;
									else onlyFunc = false;
								}
							}
							
							if (onlyFunc && hasfunc) anim.state = 2;
							else { inprog++;  anim.state = 1;}
						}
							
					}
				} else if (anim.state == 1){
						
					var rtde = true;
					if (('realtimedep' in anim)){
						rtde = eval(anim.realtimedep);
					}
					
					if ((rtde)){
						
						if (cTmr >= (anim.start + anim.dur)){
							
							// animation ended
							if (('path' in anim)){								
								this.setProp(el, 'posn', paths[anim.path].getXYAtTime(1), true);
								onlyFunc = false;
							} else {
								for (var prop in anim.t) {
							
									if (this.setProp(el, prop, anim.t[prop], true))  hasfunc = true;
									else onlyFunc = false;
								}
							}
							anim.state = 2;
							
						} else {
							
							// animation active
							
							if (typeof(anim.tempf) == 'undefined'){
								anim.tempf = {};
							}
							tDelta = (cTmr - anim.start)/(anim.dur);
							
							var tfn = Ease_linear;
							
							if (("tfn" in anim)){
								if (anim.tfn == 'eIOExp') tfn = Ease_eIOExp;
								else if (typeof(Ease) != 'undefined') tfn = Ease[anim.tfn];
							}
							
							if (('path' in anim)){
								
								var t = (cTmr - anim.start);
								var b = 0;
								var c = 1;
								var dur = anim.dur;
								var pVal = tfn(t,b,c,dur);
								
								this.setProp(el, 'posn', paths[anim.path].getXYAtTime(pVal), true);
								onlyFunc = false;
							} else {
								for (var prop in anim.t) {
								
									// Lp through properties in animation object
									// calculate and set the tweened values
									
									if(("tempf" in anim)){
										
										if ((prop in anim.t)){
											
											if (!((prop in anim.tempf))) anim.tempf[prop] = Number(propToNm(el,prop));
											if (prop != "func"){
												
												if ((typeof(anim.t[prop]) == 'array')||(typeof(anim.t[prop]) == 'object')){
													
													var pVal = [];
													for (var pi=0; pi < anim.t[prop].length; pi++){
														
														var t = (cTmr - anim.start);
														var b = anim.f[prop][pi];
														var c = anim.t[prop][pi] - anim.f[prop][pi];
														var dur = anim.dur;
														pVal.push(tfn(t,b,c,dur));
													
													}
													
												} else {
													var t = (cTmr - anim.start);
													var b = anim.tempf[prop];
													var c = anim.t[prop] - anim.tempf[prop];
													var dur = anim.dur;
													var pVal = tfn(t,b,c,dur);
													
												}
											}
											if (this.setProp(el, prop, pVal, false))  hasfunc = true;
											else onlyFunc = false;
										}
									}
								  }
							}
							anim.state = 1;
							if (! onlyFunc) inprog++;
						}
					}
				}
				
				i++;
			}
			
			if ((waiting == 0)&&(inprog == 0)){
				// nothing more to animate
				this.adFinished();
			}
		}
		
		this.adFrmCnt++;
		
		var ths = this;
		if (! this.killAnim)  this.requestID = requestAnimationFrame(function(){rescopeFunc(ths,'doAnims')});
	}
	
	Animator.prototype.kill = function(){
		killAnim = true;
	}
		
	function propToNm(el, styleProp) {
		
		if (styleProp == "rot") return getElementRotation(el);
		
	  var value, defaultView = (el.ownerDocument || document).defaultView;
	  // W3C standard way:
	  if (defaultView && defaultView.getComputedStyle) {
		// sanitize property name to css notation
		// (hypen separated words eg. font-Size)
		styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
		return pToNm(defaultView.getComputedStyle(el, null).getPropertyValue(styleProp));
	  } else if (el.currentStyle) { // IE
		// sanitize property name to camelCase
		styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
		  return pToNm(letter.toUpperCase());
		});
		value = el.currentStyle[styleProp];
		// convert other units to pixels on IE
		if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
		  return (pToNm(function(value) {
			var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
			el.runtimeStyle.left = el.currentStyle.left;
			el.style.left = value || 0;
			value = el.style.pixelLeft + "px";
			el.style.left = oldLeft;
			el.runtimeStyle.left = oldRsLeft;
			return (value);
		  })(value));
		}
		return value;
	  }
	}
	
	
	function getElementRotation(el){
		var st = window.getComputedStyle(el, null);
		var tr = st.getPropertyValue("-webkit-transform") ||
				 st.getPropertyValue("-moz-transform") ||
				 st.getPropertyValue("-ms-transform") ||
				 st.getPropertyValue("-o-transform") ||
				 st.getPropertyValue("transform") ||
				 "FAIL";
				
		if (tr == "FAIL") return 0;
				
		var values = tr.split('(')[1].split(')')[0].split(',');
		var a = values[0];
		var b = values[1];
		var c = values[2];
		var d = values[3];
		
		var scale = Math.sqrt(a*a + b*b);
		
		var angle = ((Math.atan2(b, a) * (180/Math.PI)) | 0);
				
		return angle;
		
	}
	

	function pToNm(val){
		return (val.split('px')[0].split('%')[0]);
	}
	
	function showElem(elemID){
		var el = d(elemID);
  		el.style.visibility = "visible";
  		el.style.opacity = 1;
	}
	function hideElem(elemID){
		var el = d(elemID);
  		el.style.visibility = "hidden";
  		el.style.opacity = 0;
	}
	
	function setBgndImg (elementID, path, anmtr){
		
		// set the background image style of an element
		// once loaded, we size the element to match the background image
		var mask = null;
		var paths = path.split(':msk:');
		path = paths[0];
		
		if (paths.length > 0){
			mask = paths[1];
		}
		
		var el = d(elementID);
		
		var img = new Image();
		img.src = path;
		anmtr.imgsLoading++;
		
		el.imgref = img;
		el.maskref = null;
		el.imgLd = false;
		el.maskLd = false;
		
		if (mask != null){
				
			var imgMask = new Image();
			imgMask.src = mask;
			anmtr.imgsLoading++;
			el.maskref = imgMask;
			
			
			imgMask.addEventListener("load", function(){
				anmtr.imgsLoaded++;
				
				if (el != null){
				
					el.maskLd = true;
					if ('style' in el){
						
						if (el.imgLd) {
								anmtr.createMaskedImage(el);
						}
					} else {
						//console.log("UNDEFINED!!");
					}
				}
			}, false);
		}
			
			img.addEventListener("load", function(){
				anmtr.imgsLoaded++;
				if (el != null){
					el.imgLd = true;
					
					console.log(img);
					console.log(this);
					
					if (path.indexOf('.svg')){
						
			//					var svgStr = '<svg preserveAspectRatio="none" viewBox="0 0 '+img.width+' '+img.height+
								var svgStr = '<svg preserveAspectRatio="none" '+
								'" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">'+
								'<image preserveAspectRatio="none" xlink:href="'+path+'">'+
								'</svg>';
						
			//					var svgStr = '<svg preserveAspectRatio="none" viewBox="0 0 '+img.width+' '+img.height+
			//					'" height="100%" width="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">'+
			//					'<image height="100%" width="100%" preserveAspectRatio="none" xlink:href="'+path+'">'+
			//					'</svg>';
								
						el.innerHTML = svgStr;
					}
					if ('style' in el){
						
						if (el.maskref == null){
							el.style.backgroundImage = "url('"+path+"')";
							el.style.width = img.width + "px";
							el.style.height = img.height +"px";
							el.style.backgroundSize =  "100% 100%";
						
						} else if (el.maskLd){
								anmtr.createMaskedImage(el, elementID);
						}
					} else {
						//console.log("UNDEFINED!!");
	
					}
				}
			}, false);
	}
	
	
	Animator.prototype.createMaskedImage = function(el, elementID){
		//console.log('createMaskedImage');
		//console.log(el);

		el.style.width = el.imgref.width + "px";
		el.style.height = el.imgref.height +"px";

		var svgStr = '<svg preserveAspectRatio="none" viewBox="0 0 '+el.imgref.width+' '+el.imgref.height+'" height="100%" width="100%" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">'+
								'<mask id="mask'+elementID+'">'+
								'<image height="100%" width="100%" xlink:href="'+el.maskref.src+'" preserveAspectRatio="none">'+
								'</mask>'+
								'<image mask="url(#mask'+elementID+')" height="100%" width="100%" preserveAspectRatio="none" xlink:href="'+el.imgref.src+'">'+
							'</svg>';
							
							/*
							
		var svgStr = '<svg height="'+el.imgref.height+'" width="'+el.imgref.width+'" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">'+
								'<mask id="mask1">'+
								'<image height="'+el.imgref.height+'" width="'+el.imgref.width+'" xlink:href="'+el.maskref.src+'">'+
								'</mask>'+
								'<image mask="url(#mask1)" height="'+el.imgref.height+'" width="'+el.imgref.width+'" xlink:href="'+el.imgref.src+'">'+
							'</svg>';
							*/
		
		el.innerHTML = svgStr;
	/*
	<div id="img_1" style="display:block; position:absolute; top:0; left:0; width:300px; height:250px; z-index:99999;"><svg height="250" width="300" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
<mask id="mask1">
<image height="250" width="300" xlink:href="images/mask2.jpg">
</mask>
<image mask="url(#mask1)" height="250" width="300" xlink:href="images/bgnd.jpg">
</svg></div>
	
	*/
	
	}
	
	Animator.prototype.checkImgLoad = function(){
		if (this.imgsLoaded >= this.imgsLoading){
			clearInterval(this.imgLoadTimer);
			this.startAn();
		}
	}
	
	function AddAChild (newID) {
		
		// create and append a new div element to the 'ad' container
	
		var newel = document.createElement ("div");
		newel.innerHTML = "";
		newel.id = newID;

		var container = d ("ad");
		container.appendChild (newel);
	}
	
	var globalStart = Date.now();
	
	Animator.prototype.startAdDisplay = function(){
		
		//console.log("startAdDisplay");
		//console.log(this);
		
		
		this.stTm = -1;//0;		// animation start time
		this.killAnim = false;
		var cAnim = this.cAnim;
		var aList = this.aList;
		
		var elems = aList[cAnim].elems;
		var anims = aList[cAnim].anims;
		
		if (aList[cAnim].anims.length > 0) {
			for ( var a in aList[cAnim].anims){
			 aList[cAnim].anims[a].tempf = {};
			}
			startAn();
			return false;	
		}
		
		/*
			Fires when ad is initialized.
			
			Here we pre-process the 'elems' data array from animation.js
			
			'elems' is an array of the dynamic elements and their various properties, tween information, image src values etc.
			it also supports Lping of animation blocks.
			
			This 'startAdDisplay' function is called after we have loaded the dynamic data in 'dco_advanced_block.js'
			we transform the relative time values in the 'elems' data to absolute values
			as we run through and evaluate the pauses, Lp sections and any Lp limiters and counters
			
			
			This function initiates preloading of any required images.
			
			The function can also pre-process element sizes ...
			currently, this supports 
			 - matching the width of an element to that of an existing element 
			 - matching the height of an element to that of an existing element 
			 - sizing the fontsize to fit a string within the width of it's container
			
			Lping data within the main animation Lp ...
			
			a numeric Lp could be defined (within animation.js) as follows
			( this would Lp the fading in and out of div with id 'tile' displaying the image 'tile.png' )
							
				{LP:"start", limit:3},
				{id:"tile", imgSrc:"images/tile.png", init:"hidden", a:{t:{opacity:1},f:{opacity:0},dur:1200, delay:200, tfn:"eIOExp"}},
				{id:"tile", a:{t:{opacity:0},f:{opacity:1},dur:1200, delay:1500, tfn:"eIOExp"}},
				{pause:4000},
				{LP:"end"},

			
			a Lp with a dynamic content limiter could be defined as follows.
			( this would continue to slide text content across the screen while an element of id 'feat##a' existed and had a non-null innerHTML value -- where ## is the Lp counter)
			
				{LP:"start", cntr:"_li_", limit:"feat_li_a"},
				{id:"feat_li_a", init:"hidden", a:{t:{left:-300},f:{opacity:1,left:300},dur:2500, delay:50, tfn:"eIOExp"}},
				{pause:3000},
				{LP:"end"},
		*/
		
		var inLP = false;	// currently in Lp (boolean)
		var endLP = false;	// 
		var LPstart = 0;
		var li = 0;
		var limiter = '';
		var cntr = '';
		var fp = 0;//Date.now()- globalStart;//0;
		var maxAnimDur = 0;
				
		this.imgsLoaded = 0;
		this.imgsLoading = 0;
		for(var i = 0; i< elems.length; i++){
			
			var el = elems[i];
			if (inLP){
				
				var lastLp = false;
				if (Number(limiter) == limiter){
					
					if (li+1 >= limiter) lastLp = true;
					
				} else {
					
					var limitEval = d(limiter.split(cntr).join(String(li+1))).innerHTML;
					
					if((limitEval == "")||(limitEval == null)) lastLp = true;
					else lastLp = false;
					
				}	
			}
			
			endLP = false;
		
			var depEval = true;
			if (('dep' in el)){
				depEval = eval(el.dep);
			}
			
			if ((depEval)){
					
				if(("LP" in el)){
					if (el.LP == "start"){
						
						// this is the start of a Lp
						
						if (("cntr" in el))  cntr = el.cntr;
						else cntr = '-no-token-';
						limiter = el.limit;
						li = 0;
						LPstart = i;
						inLP = true;
					} else if (el.LP == "end"){
						endLP = true;
					}
			
				} else if(("fp" in el)){
					fp = el.a.fp;
				} else if(("pause" in el)){
					
					// this is a pause defined in milliseconds
					
					fp += el.pause;
				}  else if(("pause2" in el)){
					
					// this is a pause defined in milliseconds
					
					fp += (el.pause2 + maxAnimDur);
					maxAnimDur = 0;
				} 
			
				var procID = '';
				if (("id" in el)) {
					
					procID = el.id;
					
					if (inLP){
						procID = el.id.split(cntr).join(String(li));
					} 
					
					this.createdDivs[procID] = true;
						
					if ((typeof(d(procID)) == "null")||(d(procID) == null)){
						
						AddAChild(procID);
					}	
					if (("imgSrc" in el)) {
							// load and set the background image of this div from a static source
							setBgndImg(procID, el.imgSrc, this);
					} else if (("imgSrcVar" in el)) {
							// load and set the background image of this div from a variable source
							setBgndImg(procID, this[el.imgSrcVar], this);
					}
					
					if (("autosize" in el)) {
						
				 // - sizing the fontsize to fit the content string to the width of it's container
				 
						var el = d(procID);
							
						if (el != null){
							
							var divWid = el.offsetWidth;
							var divHig = el.offsetHeight;
							
							el.style.width = "auto";
							
							var fSize = 200;
							el.style.fontSize = fSize +'px';
							while (el.offsetWidth > divWid){
								
								el.style.fontSize = fSize +'px';
								fSize --;
							}
						}
					}
					
					if (("matchwidth" in el)) {
						
						// match the width of this element to that specified by the 'matchwidth' property
						
						var el = d(procID);
						var eRef = d(el.matchwidth);
							
						if ((el != null)&&(eRef != null)){
							
							el.style.width = eRef.offsetWidth + "px";
						}
					}
					if (("matchheight" in el)) {
						
						// match the height of this element to that specified by the 'matchheight' property
						
						var el = d(procID);
						var eRef = d(el.matchheight);
							
						if ((el != null)&&(eRef != null)){
							
							el.style.height = eRef.offsetHeight + "px";
						}
					}
					
					if (("init" in el)) {
						// initially hide the element  
							if (el.init == "hidden") hideElem(procID);
					}
				} 
				
				if (("a" in el)) {
					
					// this is the animation definition
					
					if (!("delay" in el.a)){ el.a.delay = 0; }
					if (!("dur" in el.a)){ el.a.dur = 0; }
					el.a.start = fp + el.a.delay;
					maxAnimDur = Math.max(maxAnimDur, (el.a.delay + el.a.dur));
					if (inLP){
						// 
						// We are currently in a Lp and we need to clone this!!
						// 
						var nxtA = {};
						nxtA.elem = el.id.split(cntr).join(String(li));
						nxtA.delay = el.a.delay;
						nxtA.dur = el.a.dur;
						nxtA.f = el.a.f;
						nxtA.t = el.a.t;
						nxtA.tfn = el.a.tfn;
						nxtA.start = el.a.start;
						nxtA.state = 0;
						
					} else {
						var nxtA = el.a;
						nxtA.elem = el.id;
					}
					// add it to the processed animation array
					if (("realtimedep" in el)){
						nxtA.realtimedep = el.realtimedep;
					} 
					anims.push(nxtA);
				}
				
				if (endLP){
					
					li++;
					var LpAgain = false;
					if (Number(limiter) == limiter){
						
						// limiter is a numeric Lp count
						if (li < limiter) LpAgain = true;
						
					} else {
						
						// limiter is a string that requires evaluation of html content after replacing the counter token (cntr) with the current Lp value;
						var limitEval = d(limiter.split(cntr).join(String(li))).innerHTML;
						
						if((limitEval == "")||(limitEval == null)) LpAgain = false;
						else LpAgain = true;
					}
					
					if (! LpAgain){
						
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
		
		var ths = this;
		this.imgLoadTimer = setInterval(function(){rescopeFunc(ths,'checkImgLoad')},100);
	}

	Animator.prototype.clearAnimTimers = function(){
		// shut it down when we've finished all animation
		clearInterval(this.animTimer);
	}

	Animator.prototype.adFinished = function(){
		// shut it down when we've finished all animation
		//clearAnimTimers();
		
		if (typeof(this.adLpReq) == 'undefined') this.adLpReq = 1;
		
		this.adLps ++;
		if ((this.adLps+1) == this.adLpReq) this.lastAdLp = true;
		
		if (this.adLps < this.adLpReq){
			
			this.stTm = -1;
			
			//startAn();
		}
	}
	
	// here
	Animator.prototype.initAnimator = function(){
		if (typeof (this.aList) == 'undefined'){
			this.aList = [{anims:[], elems:elems}]
		}
	}
		
	Animator.prototype.startAn = function(){
		if (this.requestID != null) {
			cancelAnimationFrame(this.requestID);
      		this.requestID = null;
		}
		var ths = this;
		 this.requestID = requestAnimationFrame(function(){rescopeFunc(ths,'doAnims')});
	}
	
	rescopeFunc = function (scp, fn){
		scp[fn]();
	}
	
	Animator.prototype.changeAnimation = function(animid){
		this.cAnim = animid;
		if (typeof(this.aList[animid]) == 'undefined'){
			//console.log('WARNING! : setting an empty animation index');
			 this.aList[animid] = {anims:[], elems:[]};
		}
		this.startAdDisplay();
		this.stTm = -1;
	}
	
/*

function getPropVal(el, prop){
	if (el.style.getPropertyValue) {
		return (el.style.getPropertyValue (prop));
	} else {
		return el.style.getAttribute (prop));
	}
}

*/

function svgPath(svgStr){
	
		var svgA = svgStr.split("M").join("").split(" ").join("").split("c").join(",c,").split("C").join(",C,").split("s").join(",s,").split("S").join(",S,").split("-").join(",-").split(",,").join(",").split(",");
		
		while (svgA[0] == '') svgA.shift();
		
		var i = 0;
		var npd = [];
		var relCoords;
		var datatype;
		var relPt = {x:0,y:0};
		npd.push({x: Number(svgA[0]), y: Number(svgA[1])});
		relPt = {x:npd[0].x, y:npd[0].y};
		var delta = {};
		i+=2;
		while( i< svgA.length ){
			
			if (svgA[i] == "c") {
				// relative co-ords
				relCoords = true;
				datatype = "c";
				relPt.x = npd[npd.length -1].x;
				relPt.y = npd[npd.length -1].y;
				i++;
			} else if (svgA[i] == "C") {
				// absolute co-ords
				relCoords = false;
				datatype = "c";
				i++;
			} else if (svgA[i] == "s") {
				// relative co-ords
				relCoords = true;
				datatype = "s";
				relPt.x = npd[npd.length -1].x;
				relPt.y = npd[npd.length -1].y;
				i++;
			} else if (svgA[i] == "S") {
				// absolute co-ords
				relCoords = false;
				datatype = "s";
				i++;
			} else {
				if (datatype == 'c'){
					if (relCoords){
						npd.push({x: relPt.x+Number(svgA[i+0]), y: relPt.y+Number(svgA[i+1])},{x: relPt.x+Number(svgA[i+2]), y: relPt.y+Number(svgA[i+3])},{x: relPt.x+Number(svgA[i+4]), y: relPt.y+Number(svgA[i+5])});
					} else {
						npd.push({x: Number(svgA[i+0]), y: Number(svgA[i+1])},{x: Number(svgA[i+2]), y: Number(svgA[i+3])},{x: Number(svgA[i+4]), y: Number(svgA[i+5])});
					}
					i+=6;
					delta.x = (npd[npd.length -1].x - npd[npd.length -2].x);
					delta.y = (npd[npd.length -1].y - npd[npd.length -2].y);
				} else if (datatype == 's'){
					
					if (relCoords){
						npd.push({x: relPt.x+Number(svgA[i+0]), y: relPt.y+Number(svgA[i+1])},{x: relPt.x+Number(svgA[i+0]), y: relPt.y+Number(svgA[i+1])},{x: relPt.x+Number(svgA[i+2]), y: relPt.y+Number(svgA[i+3])});
					} else {
						npd.push({x: Number(svgA[i+0]), y: Number(svgA[i+1])},{x: Number(svgA[i+0]), y: Number(svgA[i+1])},{x: Number(svgA[i+2]), y: Number(svgA[i+3])});
					}
					i+=4;
					delta.x = (npd[npd.length -1].x - npd[npd.length -2].x);
					delta.y = (npd[npd.length -1].y - npd[npd.length -2].y);
				} else {
					i++;
				}
			}
		}
		
	return npd;
}


function AnimPath(points) {
	
	this.pts = points;
	//fkn ie
	var plen = this.pts.length;
	while (typeof(this.pts[plen -1]) == 'undefined') plen--;
	
	for (var i = 0; i < plen; i++) {
		 if (!((i)%3)) this.pts[i].time = i*(1/plen); 
	}
	this.pts[0].time = 0;
	this.pts[plen -1].time = 1;
}



AnimPath.prototype.getXYAtTime = function (t) {
	var pts = this.pts;
		
	if (t <= 0) return pts[0];
	if (t >= 1) return pts[pts.length - 1];
		
	var start = 0, stop = pts.length - 1;
	for (var i = 1; i < pts.length; i++) {
		var p = pts[i];
		if (t < p.time) {
			stop = i;
			break;
		}
		if (p.time != undefined) start = i;
	}
	
	var notesTop = 80;
	var n = stop - start;
	var t0 = pts[start].time, t1 = pts[stop].time;
	
	t = (t - t0) / (t1 - t0);
	
	var tInv = 1 - t;

	var x = 0, y = 0, z = 0, state = false;
	for (var i = 0; i <= n; i++) {
		var p = pts[start + i];
		var c = nCr(n, i) * Math.pow(1 - t, n - i) * Math.pow(t, i);
		x += c * p.x;
		y += c * p.y;
		state = true;
	}
	return {x: x, y: y += notesTop,state:state};
}

function nCr (n, k) {
	var z = 1;
	for (var i = 1; i <= k; i++) z *= (n + 1 - i) / i;
	return z;
}