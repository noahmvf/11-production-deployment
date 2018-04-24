let ENV = {
  location: location.protocol === 'https:'
  cloudAPI: 'https://ni-ag-booklist.herokuapp.com'
  localAPI: 'localhost:8080'
  APIurl: ENV.location ? ENV.cloudAPI : ENV.localAPI
};
