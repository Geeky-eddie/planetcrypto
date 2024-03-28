import React, { useEffect } from 'react';

const Nativead = () => {
    useEffect(() => {
        // Create a script element for loading the ad asynchronously
        const adScript = document.createElement('script');
        adScript.async = true;
        adScript.dataset.cfasync = "false";
        adScript.src = "//traversefaultlessashamed.com/c864d935fcc5586bd99357dd813f1570/invoke.js";
    
        // Append the script to the document body
        document.body.appendChild(adScript);
    
        // Clean up function to remove the script when the component unmounts
        return () => {
          document.body.removeChild(adScript);
        };
    }, []);
    
    return <div id="container-c864d935fcc5586bd99357dd813f1570"></div>;
};

export default Nativead;





{/* <script async="async" data-cfasync="false" src="//traversefaultlessashamed.com/c864d935fcc5586bd99357dd813f1570/invoke.js"></script>
<div id="container-c864d935fcc5586bd99357dd813f1570"></div> */}