$(function() {
  $('.js_form').on('submit', function(e){
    e.preventDefault();
    let post = $('.js-form__text-field').val();
    $.ajax ({
      type: 'POST',
      url: '/posts',
      data: { 
        post: {
          content: post
        }
      },
      dataType: 'json',
    })
    .done(function(data) {
      let html = $('.main__contents_content_text').append(data.content);
      $('.main__contents_content').append(html);
      $('js-form__text-field').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});