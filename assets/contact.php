<?php

    # Include the Autoloader (see "Libraries" for install instructions)
    require 'vendor/autoload.php';
    use Mailgun\Mailgun;
    
    # Instantiate the client.
    $mgClient = Mailgun::create(process.env.API_KEY);
    $domain = process.env.Domain;

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
        $subject = trim($_POST["subject"]);
        $number = trim($_POST["number"]);
        $message = trim($_POST["message"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($subject) OR empty($number) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Veuillez remplir le formulaire et réessayer.";
            exit;
        }
        if (preg_match('/^0(5|6|7){1}[0-9]{8}+$/', $number)){
            http_response_code(400);
            echo "Veuillez enter une numéro valide!";
            exit;
        }

        // Set the recipient email address.
        $recipient = "mohamedessabir20@gmail.com"; //"festivalfablab@ucd.ac.ma";

        // Set the email subject.
        //$subject = "New contact from $name";

        // Build the email headers.
        $email_headers = "From: $name <$email>";

         // Build the email content.
        $email_content = "First Name: $name\n";
        $email_content .= "Email: $email\n";
        $email_content .= "Number: $number\n";
        $email_content .= "Message:\n$message\n";

       
        // Send the email.
        $msg = $mgClient->messages()->send($domain, [
            'from'=>$email,
            'to'=> $recipient,
            'subject' =>  $subject ,
            'text' => $email_content
        ]);

        if($msg){
            http_response_code(200);
            echo "Votre message a été envoyé avec succès";
        }
        else{
            http_response_code(500);
            echo "Server Error!";
        }
    }
    else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Il y a eu un problème avec votre soumission, veuillez réessayer.";
    }

?>

