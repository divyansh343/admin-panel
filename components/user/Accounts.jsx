import React from 'react'

const Accounts = () => {
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:3000/api/acc/accounts',
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWFmNzdiOWVmZGM1Nzg0ZmQ2YTA0NGYiLCJpYXQiOjE3MDU5OTgyNjUsImV4cCI6MTcwNjA4NDY2NX0.pu574mZj4giBfJm3gsPib4jaW8W6kDRr8eVLeZ040wo'
    }
  };

  axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      // console.log(error);
    });

  return (
    <div>Accounts</div>
  )
}

export default Accounts