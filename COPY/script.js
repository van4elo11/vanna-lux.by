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


//   POP-UP-VIDEO
$(document).ready(function() {
  $('.video1').click(function() {
    $('.pop-up-video1').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video2').click(function() {
    $('.pop-up-video2').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video3').click(function() {
    $('.pop-up-video3').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video4').click(function() {
    $('.pop-up-video4').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video5').click(function() {
    $('.pop-up-video5').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video6').click(function() {
    $('.pop-up-video6').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('#video7').click(function() {
    $('.pop-up-video7').removeClass('none');
  });

  $('.popup-video-close').click(function() {
    $('.overlay-video').addClass('none');
  });
});

$(document).ready(function() {
  $('.overlay-video').click(function() {
    $('.overlay-video').addClass('none');
  });

  $('.popup-video-close').click(function() {
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
