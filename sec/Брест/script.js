// MOBILE-MUNU
$(document).ready(function() {
    $('#burger').click(function() {
      $('ul.nav-list').toggleClass('m-hide');
    });
  });

//HEADER
$(document).ready(function() {
  $('.drop-down').click(function() {
    $('.header-container-contact').toggleClass('height362');
  });
});


// MOBILE-MUNU-CLOSE
  $(document).ready(function() {
    $('#burger').click(function() {
      var burgerImage = $(this).find('img');
      var currentSrc = burgerImage.attr('src');
      var newSrc = (currentSrc === 'img/icon-24-BURGER.svg') ? 'img/icon-24-BURGER-close.svg' : 'img/icon-24-BURGER.svg';
      burgerImage.attr('src', newSrc);
    });
  });
  

// POP-UP-FORM
$(document).ready(function() {
    $('.open-popup, .close-popup').click(function() {
      $('.popup-wrapper').toggleClass('none');
    });
  });

//pop-up-video
$(document).ready(function() {
  $('.btn-video-play').click(function() {
    var youtubeLink = $(this).data('youtube-link');
    $('#frame-video-link').attr('src', youtubeLink);
    $('.overlay-video').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('#frame-video-link').attr('src', '');
    $('.overlay-video').addClass('none');
  });
});



//   FORM
$(document).ready(function() {
  $('#feedback-form').submit(function(e) {
    e.preventDefault();
    
    var phone = $('#phone').val();
    
    $.ajax({
      type: 'POST',
      url: 'send_email.php',
      data: { phone: phone },
      success: function(response) {
        alert('Сообщение успешно отправлено.');
        // Дополнительные действия после успешной отправки
      },
      error: function(xhr, status, error) {
        alert('Ошибка при отправке сообщения.');
        // Обработка ошибки при отправке
      }
    });
  });
});



// LINK

$(document).ready(function() {
  $('.method').click(function(e) {
    e.preventDefault();
    var scrollTopPosition = $('#method-tgt').offset().top - 103;
    $('html, body').animate({
      scrollTop: scrollTopPosition
    }, 500);
  });

  $('.process').click(function(e) {
    e.preventDefault();
    var scrollTopPosition = $('#process-tgt').offset().top - 103;
    $('html, body').animate({
      scrollTop: scrollTopPosition
    }, 500);
  });

  $('.work').click(function(e) {
    e.preventDefault();
    var scrollTopPosition = $('#work-tgt').offset().top - 103;
    $('html, body').animate({
      scrollTop: scrollTopPosition
    }, 500);
  });

  $('.revieww').click(function(e) {
    e.preventDefault();
    var scrollTopPosition = $('#revieww-tgt').offset().top - 103;
    $('html, body').animate({
      scrollTop: scrollTopPosition
    }, 500);
  });

  $('.cost').click(function(e) {
    e.preventDefault();
    var scrollTopPosition = $('#cost-tgt').offset().top - 103;
    $('html, body').animate({
      scrollTop: scrollTopPosition
    }, 500);
  });
});


//FAQ
$(document).ready(function() {
  $('.question').on('click', function() {
    if ($(this).hasClass('question_open')) {
      $(this).removeClass('question_open');
    } else {
      $('.question').removeClass('question_open');
      $(this).addClass('question_open');
    }
  });
});







