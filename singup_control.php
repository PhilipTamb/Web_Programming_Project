<?php 
//connesione al server

$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());

$q = mysqli_query($conn, "set character set utf8");

$utente = mysqli_real_escape_string($conn, $_POST["nomeutente"]); 
$query = "select nome_utente from users where nome_utente = '".$utente."'";
$res = mysqli_query($conn,$query);


if (mysqli_num_rows($res)!=0){
   $data = true;
   echo json_encode($data);
}else{
    $data = false;
    echo json_encode($data);
}
mysqli_free_result($res);
mysqli_close($conn);

?>