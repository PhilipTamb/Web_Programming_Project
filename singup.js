/*



*/

function controllo_submit(event){
    console.log("function controllo-SUBMIT");
    
    let event_default = event;
    let exist_error = document.querySelectorAll(".errore");
    if(exist_error !== null){
        for(let i=0; i<exist_error.length; i++){
           exist_error[i].remove();
        }
    }
    if(form.nome.value.length<2 || form.cognome.value.length<2 || form.email.value.length<2 || form.password.value.length<2 || form.conferma.value.length<2){
            console.log("CAMPI VUOTI");
            
             let div_errore = document.createElement("p");
             div_errore.classList.add("errore");
             div_errore.textContent = "Inserisci tutti i campi";
             form.appendChild(div_errore);
             event.preventDefault();
             
    }else{
        let array = form.email.value;
         for(let i = 0; i<form.email.value.length; i++) {
              if(array[i] === "@" ){
                   at = 1;
                   console.log("at", at);
                }
            }
             if(at === 0){
                       let div_errore = document.createElement("div");
                       div_errore.classList.add("errore");
                       div_errore.textContent = "Email non valida";
                       form.appendChild(div_errore);
                       event.preventDefault();
              }
              let conferma1 = form.password.value;
              let conferma2 = form.conferma.value;
              if(conferma1 !== conferma2){
                        let div_errore = document.createElement("div");
                        div_errore.classList.add("errore");
                        div_errore.textContent = "Inserisci le password correttamente";
                        form.appendChild(div_errore);
                        event.preventDefault();
               }
              if (user_exist === 1){
                event.preventDefault();
                user_exist = 0;
            } 
            
    }  

    
}
let at = 0;
let array = [ ];
let user_exist = 0;
const form = document.querySelector("form");
form.addEventListener('submit', controllo_submit);

//CONTROLLO AJAX BLUR SU NOMEUTENTE 
$(document).ready(function(){
    form.addEventListener('submit', controllo_submit);
    $("#utente").blur(function(){
        $.ajax({ url: "singup_control.php",
         dataType: 'json',
         method: 'POST',
         data:{
             'nomeutente' : form.nomeutente.value
              },
        success: function(data){
            console.log("nome utente",form.nomeutente.value);
            let variabile = eval(data);
            console.log("data", data);
            
                 if (variabile){
                      
                      user_exist = 1;
                      console.log("user_exist: utente esistente", user_exist);
                      let exist_error = document.querySelector(".errore");
                      if(exist_error === null){
                        let div_errore = document.createElement("p");
                        div_errore.classList.add("errore");
                        div_errore.textContent = "Nome utente non disponibile";
                        form.appendChild(div_errore);
                    }
                }else{
                   console.log("nessun utente");
                   let exist_error = document.querySelector(".errore");
                   if(exist_error !== null){
                     exist_error.remove();
                   }

                   
                 }
         }
         
     });

        });
    });



 