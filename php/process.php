<?php
$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];

$EmailTo = "varvarkin.89@mail.ru";
$Subject = "New Message Received";

// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success){
   echo "success";
}else{
    echo "invalid";
}

?>