<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
$q = mysqli_query($conn, "set character set utf8");

$default_img = "image/h2.jpg";
session_start();
$username = $_SESSION["nomeutente"];
$name_collection = mysqli_real_escape_string($conn, $_POST["name_collection"]); //mysqli_real_enscape_string()
// se esiste già una raccolta
    $query = "select * from raccolte where nome_raccolta = '".$name_collection."' and username = '".$username."' ";
    $res = mysqli_query($conn,$query);

    if (mysqli_num_rows($res) != 0 ){ // se esiste già
        $data[0] = null;
        echo json_encode($data);
        mysqli_free_result($res);
        mysqli_close($conn);

    }else{ // se non esiste

            $query = "insert into raccolte(nome_raccolta,url_raccolta, username) values('".$name_collection."', '".$default_img."', '".$username."')";
            $res = mysqli_query($conn,$query);
            $data = $default_img;

            echo json_encode($data);
            mysqli_close($conn);
    }


?>