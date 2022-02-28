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
    slidesToShow: 1,
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
          slidesToScroll: 1,
          slidesToShow: 5,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 4,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 'auto',
          slidesToShow: 'auto',
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
    slidesToShow: 2,
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
          dots: false,
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
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
          arrows: false,
          scrollLock: true,
        },
      },
    ],
  });

  document
    .querySelector('.glider-feed')
    .addEventListener('glider-slide-visible', function (event) {
      var glider = Glider(this);
      console.log('Slide Visible %s', event.detail.slide);
    });
  document
    .querySelector('.glider-feed')
    .addEventListener('glider-slide-hidden', function (event) {
      console.log('Slide Hidden %s', event.detail.slide);
    });
  document
    .querySelector('.glider-feed')
    .addEventListener('glider-refresh', function (event) {
      console.log('Refresh');
    });
  document
    .querySelector('.glider-feed')
    .addEventListener('glider-loaded', function (event) {
      console.log('Loaded');
    });

  var feed = document.querySelector('#cursos > div > div > div ');
  let token =
    'IGQVJXODRUSTdRRTRzOW15dUVZALVFqbHd1QzFLakFpN1YyUVVIWWJfWWlFRWNCMWQtWlhGRzdzOVRQb3RudnlTVFVmNlNLd2VqSWhPWFdIUk5LZA05QMVE4Ykh1S2xzcVBPTHVZAOXJhMzhNeUVxcEYydQZDZD';
  let tokenBeauty =
    'IGQVJVcldGdGNjODNUV05fU3U2WmdHVmlwNlo1UFhqQmt0TTBNOTZAUOUZAwOWs2bGtzallrNzBhS19jSThtdW83YXVnd1NCQXBvSWhFR1FrRnctSmM1WW9jRGQtYWVaVXludXhiRzBZAaVIzUnZAUaU1rbAZDZD';

  let url = `https://graph.instagram.com/me/media?access+token=${tokenBeauty}&fields=media_url,media_type,caption,permalink`;

  const feedDiv = document.createDocumentFragment();

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log('feed data ', response.data);
      response.data.map(function (feed) {
        if (feed.media_type == 'IMAGE') {
          let feedItem = document.createElement('div');
          feedItem.className = 'testimonial-item mx-auto mb-lg-0';

          let image = document.createElement('img');
          let paragraph = document.createElement('p');
          image.className = 'img-fluid mb-1';
          image.src = `${feed.media_url}`;

          paragraph.className = 'font-weight-light mb-0 px-2 py-4';
          paragraph.innerHTML = `${feed.caption}`;

          feedItem.appendChild(image);
          feedItem.appendChild(paragraph);

          feedDiv.appendChild(feedItem);
        } else {
          console.log('Não é imagem');
        }
      });
    })
    .finally(() => {
      feed.appendChild(feedDiv);

      window._ = new Glider(document.querySelector('.glider-feed'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '#dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next',
        },
        responsive: [
          {
            breakpoint: 1080,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 920,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToScroll: 'auto',
              slidesToShow: 'auto',
              exactWidth: true,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: false,
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              dots: false,
              arrows: false,
              scrollLock: true,
            },
          },
        ],
      });
    });
});
