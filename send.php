<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once(__DIR__."/EmailController.php");

use email\EmailController;

$emailJson = file_get_contents("php://input");
$emailArray = json_decode($emailJson);

if($emailArray->control === "jA35t8cG")
{
    $emailController = new EmailController($emailArray->name, $emailArray->email, $emailArray->phone, $emailArray->message);
    $sendEmail = $emailController->sendEmail();
    if(!$sendEmail) {
        http_response_code(400);
        echo json_encode(array(
            "success" => false,
            "message" => 'Errore, messaggio non inviato')
        );
        die();
    } else {
        http_response_code(200);
        echo json_encode(array(
            "success" => false,
            "message" => 'Messaggio inviato')
        );
        die();
    }
} else {
    http_response_code(400);
    echo json_encode(array(
        "success" => false,
        "message" => 'Errore, messaggio non inviato')
    );
    die();
}