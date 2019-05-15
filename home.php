<?php
//connesione al server

$servername = "localhost";
$username = "root";
$psw = "";
$db = "homework4";
$conn = mysqli_connect($servername,$username,$psw,$db) or die ("Errore: ".mysqli_connect_error());
session_start();       //SESSION START
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style_home.css">
    <link href="https://fonts.googleapis.com/css?family=Gugi|Nunito|PT+Sans" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="home_print.js" defer="true"></script>
    <script src="home_insert.js" defer="true"></script>
    <title>Home</title>
</head>
<body>
    <header>
    <ul class="nav-liks">
          <li><p class="user"><?php echo  $_SESSION["nomeutente"]; ?> <p></li>
          <li><a href="home.php">Home</a></li>
          <li><a href="search.php">Ricerca</a></li>
          <li><a href="logout.php">Logout</a></li>
      </ul>
        <div class="icon-bar" >
          <span></span>
          <span></span>
          <span></span>
      </div>

    </header>
    <div class="menu">  
        <p class="user"><?php echo  $_SESSION["nomeutente"]; ?> <p>
         <div  class="menu-item"><a href="home.php">Home</a> </div>
         <div class="menu-item"><a href="search.php">Ricerca</a> </div>
         <span></span>
         <div class="menu-item"><a href="logout.php">Logout</a> </div>
   </div>
  
    <section class="cover">

        <div class="cover-filter">
            <div class="cover-caption">
                <div class="cover-caption-copy">
                    <h1>Scegli subito i tuoi poster preferiti!</h1>
                    <h2> I migliori contenuti digitali a portata di click!</h2>
                    <a href="singup.php">  
                   <a href="#collection"> <button class="button">Crea subito la tua collezione!</button></a>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section id="collection" class="section-collection">
        <div class="container-collection">
            <p class="text-collection">Crea le tue collezioni per raccogliere i tuoi video preferiti!</p>
        <div class="div-middle-collection">  
                    <div class="div-img-collection">
                        <img class="img-collection" src="image/h2.jpg" alt="">
                    </div>
                    <form name="form" class="form" method="post" >
                        <p class="p-title">
                            <label> <input class="input-collection" type="text" name="title" placeholder="Inserisci il nome della tua collezione"></label>
                        </p>
                        <p>
                            <label> <input class="input_submit" name="sabmit" type="submit"> </label>
                        </p>
                    </form>
                </div>
         </div>
    </section>
<section>

<section class="middle-section"> 

</section>

<footer class="footer">

</footer>
</body>
</html>


<?php
  
if (!isset($_SESSION["nomeutente"])){
    header("Location: login.php");
    exit;
}

?>