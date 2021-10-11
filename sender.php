<?php



namespace email;



use email\PostMarkAppMail;

include_once 'PostMarkAppMail.php';




class Sender {

    

    const POSTMARK_API_KEY = "65c4ed38-1480-476d-b401-cd63a4431543";



    public function prepareEmail($name, $email, $phone, $message) {

        $htmlBody = null;
      

        $body = 'Nome: ' . $name . '<br>

                 Telefono: ' . $phone . '<br>

                 Email: ' . $email . '<br>

                 Messaggio: ' . $message . '<br>

                 Data e ora di Invio: '. (new \DateTime('now', new \DateTimeZone('Europe/Rome')))->format(('d-m-Y H:i:s')) . '<br>';

        $htmlBody = $this->getHtmlBody($body);



        $email = array(

            'to' => 's.esposito@greennetwork.it',

            'from' => 'Styles Feelings <info@stylesfeelings.com>',

            'subject' => 'Styles & Feelings | Form di contatto Sito Web',

            'html_body' => $htmlBody

        );

        return $email;

    }
   
    public function sendEmail($email) {
        $postMarkAppMail = new PostMarkAppMail();
        $postMarkAppMail->setFrom($email['from']);
        $postMarkAppMail->setTo($email['to']);
        //$postMarkAppMail->setBcc($email['bcc']);
        $postMarkAppMail->setSubject($email['subject']);
        $postMarkAppMail->setHtmlBody($email['html_body']);
        $json = json_encode($postMarkAppMail->jsonSerialize());
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL, 'http://api.postmarkapp.com/email');
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_TCP_FASTOPEN, 1);
		curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
		curl_setopt($ch, CURLOPT_ENCODING,  '');
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		    'Accept: application/json',
		    'Content-Type: application/json',
		    'X-Postmark-Server-Token: ' . self::POSTMARK_API_KEY
		));
		curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
		$response = json_decode(curl_exec($ch), true);
    error_log(json_encode($response));
        curl_close($ch);
        return $response;

    }


    public function getHtmlBody($body) {
        return '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <!-- NAME: 1 COLUMN -->
            <!--[if gte mso 15]>
            <xml>
              <o:OfficeDocumentSettings>

                <o:AllowPNG />

                <o:PixelsPerInch>96</o:PixelsPerInch>

              </o:OfficeDocumentSettings>

            </xml>

            <![endif]-->

            <meta charset="UTF-8">

            <meta http-equiv="x-ua-compatible" content="IE=edge">

            <meta name="viewport" content="width=device-width, initial-scale=1">

            <title>*Pratica Voltura*</title>

            <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i" rel="stylesheet">

            

          <style type="text/css">        

                table{

                    background-color:white;

                      -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, .2);

                      -moz-box-shadow: 1px 1px 6px rgba(0, 0, 0, .2);

                      box-shadow: 1px 1px 6px rgba(0, 0, 0, .2);

                 

                }

                hr{

                    border:none;

                    height:1px;

                    color:#000000;

                    background-color:#000000;

                }

                li{

                    margin:0;

                    padding:0 0 0 50px;

                    list-style:none;

                    background-repeat:no-repeat;

                    background-position:left center;

                    background-size:28px;

                }

                h1{

                    color:#EA480A;

                    font-weight:800;

                    text-align:center;

                    font-family: Verdana, sans-serif;

                    padding:25px 0;

                }

                p{

                    font-family: Verdana, sans-serif;

                    font-size: 12px;

                    color:black;

                    font-weight:300;

                    text-align:left;

                    line-height:200%;

                    padding:0 50px;

                }

                p span{

                    color:#EA480A;

                    font-weight:800;

                }

                footer{

                    font-size:8pt;

                }

                #footer{

                    background-color:#0C4C3B;

                    color:#ffffff;

                    font-family: Verdana, sans-serif;

                    text-align:center;

                    padding:20px;

                    font-size:8pt;

        

               }

                #nota {

                    background-color:#ffffff;

                    color:#000000;

                    font-family: Verdana, sans-serif;

                    text-align:center;

                    padding:10px;

                    font-size:6pt;

                    font-weight:200;

                

                }

                .button{

                    color:#ffffff;

                    background-color:#EE4904;

                    text-align:center;

                    display:block;

                    padding:10px 10px;

                    margin:20px auto;

                    max-width:180px;

                    border-radius:3px;

                    font-family: Verdana, sans-serif;

                    font-size:14px;

                }

        </style></head>

          <body style="background: #f4f4f4;">

            <!--*|IF:MC_PREVIEW_TEXT|*-->

            <!--[if !gte mso 9]><!--><span class="mcnPreviewText" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;">Gentile Cliente, siamo lieti di inviarle, le informazioni per la sua pratica di Voltura.</span>

            <!--<![endif]-->

            <!--*|END:IF|*-->

            <center>

              <table align="center"  width="600" id="bodyTable" style="height:100%;">

                <tr>

                  <td align="center" valign="top" id="bodyCell">

                    <img src="https://www.stylesfeelings.com/logo.jpg" width="200" style="padding: 25px 0; margin: 0 auto; display: block;" alt="https://www.stylesfeelings.com">

                  </td>

                </tr>

                <tr>

                  <td>

                    <hr width="100%">

                  </td>

                </tr>

                <tr>

                  <td>

        <p>'.$body.'</p>

        

        <p style="text-align:right;font-family:Montserrat, Helvetica, Arial, sans-serif;">

                <br>

        </p>

                  </td>

                </tr>

                <tr>

                  <td>

                    <br>

                  </td>

                </tr>

              </table>

            </center>

            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" id="nota" style="height:10%;">

                <tr>

                  <td style="font-family: Verdana, sans-serif; text-align: justify;">  La presente e-mail è stata generata automaticamente da un indirizzo di posta elettronica di solo invio; si chiede pertanto di non rispondere al messaggio.  Le informazioni contenute in questo messaggio di posta elettronica e in ogni eventuale documento allegato sono riservate, potrebbero essere coperte da riservatezza e possono essere utilizzate esclusivamente dal destinatario sopra indicato.Ogni divulgazione o copia di questo messaggio o dei suoi eventuali allegati non autorizzata, così come ogni uso o divulgazione delle informazioni negli stessi contenute, sono da considerarsi come vietate e potrebbero costituire violazione delle normative ivi applicabili.  Se ricevete questo messaggio per errore Vi preghiamo di volerci avvertire immediatamente tramite posta elettronica o telefonicamente e di cancellare il presente messaggio e ogni documento ad esso allegato dal Vostro sistema. Grazie.<br>

                    <br>

                  </td>

                </tr>

              </table>

            </center>

          </body>

        </html>';

    }

}       