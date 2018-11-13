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
		var adfailure = false;
		if (adfailure){
			EB.showDefaultImage(); 
		} else {
			self.init(); 
		}
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
    
    updateDCO: function() {
    	
		this.d('CTA_button_label').innerHTML = adkit.getSVData("CTA_button_label");
		this.d('date_Str').innerHTML = adkit.getSVData("Date_Str");
		this.d('disc_div').innerHTML = adkit.getSVData("disclaimer");
		
		if (adkit.getSVData("disclaimer") != "") hasDisc = true;
		
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
