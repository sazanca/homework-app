$(function() {
  function buildHTML(post) {
    var html = $('.main__contents_content_text').append(data.content);
    return html;
  }

  $('#post_content').on('submit', function(e){
    e.preventDefault();
    let post = $('.js-fom__text-field').val();
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
      let html = buildHTML(data);
      $('.main__contents_content').append(html);
      console.log(this);
      $('js-form__text-field').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});