'use strict';
var app = app || {};

( function () {
const ENV = {}
  ENV.location = location.protocol === 'https:',
  ENV.cloudAPI = 'https://ni-ag-booklist.herokuapp.com',
  ENV.localAPI = 'localhost:8080',
  ENV.APIurl = ENV.location ? ENV.cloudAPI : ENV.localAPI

  //TODO: we want to refactor this as an IFFE, if we haven't already
  function Book (bookObj) {
    Object.keys(bookObj).forEach(key => {this[key] = bookObj[key]}, this)
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-list-template').text());
    return template ('asidfjoiwjef');
  };

  Book.loadAll = rows => {
    rows.sort((a, b) => (new Book (b.title) - (new Book (a.title) ))
    Book.all = rows.map(row => new Book(row));
  };

  //function if we encounter an error, it is the equivalent to generating a 404 error message on a page
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  } // our errorView will be a separate JS file
    // we'll need ot empty the errors or else we will always be loading a page with errors

// errorView.initErrorPage = err => {
//   $('.container').hide();
//   $('.error-view').show();

// }



  // page( '/book-list-client/', () => app.Book.fetchAll(app.booksView.initIndexPage))
//This will be in our views.js where we want to display our different tabs



  //above is a ternary expression, below is an alternative to that expression
  
  //if(ENV.isProduction) {
  //   ENV.apiUrl = ENV.productionAPIurl;
  // } else {
  //   ENV.apiUrl = ENV.developmentApiUrl;
  // }
  
  //.catch catches any errors for us
} )();