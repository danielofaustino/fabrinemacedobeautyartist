// form on modal
$('#contact').submit(function (e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr('action'), $form.serialize()).then(function () {
    window.location.href = 'www.google.com.br';
  });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus');
});