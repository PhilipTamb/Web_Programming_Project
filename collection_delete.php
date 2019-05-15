<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
$q = mysqli_query($conn, "set character set utf8");

session_start();

$username =  $_SESSION["nomeutente"]; 
$titolo_raccolta =  $_POST["titolo_raccolta"];
$url_img_raccolta = $_POST["url_img_raccolta"];
$id_contenuto = $_POST["id_contenuto"];
$titolo_img = $_POST["titolo_img"];
         
            // controllo se ci sono altre raccolte con quel contenuto, altrimenti elimino il contenuto
            $query = "select * from relazione where id_contenuto = '".$id_contenuto."' ";
            $res = mysqli_query($conn,$query);

            if ( mysqli_num_rows($res) == 1){
                $query = " delete from contenuti where id_contenuto = '".$id_contenuto."' ";
                $res = mysqli_query($conn,$query);
            }

            $query = " delete from relazione where id_contenuto = '".$id_contenuto."' and nome_raccolta = '".$titolo_raccolta."' and nome_utente = '".$username."'";
            $res = mysqli_query($conn,$query);
                    
            $data = $res;
            echo json_encode($data);
           // mysqli_free_result($res);
            mysqli_close($conn);


?>