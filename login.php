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
     <link rel="stylesheet" href="style_login.css">
     <link href="https://fonts.googleapis.com/css?family=Gugi|Nunito|PT+Sans" rel="stylesheet">
     <script src="login.js" defer="true"></script>
    <title>Login</title>
</head>
<body>
    <div class="container">
          <div class="title">
          <h1>Accedi subito!</h1>
          </div>
         <div class="container_form">
          <form name='form'  method='post'>
               <p class="p_value">
                   <label><input class="input_value" type="text"  id="utente" class="input_value"  name="nomeutente" placeholder="Username"></label>
               </p>
               <p class="p_value">
                  <label><input class="input_value" type="password" name="password" placeholder="Password"></label>
               </p>
               </p>
               <p class="p_value"> 
                  <button class="input_submit" type="submit">Login</button>
              </p>

          </form>
          <div class="div-text">
          <p class="container-text">Non hai ancora un account? <br></p>
         <a class="link" href="singup.php"> Crealo subito!</a>
         </div>
      </div>
    </div> 
</body> 
</html>

<?php
 session_start();       //SESSION START
 
 if (isset($_SESSION["nomeutente"]))
 {
    header("Location: home.php"); 
    exit;
 }
 
  if(isset( $_POST["nomeutente"]) && isset( $_POST["password"])){
    
 //  = mysqli_real_escape_string($conn, ); riceve in ingresso una stringa e effettua l 'enscape dei carattri evitando l'sqlinjection
    $nomeutente  = mysqli_real_escape_string($conn, $_POST["nomeutente"]);
    $password  = mysqli_real_escape_string($conn, $password = $_POST["password"]);

        $query = "select * from users where nome_utente='".$nomeutente."' and psw='".$password."'      ";
        $res = mysqli_query($conn,$query);
        if ( mysqli_num_rows($res)!= 0){
            $_SESSION["nomeutente"] = $_POST["nomeutente"];
            $_SESSION["password"] = $_POST["password"];
            header("Location: home.php"); 
        }else{
            echo "<p class = 'errore'>";
            echo ("Credenziali non valide");
            echo "</p>";
        }
    }else{
        echo "<p class = 'errore'>";
        echo ("inserisci tutti i campi");
        echo "</p>";

    }
?>