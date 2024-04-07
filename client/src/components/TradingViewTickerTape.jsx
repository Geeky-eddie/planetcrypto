import React, { useEffect, useRef } from 'react';

function TradingViewTickerTape() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500 Index"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100 Cash CFD"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR to USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Bitcoin"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Ethereum"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "dark",
        "locale": "en"
      }`;

    container.current.innerHTML = ""; 
    container.current.appendChild(script);

   
    return () => {
      container.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="tradingview-widget-container fixed top-0 left-0 z-30 w-full bg-black contents">
      <div className="tradingview-widget-container__widget" ref={container}></div>
      
    </div>
  );
}

export default TradingViewTickerTape;
