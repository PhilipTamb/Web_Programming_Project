<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
$q = mysqli_query($conn, "set character set utf8");

session_start();

$title_img =  $_POST["titolo"]; // mysqli_real_enscape_string
$link_img =  $_POST["link_img"];
$id_img =  $_POST["input_id"];
$select_option =  $_POST["select_option"];
$username = $_SESSION["nomeutente"];  

    $query = "select * from relazione where nome_raccolta = \"$select_option\"  and  nome_utente =  \"$username\"  ";
    $res = mysqli_query($conn,$query);

    if( mysqli_num_rows($res) == 0 ){ 
        $query = "update raccolte set url_raccolta = \"$link_img\" where nome_raccolta = \"$select_option\" and username = \"$username\"  ";
        $res = mysqli_query($conn,$query);
    }

    $query = "insert into  contenuti (id_contenuto,title,url_contenuto) values( \"$id_img\", \"$title_img\" , \"$link_img\")";
    $res = mysqli_query($conn,$query);

   $query1 = "insert into relazione (id_contenuto,nome_raccolta,nome_utente) values ( \"$id_img\", \"$select_option\", \"$username\" ) ";
   $res = mysqli_query($conn,$query1);


        mysqli_free_result($res);
        mysqli_close($conn);


?>