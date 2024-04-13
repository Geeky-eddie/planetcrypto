import React, { useEffect } from 'react';

const Nativead = () => {
    useEffect(() => {
        // Create a script element for loading the ad asynchronously
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.dataset.cfasync = "false";
        adScript.src = "//traversefaultlessashamed.com/0f6a80884885b8551f81893a2be80386/invoke.js";
    
        // Append the script to the document body
        document.body.appendChild(adScript);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(adScript);
        };
    }, []);
    
    return <div id="container-0f6a80884885b8551f81893a2be80386"></div>;
};

export default Nativead;





{/* <script async="async" data-cfasync="false" src="//traversefaultlessashamed.com/0f6a80884885b8551f81893a2be80386/invoke.js"></script>
<div id="container-0f6a80884885b8551f81893a2be80386"></div> */}