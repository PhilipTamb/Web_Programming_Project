<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
$q = mysqli_query($conn, "set character set utf8");

session_start();

$username = $_SESSION["nomeutente"]; //mysqli_real_enscape_string()
//$name_collection =  $_POST["name_collection"]; 

    $query = "select * from raccolte where username = '".$username."' ";
    $res = mysqli_query($conn,$query);
    $row = mysqli_fetch_all($res, MYSQLI_ASSOC);


    if (mysqli_num_rows($res) != 0 ){ // se esistono
        $data[] = $row;
        echo json_encode($data);
        mysqli_free_result($res);
        mysqli_close($conn);

    }else{ // se non esiste
            $data = null;

            echo json_encode($data);
            mysqli_close($conn);
    }


?>