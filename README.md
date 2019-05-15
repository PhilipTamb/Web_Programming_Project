# University_project
Lo scopo dell’homework è sviluppare una piattaforma multi-utente per la gestione di raccolte di contenuti multimediali quali canzoni, libri, fumetti, film, ecc.

Siete liberi di sostituire il termine “raccolta” con un sinonimo più opportuno per la vostra specifica applicazione (es. playlist, collezione, archivio).

Di seguito un elenco di servizio che forniscono informazioni su contenuti multimediali tramite API REST:

Libri e fumetti
Google Books: https://developers.google.com/books/
GoodReads: https://www.goodreads.com/api
ComicVine: https://comicvine.gamespot.com/api/
Marvel: http://developer.marvel.com/
Musica
Spotify: https://developer.spotify.com/documentation/web-api/
Immagini
Giphy: https://developers.giphy.com/docs/
Flickr: https://www.flickr.com/services/api/
Video
OMDB: http://www.omdbapi.com/
Vimeo: https://developer.vimeo.com/
YouTube: https://developers.google.com/youtube/
Le informazioni associate a ciascun contenuto saranno, come minimo, un titolo e un’immagine (es. titolo di una canzone e copertina dell’album; titolo di un libro e copertina del libro; titolo di un film e locandina del film). Siete comunque invitati ad aggiungere più informazioni rilevanti possibili (ad es., artista, album, ecc. per le canzoni; autore, casa editrice, ecc. per i libri; regista, produzione, ecc. per i film).

Tutte le API suggerite forniscono immagini associati ai contenuti. Potete anche scegliere un altro servizio, ma verificate che restituisca anche un’immagine associata a ciascun contenuto.

La piattaforma deve realizzare le seguenti funzionalità:

Registrazione, login e logout degli utenti
Home page
Ricerca dei contenuti
Visualizzazione delle raccolte
Progettazione del database
Il database deve contenere le tabelle necessarie per gestire:

Utenti
Raccolte: ciascun utente può generare le proprie raccolte. Ciascuna raccolta deve avere come minimo un titolo e un attributo che faccia riferimento all’URL dell’immagine che rappresenta la raccolta.
Contenuti: ciascun contenuto fa riferimento ad una risorsa sul servizio REST API scelto, ed è associato ad una o più raccolte (ad es., diversi utenti che aggiungono lo stesso libro nelle proprie raccolte).
Registrazione, login e logout degli utenti
Registrazione
Per accedere al sito, l’utente deve prima registrarsi. La registrazione avviene tramite la pagina signup.php, che svolge le seguenti operazioni:

Se è attiva una sessione, ridireziona il client alla pagina home.php.
Visualizza un form per richiedere le informazioni dell’utente al fine della registrazione.
Come minimo, devono essere richiesti:
Nome
Cognome
E-mail
Nome utente
Password
Conferma password
Siete liberi di aggiungere ulteriori campi (es. numero di telefono).
Il form deve effettuare il submit alla pagina stessa, previa validazione dei campi tramite JavaScript:
Tutti i campi devono essere riempiti.
Il campo “e-mail” deve contenere il simbolo @ (siete liberi di implementare controlli più esaustivi).
Le password inserite devono coincidere.
Il nome utente non deve essere già presente nel database.
Questo controllo va effettuato tramite AJAX.
Suggerimento: non effettuate il fetch all’interno dell’evento submit del form, poichè il controllo deve essere sincrono. Piuttosto, associate all’evento blur del campo username un handler che verifichi la disponibilità dello username, e memorizzi una variabile globale che indichi se questo è valido o no. Avvisate opportunamente l’utente qualora lo username sia già preso (es. colorate di rosso il bordo del campo username e/o mostrate un messaggio di errore).
Se sono presenti dati inviati tramite form, verifica la validità dei dati usando gli stessi criteri specificati sopra.
Se i dati sono validi, aggiungi l’utente al database, effettua automaticamente il login e ridireziona il client alla pagina home.php.
Altrimenti, mostra il form, riempendo automaticamente i campi con i valori inseriti precedentemente dall’utente, e mostra i messaggi di errore opportuni.
Login
Il login avviene tramite la pagina login.php, che richiede all’utente l’inserimento di username e password.

