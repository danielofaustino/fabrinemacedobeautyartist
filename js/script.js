window.addEventListener('load', function () {
  document
    .querySelector('.glider')
    .addEventListener('glider-slide-visible', function (event) {
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide);
    });
  document
    .querySelector('.glider')
    .addEventListener('glider-slide-hidden', function (event) {
      console.log('Slide Hidden %s', event.detail.slide);
    });
  document
    .querySelector('.glider')
    .addEventListener('glider-refresh', function (event) {
      console.log('Refresh');
    });
  document
    .querySelector('.glider')
    .addEventListener('glider-loaded', function (event) {
      console.log('Loaded');
    });

  window._ = new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 'auto',
          itemWidth: 300,
          slidesToShow: 'auto',
          exactWidth: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          dots: false,
          arrows: false,
          scrollLock: true,
        },
      },
    ],
  });

  document
    .querySelector('.glider-cursos')
    .addEventListener('glider-slide-visible', function (event) {
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide);
    });
  document
    .querySelector('.glider-cursos')
    .addEventListener('glider-slide-hidden', function (event) {
      console.log('Slide Hidden %s', event.detail.slide);
    });
  document
    .querySelector('.glider-cursos')
    .addEventListener('glider-refresh', function (event) {
      console.log('Refresh');
    });
  document
    .querySelector('.glider-cursos')
    .addEventListener('glider-loaded', function (event) {
      console.log('Loaded');
    });

  window._ = new Glider(document.querySelector('.glider-cursos'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToScroll: 'auto',
          itemWidth: 300,
          slidesToShow: 'auto',
          exactWidth: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 4,
          slidesToShow: 4,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          dots: false,
          arrows: false,
          scrollLock: true,
        },
      },
    ],
  });
});

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
