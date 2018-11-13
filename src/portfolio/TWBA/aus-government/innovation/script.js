
function onLoadHandler(e){
	var floatCon = document.getElementById('banner');
	var closeBtn = document.getElementById('close_btn_dc');
    var bgExtBtn = document.getElementById('background_ext_dc');

	if (Enabler.isInitialized()) {
	    enablerInitHandler();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}

	function enablerInitHandler() {
    	Enabler.setFloatingPixelDimensions(320,250);

    	floatCon.style.display = 'block';

		var autoTimer = setInterval(autoClose, 5000);

		function autoClose() {
		  clearInterval(autoTimer);
		  Enabler.close();
		}

		function onCloseHandler(e){
			clearInterval(autoTimer);
			Enabler.reportManualClose();
			Enabler.close();
		}

		function onBgExitHandler(e){
			clearInterval(autoTimer);
			Enabler.exit('HTML5_Background_Clickthrough','http://innovation.gov.au');
			Enabler.close();
		}
        
		closeBtn.addEventListener('click', onCloseHandler, false);
        bgExtBtn.addEventListener('click', onBgExitHandler, false);
	}

}

window.addEventListener('load', onLoadHandler);