'use strict';
( function (module) {
  
  const bookView = {};
  
  bookView.initIndexPage = function () {
    $('.container').hide();
    $('#book-view').show();
    
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  module.bookView = bookView;
  bookView.initIndexPage();
})(app);
