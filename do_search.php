
<?php 
$search=urlencode($_POST['search']);
$curl = curl_init(); // init sessione carl
curl_setopt($curl, CURLOPT_URL,"http://www.omdbapi.com/?i=tt3896198&apikey=22d4f724&s=".$search.""); // imposta l' url
curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // specifica il risultato come stringa
$response = curl_exec($curl);  //Esegue la chiamata remota secondo le specifiche definite mediante le varie chiamate di curl_setopt().
curl_close($curl);
echo $response;
?>