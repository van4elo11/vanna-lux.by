<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получение данных из формы
    $full_name = $_POST['full-name'];
    $city = $_POST['city'];
    $contact_info = $_POST['contact-info'];

    // Формирование сообщения
    $message = "Новое сообщение с формы обратной связи:\n\n";
    $message .= "Имя: " . $full_name . "\n";
    $message .= "Город: " . $city . "\n";
    $message .= "Контакт: " . $contact_info . "\n";

    // Отправка письма
    $to = "salesvannalux@yandex.ru";
    $subject = "Новое сообщение с формы обратной связи";
    $headers = "From: Your Website <noreply@yourwebsite.com>";

    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
}
?>
