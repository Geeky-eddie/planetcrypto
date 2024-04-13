import React, { useEffect, useRef } from 'react';

const Adsfooter = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    const adOptions = {
      key: '88d7abbefa0444b67cc0e7064dff3a36',
      format: 'iframe',
      height: 50,
      width: 320,
      params: {}
    };

    // Check if the ad container exists and it does not have any child elements
    if (adContainerRef.current && !adContainerRef.current.firstChild) {
      const adScript = document.createElement('script');
      adScript.type = 'text/javascript';
      adScript.src = `//traversefaultlessashamed.com/${adOptions.key}/invoke.js`;

      const adConfigScript = document.createElement('script');
      adConfigScript.type = 'text/javascript';
      adConfigScript.innerHTML = `atOptions = ${JSON.stringify(adOptions)}`;

      adContainerRef.current.appendChild(adConfigScript);
      adContainerRef.current.appendChild(adScript);
    }
  }, []);

  return (
  <div className="flex justify-center mt-4">
            <div ref={adContainerRef} />
       </div>);
};

export default Adsfooter;



{/* <script type="text/javascript">
	atOptions = {
		'key' : '88d7abbefa0444b67cc0e7064dff3a36',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
</script>
<script type="text/javascript" src="//traversefaultlessashamed.com/88d7abbefa0444b67cc0e7064dff3a36/invoke.js"></script> */}