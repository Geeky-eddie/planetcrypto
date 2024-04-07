import React, { useEffect, useRef } from 'react';

function TradingViewMarketQuotes() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "550",
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "CNY",
          "TRY",
          "SEK",
          "NOK",
          "DKK",
          "ZAR",
          "HKD",
          "SGD",
          "THB"
        ],
        "isTransparent": false,
       
        "locale": "en"
      }`;

    container.current.innerHTML = "";
    container.current.appendChild(script);

    
    return () => {
      container.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget w-full " ref={container}></div>
    </div>
  );
}

export default TradingViewMarketQuotes;
