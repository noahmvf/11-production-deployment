'use strict';
(function (module){
  const errorView = {};

  errorView.initErrorPage = (err) => {
    $('.container').hide();
    $('#error-view-container').show();

    let errorCallback = err => {
      console.log(err);
      errorView.initErrorPage(err);
    }
  }
  module.errorView = errorView;


})(app);