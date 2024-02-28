import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ForexSessionApp = () => {
  const [forexData, setForexData] = useState(null);
  const apiKey = 'feb2e073ca57499494680f37b0228192'; // Replace with your actual API key

  useEffect(() => {
    const fetchForexData = async () => {
      try {
        const response = await axios.get(
          'https://api.twelvedata.com/time_series',
          {
            params: {
              symbol: 'EUR/USD',
              interval: '1h',
              apikey: apiKey,
            },
          }
        );

        // Process the response data here
        // console.log(response.data);

        setForexData(response.data);
      } catch (error) {
        console.error('Error fetching forex data:', error);
      }
    };

    fetchForexData();
  }, [apiKey]); // Include apiKey as a dependency to avoid the React Hooks warning

  const renderForexData = () => {
    if (!forexData) {
      return <p>Loading data...</p>;
    }

    return (
      <div>
        <h2>Forex Data</h2>
        <p>Symbol: {forexData.meta.symbol}</p>
        <p>Last Update: {forexData.meta.updated_at}</p>
        {/* Add more details based on the actual API response structure */}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>Forex Session Information</h1>
      {renderForexData()}
    </div>
  );
};

export default ForexSessionApp;
