import React, { useEffect, useRef } from 'react';

const Adsfooter2 = () => {
  const adContainerRef = useRef(null);

  useEffect(() => {
    const adOptions = {
      key: 'a4921414f69658ae8e9c35fddc266266',
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

export default Adsfooter2;


{/* <script type="text/javascript">
	atOptions = {
		'key' : 'a4921414f69658ae8e9c35fddc266266',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="//traversefaultlessashamed.com/a4921414f69658ae8e9c35fddc266266/invoke.js"></scr' + 'ipt>');
</script> */}

