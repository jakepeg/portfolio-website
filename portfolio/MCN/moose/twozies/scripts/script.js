/*******************
VARIABLES
*******************/
var expansionDiv;
var closeButton;
var clickthroughButton;
var sdkData;
var instagramButton;
var youtubeButton;
var facebookButton;



/*******************
INITIALIZATION
*******************/
function checkIfAdKitReady(event)
{
	adkit.onReady(initializeCreative);
}

function initializeCreative()
{
	initializeGlobalVariables();
	initializeCloseButton();
	addEventListeners();
}

function initializeGlobalVariables()
{
	expansionDiv = document.getElementById("expansion");
	closeButton = document.getElementById("closeButton");
	clickthroughButton = document.getElementById("cta");
	facebookButton = document.getElementById("facebook");
	instagramButton = document.getElementById("instagram");
	youtubeButton = document.getElementById("youtube");
	
	sdkData = EB.getSDKData();
}

function initializeCloseButton()
{
	var enableSDKDefaultCloseButton = EB._adConfig && EB._adConfig.hasOwnProperty("mdEnableSDKDefaultCloseButton") && EB._adConfig.mdEnableSDKDefaultCloseButton;
	if (sdkData !== null && sdkData !== undefined)
	{
		if (sdkData.SDKType === "MRAID" && !enableSDKDefaultCloseButton)
		{
			closeButton.style.display = "block";
		}
	}
	else
	{
		closeButton.style.display = "block";
	}
}

function addEventListeners()
{
	closeButton.addEventListener("click", handleCloseButtonClick);
	clickthroughButton.addEventListener("click", handleClickthroughButtonClick);
	facebookButton.addEventListener("click", facebookButtonClick);
	youtubeButton.addEventListener("click", youtubeButtonClick);
	instagramButton.addEventListener("click", instagramButtonClick);
}

/*******************
EVENT HANDLERS
*******************/
function handleCloseButtonClick()
{
	EB.collapse({panelName: "expand"});
}


function handleClickthroughButtonClick()
{
	EB.clickthrough();
}

window.addEventListener("load", checkIfAdKitReady);

function facebookButtonClick()
{
	EB.userActionCounter("facebook");
}

function youtubeButtonClick()
{
	EB.userActionCounter("youtube");
}

function instagramButtonClick()
{
	EB.userActionCounter("instagram");
}

