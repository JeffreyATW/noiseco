$('.hero a').on('click', function (event) {
  event.preventDefault();

  $('.mymodal').dialog({
    title: 'My Modal!!!',
    resizable: false,
    show: 'slideDown'
  });
});

$('form').validate({
  errorPlacement: function (error, element) {
    $('form').append(element.prop('name'));
    $('form').append(error);
  },
  rules: {
    password_confirmation: {
      equalTo: '#password'
    }
  }
});