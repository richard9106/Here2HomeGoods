<?php 

$email = $_POST['email'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];


//echo $correo . " " . $nombre . " " . $mensaje;


$destination = "andresmarles9106@gmail.com";
$subject = "Consulta de" . $name; 
$body =' 
    <html> 
        <head> 
            <title>envio de correo</title> 
        </head>
        <body> 
            <h1 style="color:blue; font-size:200px">Contact request from mail</h1>
            <p> 
            
                
            Name or company name:  '.$name .
            '</br>'. 
            'Subject:'.$subject .' </br>
            Phone number:'.$phone.'</br>
            Message: '.$message.' 
            </p> 
        </body>
    </html>
';
//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=UTF8\r\n"; 

//dirección del remitente

$headers .= "FROM: $name <$email>\r\n";
mail($destination,$subject,$body,$headers);

?>