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
$titolo_raccolta =  $_POST["titolo"];

            $query = "select * from (raccolte r join relazione p on r.nome_raccolta=p.nome_raccolta and r.username=p.nome_utente  )join contenuti c on p.id_contenuto=c.id_contenuto where username = '".$username."' and r.nome_raccolta = '".$titolo_raccolta."'  ";
            $res = mysqli_query($conn,$query);
            $row = mysqli_fetch_all($res, MYSQLI_ASSOC);

            $data[] = $row;
            
            echo json_encode($data);
                        mysqli_free_result($res);
                        mysqli_close($conn);


?>