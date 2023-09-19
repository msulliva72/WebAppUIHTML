// Setup JS Method - Initializes Callbacks for MATLAB UIHTML Data
function setup(htmlComponent){

    // Add Eventlistener for Data Property of HTMLComponent
    htmlComponent.addEventListener("DataChanged",function(event){
        /// Listener Function for When Data Changes
        // Details: The Data structure carries the necessary information about the DualSlider, such as
        //          the slider thumb values and the slider range limits. When any of the data values change,
        //          we want to ensure that the values passed in from MATLAB are reflected correctly in the
        //          slider thumb appearance.

        // Parse incoming json-encoded struct
        htmlData = JSON.parse(htmlComponent.Data);

        // Append String to Data
        htmlData = htmlData + " there Michael!";

        // Get Top URL
        topURL = window.location.topURL;

        // Append String to Data
        htmlData = htmlData + " Your URL is: " + topURL;

        // Return
        htmlComponent.Data = JSON.stringify(htmlData);

    }) // addEventListener

} // function (setup)