function controllo_submit(event){
    console.log("function controllo-SUBMIT");
    
    let event_default = event;
    let exist_error = document.querySelectorAll(".errore");
    if(exist_error !== null){
        for(let i=0; i<exist_error.length; i++){
           exist_error[i].remove();
        }
    }
    if(form.password.value.length<2 || form.nomeutente.value.length<2){
            console.log("CAMPI VUOTI");

             let div_errore = document.createElement("p");
             div_errore.classList.add("errore");
             div_errore.textContent = "Inserisci tutti i campi";
             form.appendChild(div_errore);
             event.preventDefault();
             
    } /*else{
        const form_data = new FormData();
        form_data.append("nomeutente", form.password.value);
        form_data.append("password", form.nomeutente.value);

        fetch('http://localhost/mhw4/login_query.php',{ method: "post", body: form_data }).then(onResp).then(onText);
      } */

    
}



const form = document.querySelector("form");
form.addEventListener('submit', controllo_submit);

/*
function onTextReady(json){
        JSON.parse=(json);


}

function onResponse(response){
    return response.json();
}
*/