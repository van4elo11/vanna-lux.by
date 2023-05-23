$(document).ready(function() {
    var $header = $('header');
    var prevScrollpos = window.pageYOffset;
    
    $(window).scroll(function() {
      var currentScrollPos = window.pageYOffset;
      
      if (prevScrollpos > currentScrollPos) {
        $header.removeClass('header_s');
      } else {
        $header.addClass('header_s');
      }
      
      prevScrollpos = currentScrollPos;
    });
  });



  $(document).ready(function() {
    $('#contact-form').submit(function(e) {
      e.preventDefault(); // Отменяем стандартное поведение формы
  
      var message = $('#message').val(); // Получаем значение поля ввода
  
      // Отправляем данные на сервер с помощью AJAX-запроса
      $.ajax({
        type: 'POST', // Метод запроса
        url: 'contact.php', // URL-адрес файла на сервере, который будет обрабатывать запрос
        data: {message: message}, // Данные, которые отправляем на сервер
        success: function(response) {
          alert('Данные успешно отправлены на сервер!');
        },
        error: function(xhr, status, error) {
          alert('Сейчас мы вам позвоним!');
        }
      });
    });
  });
  




  $(document).ready(function() {
    $('#message').mask('+375 (00) 000-00-00'); // Создаем маску для номера телефона
  });

  $(document).ready(function() {
  $('.burger-icon').click(function() {
  // Добавляем или удаляем класс .menu-active у элемента .nav_container
  $('.nav_container').toggleClass('menu-active');
});
});