<?php 

namespace email;

use JsonSerializable;

class PostMarkAppMail implements JsonSerializable {
        
        private $from;
        private $to;
        private $bcc;
        private $subject;
        private $htmlBody;
        private $attachments = array();

        public function getFrom(){
            return $this->from;
        }
    
        public function setFrom($from){
            $this->from = $from;
        }
    
        public function getTo(){
            return $this->to;
        }
    
        public function setTo($to){
            $this->to = $to;
        }

        public function getBcc(){
            return $this->bcc;
        }
    
        public function setBcc($bcc){
            $this->bcc = $bcc;
        }
    
        public function getSubject(){
            return $this->subject;
        }
    
        public function setSubject($subject){
            $this->subject = $subject;
        }
    
        public function getHtmlBody(){
            return $this->htmlBody;
        }
    
        public function setHtmlBody($htmlBody){
            $this->htmlBody = html_entity_decode($htmlBody);
        }
    
        public function getAttachments(){
            return $this->attachments;
        }
    
        public function setPDFAttachments($name, $content){
            array_push($this->attachments, array(
                "name" => $name,
                "content" => $content,
                "contentType" => 'application/octet-stream'
            ));
        }

        public function jsonSerialize() {
            return [
                'From' => $this->from,
                'To' => $this->to,
                'Subject' => $this->subject,
                'HtmlBody' => $this->htmlBody,
                'Attachments' => $this->attachments
            ];
        }
        
}
