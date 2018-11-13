var adDiv;


adkit.onReady(startAd);

function startAd() {
    adDiv = document.getElementById("ad");
    addEventListeners();
	updateDCO();
}

function addEventListeners() {
    document.getElementById("clickthrough").addEventListener("click", clickthrough);
	document.getElementById("disclaimer-button").addEventListener('click', disclaimerOnOff);
}

function clickthrough() {
    EB.clickthrough();
}

// window.addEventListener("load", initEB);  // is this needed with adkit?

function showBlack(){
	document.getElementById("flipper").className = "showBlack";
}

function showWhite(){
	document.getElementById("flipper").className = "showWhite";
}

function updateDCO() {
	document.getElementById("disclaimer_text").innerHTML = adkit.getSVData("disclaimer_text");
}

var disclaimer_state = "off";
	function disclaimerOnOff(){
		 var disc = document.getElementById("disclaimer");
		 if (disclaimer_state == "off") {
			 disc.style.visibility = "visible";
			  document.getElementById("disclaimer-button").style.backgroundImage = "url('images/disclaimer-button-close.png')"; 
			 disclaimer_state = "on";
		} else {
		 	disc.style.visibility = "hidden";
			 document.getElementById("disclaimer-button").style.backgroundImage = "url('images/disclaimer-button.png')"; 
		 	disclaimer_state = "off";
		}
}
