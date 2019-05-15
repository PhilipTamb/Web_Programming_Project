<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style_search.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Gugi|Nunito|PT+Sans" rel="stylesheet">
    <script src="search.js" defer="true"></script>


    <title>Search</title>
</head>
<body>
    <div class="search-container">
    <form name='form' class="formnew" method="post" > 
        <p> <label> <input name="search" type="text"  class="input" placeholder="Cerca"  > </label></p>
        <p> <label>  <input name="submit" type="submit" class="btn">  </label></p>
    </form>
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