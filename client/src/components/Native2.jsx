


import React, { useEffect } from 'react';

const Native2 = () => {
    useEffect(() => {
        // Create a script element for loading the ad asynchronously
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.dataset.cfasync = "false";
        adScript.src = "//traversefaultlessashamed.com/2f4189674ca2e0321470a15d96fb11b0/invoke.js";
    
        // Append the script to the document body
        document.body.appendChild(adScript);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(adScript);
        };
    }, []);
    
    return <div id="container-2f4189674ca2e0321470a15d96fb11b0"></div>;
};

export default Native2;

{/* <script async="async" data-cfasync="false" src="//traversefaultlessashamed.com/2f4189674ca2e0321470a15d96fb11b0/invoke.js"></script>
<div id="container-2f4189674ca2e0321470a15d96fb11b0"></div> */}
