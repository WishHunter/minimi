<?php
require './PHPMailer.php';
require './SMTP.php';
require './Exception.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);
$phone = $json_obj['phone'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $msg = "ok";
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  $mail->Host       = ' server203.hosting.reg.ru';
  $mail->Username   = 'callback@pomeranian-puppy.ru';
  $mail->Password   = 'qwe18121812';
  $mail->Port       = 587;
  $mail->setFrom('callback@pomeranian-puppy.ru', 'Заявка с сайта pomeranian-puppy');
  $mail->addAddress('molkovd@yandex.ru');
  $mail->isHTML(true);
  $mail->Subject = 'Заявка с сайта pomeranian-puppy.ru';
  $mail->Body    = "<b>Телефон:</b> $phone";
  if ($mail->send()) {
    echo "Сообщение было отправлено.";
  } else {
    echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты. Причина ошибки: {$mail->ErrorInfo}";
  }
} catch (Exception $e) {
  echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}
