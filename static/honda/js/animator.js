function hasPX(e){return"top"==e||"right"==e||"bottom"==e||"left"==e||"width"==e||"height"==e?!0:!1}function doAnims(){var e=0;if(isNaN(startTime)||0>=startTime)for(startTime=Date.now();e<anims.length;)anims[e].state=0,e++;var t=Date.now()-startTime;e=0;for(var i=0,n=0;e<anims.length;){var r=anims[e],a=document.getElementById(r.elem);if(0==r.state)if(r.start>t)i++;else{for(var s in r.f)r.f.hasOwnProperty(s)&&("rot"==s?(a.style.transform="rotate("+r.f[s]+"deg)",a.style["-webkit-transform"]="rotate("+r.f[s]+"deg)"):a.style[s]=hasPX(s)?r.f[s]+"px":r.f[s],"opacity"==s&&(a.style.visibility="visible"));r.state=1,n++}else if(1==r.state)if(t>=r.start+r.dur){for(var s in r.f)r.f.hasOwnProperty(s)&&r.t.hasOwnProperty(s)&&("rot"==s?(a.style.transform="rotate("+r.t[s]+"deg)",a.style["-webkit-transform"]="rotate("+r.t[s]+"deg)"):a.style[s]=hasPX(s)?r.t[s]+"px":r.t[s]);r.state=2}else{tDelta=(t-r.start)/r.dur;var l=Ease.linear;r.hasOwnProperty("tfn")&&(l=Ease[r.tfn]);for(var s in r.f)if(r.f.hasOwnProperty(s)&&r.t.hasOwnProperty(s)){var o=t-r.start,m=r.f[s],d=r.t[s]-r.f[s],f=r.dur,c=l(o,m,d,f);"rot"==s?(a.style.transform="rotate("+c+"deg)",a.style["-webkit-transform"]="rotate("+c+"deg)"):a.style[s]=hasPX(s)?c+"px":c}r.state=1,n++}e++}0==i&&0==n&&clearInterval(animTimer)}function showElem(e){var t=document.getElementById(e);t.style.visibility="visible"}function hideElem(e){var t=document.getElementById(e);t.style.visibility="hidden"}function checkImgLoad(){imgsLoaded>=imgsLoading&&(clearInterval(imgLoadTimer),startAnimation())}function AddAChild(e){var t=document.createElement("div");t.innerHTML="",t.id=e;var i=document.getElementById("ad");i.appendChild(t)}function startAdDisplay(){startTime=0;var inLP=!1,endLP=!1,LPstart=0,li=0,limiter="",cntr="";imgsLoaded=0,imgsLoading=0;for(var i=0;i<elems.length;i++){if(inLP){var lastLoop=!1;if(Number(limiter)==limiter)li+1>=limiter&&(lastLoop=!0);else{var limitEval=document.getElementById(limiter.split(cntr).join(String(li+1))).innerHTML;lastLoop=""==limitEval||null==limitEval?!0:!1}}endLP=!1;var depEval=!0;if(elems[i].hasOwnProperty("dep")){console.log("dep:"+elems[i].dep);for(var depArr=elems[i].dep.split("|"),di=0;di<depArr.length;di++)console.log(depArr[di]+" : "+eval(depArr[di])),eval(depArr[di])||(depEval=!1);depEval=eval(elems[i].dep),console.log("depEval:"+depEval)}if(depEval){elems[i].hasOwnProperty("LP")?"start"==elems[i].LP?(cntr=elems[i].hasOwnProperty("cntr")?elems[i].cntr:"-no-token-",limiter=elems[i].limit,li=0,LPstart=i,inLP=!0):"end"==elems[i].LP&&(endLP=!0):elems[i].hasOwnProperty("fp")?fp=elems[i].a.fp:elems[i].hasOwnProperty("pause")&&(fp+=elems[i].pause);var procID="";if(elems[i].hasOwnProperty("id")){if(procID=elems[i].id,inLP&&(procID=elems[i].id.split(cntr).join(String(li))),createdDivs[procID]=!0,("null"==typeof document.getElementById(procID)||null==document.getElementById(procID))&&AddAChild(procID),elems[i].hasOwnProperty("imgSrc")?(setBgndImg(procID,elems[i].imgSrc),imgsLoading++):elems[i].hasOwnProperty("imgSrcVar")&&(setBgndImg(procID,this[elems[i].imgSrcVar]),imgsLoading++),elems[i].hasOwnProperty("autosize")){var elem=document.getElementById(procID);if(null!=elem){var divWid=elem.offsetWidth,divHig=elem.offsetHeight;elem.style.width="auto";var fSize=200;for(elem.style.fontSize=fSize+"px";elem.offsetWidth>divWid;)elem.style.fontSize=fSize+"px",fSize--}}if(elems[i].hasOwnProperty("matchwidth")){var elem=document.getElementById(procID),elemRef=document.getElementById(elems[i].matchwidth);null!=elem&&null!=elemRef&&(elem.style.width=elemRef.offsetWidth+"px")}if(elems[i].hasOwnProperty("matchheight")){var elem=document.getElementById(procID),elemRef=document.getElementById(elems[i].matchheight);null!=elem&&null!=elemRef&&(elem.style.height=elemRef.offsetHeight+"px")}elems[i].hasOwnProperty("init")&&"hidden"==elems[i].init&&hideElem(procID)}if(elems[i].hasOwnProperty("a")){if(elems[i].a.start=elems[i].a.hasOwnProperty("delay")?fp+elems[i].a.delay:fp,inLP){var nxtA={};nxtA.elem=elems[i].id.split(cntr).join(String(li)),nxtA.delay=elems[i].a.delay,nxtA.dur=elems[i].a.dur,nxtA.f=elems[i].a.f,nxtA.t=elems[i].a.t,nxtA.tfn=elems[i].a.tfn,nxtA.start=elems[i].a.start,nxtA.state=0}else{var nxtA=elems[i].a;nxtA.elem=elems[i].id}anims.push(nxtA)}if(endLP){li++;var loopAgain=!1;if(Number(limiter)==limiter)limiter>li&&(loopAgain=!0);else{var limitEval=document.getElementById(limiter.split(cntr).join(String(li))).innerHTML;loopAgain=""==limitEval||null==limitEval?!1:!0}loopAgain?i=LPstart:(inLP=!1,endLP=!1,li=0)}}}imgLoadTimer=setInterval(function(){checkImgLoad()},100)}function clearAnimTimers(){clearInterval(animTimer)}function startAnimation(){animTimer=setInterval(function(){doAnims()},75)}function $(e){var t=document.getElementById(e);return t.show=function(){var e=this;e.style.visibility="visible"},t.hide=function(){var e=this;e.style.visibility="hidden"},t}var adDiv,startTime,imgLoadTimer,imgsLoaded,imgsLoading,anims=[],createdDivs={},Ease={};Ease.linear=function(e,t,i,n){return 0==e?t:e>=n?t+i:i*e/n+t},Ease.eIQ=function(e,t,i,n){return i*(e/=n)*e+t},Ease.eOQ=function(e,t,i,n){return-i*(e/=n)*(e-2)+t},Ease.eIOQ=function(e,t,i,n){return(e/=n/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t},Ease.eIC=function(e,t,i,n){return i*(e/=n)*e*e+t},Ease.eOC=function(e,t,i,n){return i*((e=e/n-1)*e*e+1)+t},Ease.eIOC=function(e,t,i,n){return(e/=n/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t},Ease.eIQt=function(e,t,i,n){return i*(e/=n)*e*e*e+t},Ease.eOQt=function(e,t,i,n){return-i*((e=e/n-1)*e*e*e-1)+t},Ease.eIOQt=function(e,t,i,n){return(e/=n/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t},Ease.eIQnt=function(e,t,i,n){return i*(e/=n)*e*e*e*e+t},Ease.eOQnt=function(e,t,i,n){return i*((e=e/n-1)*e*e*e*e+1)+t},Ease.eIOQnt=function(e,t,i,n){return(e/=n/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t},Ease.eISin=function(e,t,i,n){return-i*Math.cos(e/n*(Math.PI/2))+i+t},Ease.eOSin=function(e,t,i,n){return i*Math.sin(e/n*(Math.PI/2))+t},Ease.eIOSin=function(e,t,i,n){return-i/2*(Math.cos(Math.PI*e/n)-1)+t},Ease.eIExp=function(e,t,i,n){return 0==e?t:i*Math.pow(2,10*(e/n-1))+t},Ease.eOExp=function(e,t,i,n){return e==n?t+i:i*(-Math.pow(2,-10*e/n)+1)+t},Ease.eIOExp=function(e,t,i,n){return 0==e?t:e==n?t+i:(e/=n/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(-Math.pow(2,-10*--e)+2)+t},Ease.eICirc=function(e,t,i,n){return-i*(Math.sqrt(1-(e/=n)*e)-1)+t},Ease.eOCirc=function(e,t,i,n){return i*Math.sqrt(1-(e=e/n-1)*e)+t},Ease.eIOCirc=function(e,t,i,n){return(e/=n/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t},Ease.eIElastic=function(e,t,i,n){var r=1.70158,a=0,s=i;if(0==e)return t;if(1==(e/=n))return t+i;if(a||(a=.3*n),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*n-r)*Math.PI/a))+t},Ease.eOElastic=function(e,t,i,n){var r=1.70158,a=0,s=i;if(0==e)return t;if(1==(e/=n))return t+i;if(a||(a=.3*n),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*n-r)*Math.PI/a)+i+t},Ease.eIOElastic=function(e,t,i,n){var r=1.70158,a=0,s=i;if(0==e)return t;if(2==(e/=n/2))return t+i;if(a||(a=.3*n*1.5),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*n-r)*Math.PI/a)+t:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*n-r)*Math.PI/a)*.5+i+t},Ease.eIBack=function(e,t,i,n,r){return void 0==r&&(r=1.70158),i*(e/=n)*e*((r+1)*e-r)+t},Ease.eOBack=function(e,t,i,n,r){return void 0==r&&(r=1.70158),i*((e=e/n-1)*e*((r+1)*e+r)+1)+t},Ease.eIOBack=function(e,t,i,n,r){return void 0==r&&(r=1.70158),(e/=n/2)<1?i/2*e*e*(((r*=1.525)+1)*e-r)+t:i/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+t},Ease.eIBnc=function(e,t,i,n){return i-Ease.eOBnc(n-e,0,i,n)+t},Ease.eOBnc1=function(e,t,i,n){return(e/=n)<1/2.75?7.5625*i*e*e+t:1.8/2.75>e?i*(1.0625*(e-=1.5/2.75)*e+.98)+t:t+i},Ease.eOBnc=function(e,t,i,n){return(e/=n)<1/2.75?7.5625*i*e*e+t:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+t:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+t:i*(7.5625*(e-=2.625/2.75)*e+.984375)+t},Ease.eIOBnc=function(e,t,i,n){return n/2>e?.5*Ease.eIBnc(2*e,0,i,n)+t:.5*Ease.eOBnc(2*e-n,0,i,n)+.5*i+t},setBgndImg=function(e,t){var i=new Image;i.src=t,i.addEventListener("load",function(){var n=document.getElementById(e);imgsLoaded++,null!=n&&"style"in n&&(n.style.backgroundImage="url('"+t+"')",n.style.width=i.width+"px",n.style.height=i.height+"px")},!1)},loadThisImage=function(e,t){var i=new Image;i.src=t,i.addEventListener("load",function(){document.getElementById(e).src=this.src},!1)};var fp=0;