Opzionale: implementare un meccanismo di “ricordami” tramite cookie.
I dati vengono inviati alla pagina stessa, che verifica le credenziali:

In caso di credenziali valide, crea la sessione e ridirezione il client verso home.php.
Altrimenti, mostra nuovamente il form e un messaggio di errore.
Logout
Il logout avviene tramite la pagina logout.php. La pagina elimina i dati di sessione e ridireziona il client verso login.php.

Home page
La home page è visualizzata dalla pagina home.php. All’apertura, è necessario verificare la presenza di una sessione avviata tramite login. In caso contrario, il client viene ridirezionato verso login.php.

La struttura della pagina deve contenere:

A sinistra, un menù con link verso:
Home
Ricerca
Raccolte (o il sinonimo che avete scelto)
Logout
A destra, il contenuto della pagina.
Tutte le pagine del sito, tranne login.php e signup.php devono avere questo layout.

La home page deve visualizzare l’elenco di raccolte create, ciascuna visualizzata tramite un box contenente un’immagine e il nome della raccolta. Cliccando sul box, viene aperta la pagina collection.php che mostra i dati della raccolta (siete liberi di aggiungere opportunamente parametri GET all’URL).

Inoltre, la home page deve fornire una sezione per la creazione di una nuova raccolta (inizialmente vuota, con immagine della raccolta impostata ad un’immagine di default presente sul server). La creazione della raccolta deve avvenire tramite AJAX. All’inserimento, la sezione della pagina che contiene le raccolte viene ricaricata (tramite JavaScript), in modo da mostrare quella appena inserita.

Ricerca dei contenuti
Il link di ricerca nel menù porta alla pagina search.php. Questa pagina contiene un campo di testo e un pulsante per effettuare la ricerca di contenuti tramite le API REST del servizio scelto.

Il funzionamento deve essere il seguente:

L’utente inserisce una stringa nel campo di ricerca, e clicca il bottone.
Tramite JavaScript, viene inviata una richiesta alla pagina do_search.php sul server, contenente il testo cercato.
La pagina do_search.php si collega alle API del servizio scelto, reperisce i risultati e tutte le informazioni associate, e le restituisce in formato JSON al client. Le informazioni minime da restituire sono:
Titolo del contenuto
Identificativo della risorsa sul servizio
Immagine del contenuto
Il client visualizza le informazioni restituite dal server, e permette all’utente di selezionarne una ed aggiungerla ad una raccolta esistente.
Se l’immagine associata alla raccolta è quella di default impostata al momento della creazione, aggiornala con l’immagine del contenuto selezionato.
L’inserimento avviene inviando una richiesta AJAX al server
Visualizzazione delle raccolte
La pagina collection.php riceve tramite parametro GET l’identificativo locale (cioè, sul vostro database) di una raccolta. Per prima cosa, verifica che la raccolta sia associata all’utente attivo; in caso contrario, mostra un messaggio di errore.

La pagina visualizza l’elenco di contenuti inseriti in una raccolta, reperiti tramite AJAX dal server. Per ciascun contenuto vengono visualizzati l’immagine associata (come icona) e il titolo. Cliccando sull’immagine o sul titolo contenuto vengono mostrate tutte le informazioni aggiuntive del contenuto; cliccando nuovamente, queste informazioni vengono nascoste.

Ad ogni contenuto deve essere associato un pulsante/link per eliminare il contenuto dalla raccolta

L’eliminazione avviene tramite richiesta AJAX al server. Al completamento, l’elenco di contenuti della raccolta viene ricaricato.
Se, dopo l’eliminazione del contenuto della raccolta, non c’è nessuna raccolta del database che faccia riferimento a quel contenuto, è necessario eliminare anche il contenuto stesso dal database.
