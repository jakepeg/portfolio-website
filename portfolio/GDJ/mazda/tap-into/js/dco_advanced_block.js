// *************************************************************
//   This class is part of the  Sizmek HTML5 DCO Advanced Block 
//   ALL RIGHTS RESERVED TO © 2014 Sizmek, Inc.
// *************************************************************
// *************************************************************

dco_Advanced_Block = function () {
    // Establish Script Details
    this.script = { name: 'dco_advanced_block.js', version: '1' };
    // Establish Reference to d method
    this.d;
    // Establish Reference to this
    var self = this;
    // Call Init Method
    adkit.onReady( function () { 
		self.init(); 
	} );
};

dco_Advanced_Block.prototype = {
	// Function That Creates Element Var
    d: function (id) { return document.getElementById(id); },
    
	// Initialize DCO Block
    init: function () {
    	// Set Up Ad Tracking
		this.setUpAd();
		// Handle AdKit Data 
		this.updateDCO();  
    },
    
    startAd: function () {
	    // Set Up Ad Tracking
		this.setUpAd();
		// Handle AdKit Data 
		this.updateDCO();
		
    },
    
    updateDCO: function() {
    	
		// buid the car image path/filename from variables 
		if (adkit.getSVData("car_colour") != '')
			carimgpath = "images/" + adkit.getSVData("car_model") + "_" +adkit.getSVData("car_colour") +  ".jpg";
		else
			carimgpath = "images/" + adkit.getSVData("car_model") +   ".jpg";
		
		this.d('CTA_button_label').innerHTML = adkit.getSVData("CTA_button_label");
		this.d('red_model_text').innerHTML = adkit.getSVData("red_model_text");
		this.d('price_val').innerHTML = adkit.getSVData("price_val");
		this.d('disc_div').innerHTML = adkit.getSVData("disclaimer");
		
		if (adkit.getSVData("disclaimer") != "") hasDisc = true;
		if (adkit.getSVData("price_val") != "") hasPrice = true;
		if (adkit.getSVData("red_model_text") != "") hasRedText = true;
		
		var mdlStr = adkit.getSVData("model_text").split('|');
		this.d('model_text1').innerHTML = mdlStr[0];
		if (mdlStr.length > 1) this.d('model_text2').innerHTML = mdlStr[1];
		if (mdlStr.length > 2) this.d('model_text3').innerHTML = mdlStr[2];
		
		var feat_num = 1;
		featStrings = [];
		while ((adkit.getSVData("feature_text_" + feat_num) != "")&&(typeof(adkit.getSVData("feature_text_" + feat_num))!="undefined")){
		
			console.log( feat_num);
			console.log(adkit.getSVData("feature_text_" + feat_num));
			
			featStrings.push (adkit.getSVData("feature_text_" + feat_num).split("|"));
			
			this.d('feat'+(feat_num-1)+'a').innerHTML = adkit.getSVData("feature_text_" + feat_num).split("|")[0];
			if (adkit.getSVData("feature_text_" + feat_num).split("|").length > 1){
				this.d('feat'+(feat_num-1)+'b').innerHTML = adkit.getSVData("feature_text_" + feat_num).split("|")[1];
				if (adkit.getSVData("feature_text_" + feat_num).split("|").length > 2){
					this.d('feat'+(feat_num-1)+'c').innerHTML = adkit.getSVData("feature_text_" + feat_num).split("|")[2];
				}
			}
			
			feat_num++;	
		}
		
		startAdDisplay();
		
    },
    
    // Handle Ad Set Up
    setUpAd: function () {
    	// Establish Reference to script
    	var self = this;
    	// Add listener to Ad for Clickthrough
	    this.d("ad").addEventListener('click', function(e){ EB.clickthrough(); }, false);
	    this.d("btn_disc").addEventListener('mouseover', function(e){ disclaimerOn(); }, false);
	    this.d("btn_disc").addEventListener('mouseout', function(e){ disclaimerOff(); }, false);
    }
};

var new_DCO_Block = new dco_Advanced_Block ();

