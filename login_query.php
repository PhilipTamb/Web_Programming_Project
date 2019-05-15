<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());



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
       }


       ?>