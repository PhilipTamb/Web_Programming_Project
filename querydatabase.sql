drop database homework4;
create database homework4;

use homework4;

-- userid integer(8) auto_increment, 
create table users(
 nome varchar(50),
 cognome varchar(50),
 email text,
 nome_utente varchar(50),
 psw varchar(50),
 primary key (nome_utente)
);
-- id_raccolta integer auto_increment,
create table raccolte(
nome_raccolta varchar(50),
url_raccolta text,
username varchar(50),
primary key (nome_raccolta, username),
index new_username(username),
foreign key (username) references users(nome_utente) on delete cascade on update cascade
);

create table contenuti(
id_contenuto varchar(30),
title text,
url_contenuto text,
primary key (id_contenuto)
);


create table relazione(
id_contenuto varchar(30),
nome_raccolta varchar(50),
 nome_utente varchar(50),
primary key(id_contenuto, nome_raccolta, nome_utente),
index newidcontenuto(id_contenuto),
index newidraccolta(nome_raccolta),
index newnome_utente(nome_utente),
foreign key (id_contenuto) references contenuti(id_contenuto) on delete cascade on update cascade,
foreign key (nome_raccolta) references raccolte(nome_raccolta) on delete cascade on update cascade,
foreign key (nome_utente) references  users(nome_utente) on delete cascade on update cascade
);


