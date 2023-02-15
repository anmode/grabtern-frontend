const https = require('https');

const paytmParams = {};

paytmParams['MID'] = 'your-merchant-id';
paytmParams['WEBSITE'] = 'WEBSTAGING'; // Use "WEBSTAGING" for testing purposes
paytmParams['CHANNEL_ID'] = 'WEB';
paytmParams['INDUSTRY_TYPE_ID'] = 'Retail';
paytmParams['ORDER_ID'] = 'unique-order-id';
paytmParams['CUST_ID'] = 'customer-id';
paytmParams['TXN_AMOUNT'] = '10.00';
paytmParams['CALLBACK_URL'] = 'https://example.com/paytm-callback';

// Generate checksum hash using your merchant key
const paytmChecksum = generateChecksum(paytmParams, 'your-merchant-key');
paytmParams['CHECKSUMHASH'] = paytmChecksum;

// Create a HTTPS POST request to Paytm payment gateway
const options = {
  hostname: 'securegw-stage.paytm.in',
  port: 443,
  path: '/theia/api/v1/initiateTransaction?mid=' + paytmParams['MID'] + '&orderId=' + paytmParams['ORDER_ID'],
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const request = https.request(options, (response) => {
  let responseData = '';
  response.on('data', (chunk) => {
    responseData += chunk;
  });
  response.on('end', () => {
    // Parse the response JSON and redirect the user to the Paytm payment page
    const paytmResponse = JSON.parse(responseData);
    if (paytmResponse && paytmResponse.body && paytmResponse.body.resultInfo && paytmResponse.body.resultInfo.resultStatus === 'SUCCESS') {
      const paytmUrl = paytmResponse.body.txnToken;
      window.location.href = paytmUrl;
    } else {
      // Handle payment failure
    }
  });
});

request.on('error', (error) => {
  // Handle error
});

request.write(JSON.stringify(paytmParams));
request.end();

// Logic to generate checksum hash
function generateChecksum(params, merchantKey) {
    const sortedParams = Object.keys(params)
      .sort()
      .reduce((acc, key) => {
        acc[key] = params[key];
        return acc;
      }, {});
    const paramString = Object.keys(sortedParams)
      .map((key) => `${key}=${sortedParams[key]}`)
      .join('&');
    const completeParamString = `${paramString}&${merchantKey}`;
    const checksum = crypto
      .createHash('sha256')
      .update(completeParamString)
      .digest('hex');
    return checksum;
  }
  
