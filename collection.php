
<?php
/*
//connesione al server

$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
session_start();       //SESSION START
$username = $_SESSION["nomeutente"]; 
$titolo_raccolta = $_GET["title"];
//$query = "select * from (raccolte r join relazione p on r.nome_raccolta = p.nome_raccolta)join contenuti c on p.id_contenuto=c.id_contenuto where r.username = '".$username."' and r.nome_raccolta = '".$titolo_raccolta."' ";
$data = array();
$res = mysqli_query($conn,"select * from (raccolte r join relazione p on r.nome_raccolta = p.nome_raccolta)join contenuti c on p.id_contenuto=c.id_contenuto where r.username = '".$username."' and r.nome_raccolta = '".$titolo_raccolta."' ");
//$row = mysqli_fetch_all($res, MYSQLI_ASSOC);

while( $ris = mysqli_fetch_assoc($res)){
   $data[] = $ris;
}

$data[] = $titolo_raccolta;
echo json_encode($data);
            mysqli_free_result($res);
            mysqli_close($conn);
            */
?>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style_collection.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Gugi|Nunito|PT+Sans" rel="stylesheet">
    <script src="collection.js" defer="true"></script>

    <script type="text/javascript" src="collection.js" defer="true">var php = "<?php echo $hi; ?>"; //passo la variable da php a js
alert(php);
</script>

    <title>Collection</title>
</head>
<body>
    <div class="container">

    </div>
    <section class="section-result">

    </section>

    
</body>
</html>

<?php
session_start();  
if (!isset($_SESSION["nomeutente"])){
    header("Location: login.php");
    exit;
}

?>