'use strict';
(function (module){
  const errorView = {};

  errorView.initErrorPage = (err) => {
    $('.container').hide();
    $('.error-view').show();
    $('#error-message').text('');
    let template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));

    let errorCallback = err => {
      console.log(err);
      errorView.initErrorPage(err);
    }
  }
  module.errorView = errorView;


})(app);