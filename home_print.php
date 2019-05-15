<?php 
//connesione al server
$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
$q = mysqli_query($conn, "set character set utf8");

$default_img = "image/h1.jpg";
session_start();
$username = $_SESSION["nomeutente"];
$name_collection =  $_POST["dato"]; //mysqli_real_enscape_string()
    if($name_collection == "control"){
        
            $query = "select * from raccolte where username = '".$username."' ";
            $res = mysqli_query($conn,$query);
            $row = mysqli_fetch_all($res, MYSQLI_ASSOC);

            $data[] = $row;
            
          //  for($i=0; $i<mysqli_num_rows($res); $i++){ $data[$i] = $row[$i]; }
         

            echo json_encode($data);
                        mysqli_free_result($res);
                        mysqli_close($conn);
  
        //   $n_row = mysqli_num_rows($res);
/*
                if (mysqli_num_rows($res)!=0){
                        $data = array();
 
                        for($i=0; $i<$n_row; $i++){
                            $data[] = $res;

                        }
                        echo json_encode($data);
                        mysqli_free_result($res);
                        mysqli_close($conn);
                }else{
                    
                } */

    }


?>