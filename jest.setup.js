const axios = require('axios');

// Create an Axios instance
const axiosInstance = axios.create();

// Request interceptor for logging
axiosInstance.interceptors.request.use(request => {
  console.log('Starting Request', {
    url: request.url,
    method: request.method,
    headers: request.headers,
    data: request.data
  });
  return request;
}, error => {
  console.error('Request Error', error);
  return Promise.reject(error);
});

// Response interceptor for logging
axiosInstance.interceptors.response.use(response => {
  console.log('Response:', {
    url: response.config.url,
    status: response.status,
    headers: response.headers,
    data: response.data
  });
  return response;
}, error => {
  if (error.response) {
    console.error('Response Error', {
      url: error.response.config.url,
      status: error.response.status,
      headers: error.response.headers,
      data: error.response.data
    });
  } else {
    console.error('Response Error', error.message);
  }
  return Promise.reject(error);
});


// Export the Axios instance
module.exports = axiosInstance;
module.exports = {
  setupFilesAfterEnv: ['https://github.com/AnnDenysenko/AQA_JavaScript/jest.setup.js'],
  moduleNameMapper: {
    '^@setup$': 'https://github.com/AnnDenysenko/AQA_JavaScript/jest.setup.js'
  }
};
