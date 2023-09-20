// Setup JS Method - Initializes Callbacks for MATLAB UIHTML Data
function setup(htmlComponent){
    // Add Eventlistener for Data Property of HTMLComponent
    htmlComponent.addEventListener("DataChanged",function(event){
        /// Listener Function for When Data Changes
        // Details: The Data structure carries the necessary information about the web url. We will store 
        //          the accessed top-level web url when we obtain it to send back to MATLAB.

        // Parse incoming json-encoded struct
        htmlData = JSON.parse(htmlComponent.Data);

        // Append String to Data
        htmlData = htmlData + "HTML Successful!";

        // Get Top URL
        topURL = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;

        // Append String to Data
        htmlData = htmlData + " Your URL is: " + topURL;

        // Return
        htmlComponent.Data = JSON.stringify(htmlData);

    }) // addEventListener

} // function (setup)