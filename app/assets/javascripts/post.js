$(function() {
  $('#new_post').on('submit', function(e){
    e.preventDefault();
    let post = $('.input-box__textArea').val();
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
      let html = $('.main__contents_content').append(data.content);
      $('.main__contents_content').append(html);
      $('.input-box__textArea').val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});