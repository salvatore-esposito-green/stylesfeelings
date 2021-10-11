<?php

namespace email;

require_once(__DIR__."/sender.php");
use email\Sender;

class EmailController
{

    private $name;
    private $email;
    private $phone;
    private $message;

    public function __construct($name, $email, $phone, $message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->message = $message;
    }

    public function sendEmail()
    {
        $sender = new Sender();
        $attachment = array();
        $to = $this->email;
        $name = $this->name;
        $phone = $this->phone;
        $message = $this->message;
        $email = $sender->prepareEmail($name, $to, $phone, $message);
        $responseEmail = $sender->sendEmail($email);
        if($responseEmail['ErrorCode'] !== 0) {
            return false;
        }
        return true;
    }
}