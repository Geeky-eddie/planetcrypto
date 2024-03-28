import React, { useEffect, useRef } from 'react';

const CustomScript = ({ src }) => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.async = true;

      scriptRef.current = script;
      document.body.appendChild(script);
    }

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, [src]);

  return <></>; // Empty fragment since we don't need to render anything
};

export default CustomScript;
