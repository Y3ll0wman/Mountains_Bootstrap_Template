<?php
$fio = $_POST['fio'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$phone = htmlspecialchars($phone);
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = urldecode($phone);
$fio = urldecode($fio);
$email = urldecode($email);
$fio = trim($fio);
$email = trim($email);
//echo $fio;
//echo "<br>";
//echo $email;
if (mail("varvarkin_89@mail.ru", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email ,"From: varvarkin.89@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>