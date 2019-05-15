<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="stylesheet" href="style_singup.css">
     <script src="singup.js" defer="true"></script>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <title>Singip</title>
</head>
<body>
    <div class="container">
          <div class="title">
          <h1>Non hai ancora un account...<br> Crealo subito! </h1>
          </div>
         <div class="container_form">
          
          <form name='form'  method='post'>
               <p class="p_value">
                   <label><input class="input_value" type="text" name="nome" placeholder="Nome"></label>
               </p>
               <p class="p_value">
                    <label><input class="input_value" type="text" name="cognome" placeholder="Cognome"></label>
                </p>
                <p class="p_value">
                   <label><input class="input_value" type="text" name="email" placeholder="E-mail"></label>
               </p>
               <p class="p_value">
                   <label><input id="utente" class="input_value" type="text" name="nomeutente" placeholder="Username"></label>
               </p>
               <p class="p_value">
                  <label><input class="input_value" type="password" name="password" placeholder="Password"></label>
               </p>
               <p class="p_value"> 
                  <label><input class="input_value" type="password" name="conferma" placeholder="Conferma Password"></label>
               </p>
               <p class="p_value"> 
                  <button class="input_submit" type="submit">Registrati</button>
              </p>
          </form>
          <div class="div-text">
          <p class="container-text">Sei già resistrato? <br></p>
         <a class="link" href="login.php"> Accedi subito!</a>
         </div>
      </div>
    </div> 
</body> 
</html>

<?php
   session_start();       //SESSION START
   if(isset($_SESSION["nomeutente"])){
    header("Location: home.php");
   }

  if(isset( $_POST["nome"]) && isset( $_POST["cognome"]) && isset( $_POST["email"]) && isset( $_POST["nomeutente"]) && isset( $_POST["password"]) && isset( $_POST["conferma"]) ){
    
    $nome = mysqli_real_escape_string($conn, $_POST["nome"]);  //  = mysqli_real_escape_string($conn, ); riceve in ingresso una stringa e effettua l 'enscape dei carattri evitando l'sqlinjection
    $cognome  = mysqli_real_escape_string($conn,  $_POST["cognome"] );
    $email  = mysqli_real_escape_string($conn, $_POST["email"]);
    $nomeutente  = mysqli_real_escape_string($conn, $_POST["nomeutente"]);
    $password  = mysqli_real_escape_string($conn, $password = $_POST["password"]);

        $query = "insert into users(nome, cognome, email, nome_utente, psw) values ('".$nome."', '".$cognome."', '".$email."', '".$nomeutente."', '".$password."' )";
        $res = mysqli_query($conn,$query);

            $_SESSION["nomeutente"] = $_POST["nomeutente"];
            $_SESSION["password"] = $_POST["password"];
            header("Location: home.php");
     // mysqli_close($conn);
    }
?>