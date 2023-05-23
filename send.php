<?php
if(isset($_POST['message'])) {
  $message = $_POST['message'];
  $file = 'contact.txt';
  file_put_contents($file, $message . PHP_EOL, FILE_APPEND); // Добавляем сообщение в конец файла с помощью PHP_EOL
}
?>
