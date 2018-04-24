const ENV = {}
  ENV.location = location.protocol === 'https:',
  ENV.cloudAPI = 'https://ni-ag-booklist.herokuapp.com',
  ENV.localAPI = 'localhost:8080',
  ENV.APIurl = ENV.location ? ENV.cloudAPI : ENV.localAPI
