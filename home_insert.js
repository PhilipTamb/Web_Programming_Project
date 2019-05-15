
//  ************************************************************ INSERIMENTO NUOVA RACCOLTA **************************************************
const form = document.querySelector(".form");

console.log("init");
  $(document).ready( function() {
      
    $(".form").submit(function(event) {  
         console.log(form.title.value);
         
         event.preventDefault();
         console.log(form.title.value);
         $.ajax({
             url: "home_insert.php",
             dataType: 'json',
             method: 'post',
            data: { 
                'name_collection' : form.title.value
             }, 
             success: function(data){
                 console.log(data);
               // let variabile = eval(data);
;
                     if (data != null && form.title.value != "" &&  form.title.value != null  ){
                          console.log("creo collezione");
/*
                          let exist_error = document.querySelector(".errore");
                          if(exist_error !== null){
                            let  container_collection = document.querySelector(".container-collection");
                            exist_error.classList.("hidden");
                            container_collection.appendChild(div_errore);
                            }  */
                          let n_card_section = document.querySelector(".card-section");
                           console.log("n_card_section",n_card_section);

                           
                                    if (n_card_section === null){
                                      console.log("prima collezione");
                                        let middle_section = document.querySelector(".middle-section");
                                        let separation = document.createElement("div");
                                        separation.classList.add("separation");
                                        middle_section.appendChild(separation);

                                        let card_section = document.createElement("section");
                                        card_section.classList.add("card-section");
                                        middle_section.appendChild(card_section);

                                        let card_container = document.createElement("div");
                                        card_container.classList.add("card-container");
                                        card_section.appendChild(card_container);

                                    }

                            let card_container = document.querySelector(".card-container");
                            let new_card = document.createElement("div");
                            new_card.dataset.titolo = form.title.value;
                            new_card.classList.add("card");
                            card_container.appendChild(new_card);

                            console.log(" form.title.value",  form.title.value);

                            
                            let card_img = document.createElement("img");
                            card_img.classList.add("card-image");
                            card_img.src = data;
                            new_card.appendChild(card_img);

                            let card_copy = document.createElement("div");
                            card_copy.classList.add("card-copy");
                           new_card.appendChild(card_copy);

                            let h3 = document.createElement("h3");
                            h3.classList.add("card-h3");
                            h3.textContent = form.title.value;
                            card_copy.appendChild(h3);

                            let a = document.createElement("a");
                            a.href = ("http://localhost/mhw4/collection.php?title=" + form.title.value);
                            a.innerHTML = "Vai alla racolta";
                            a.classList.add("a");
                            card_copy.appendChild(a);
                     /*
                            let p = document.createElement("p");
                            p.classList.add("card-p");
                            p.textContent = "Nessun contenuto"
                            card_copy.appendChild(p);
                            */
                      
                    }else{
                       console.log("raccolta gia esistente");
                       let exist_error = document.querySelector(".errore");
                      if(exist_error === null){
                        let  container_collection = document.querySelector(".container-collection");
                        let div_errore = document.createElement("p");
                        div_errore.classList.add("errore");
                        div_errore.textContent = "Raccolta non valida";
                        container_collection.appendChild(div_errore);
                        }

                       }

                     


             }

         });
    });

  });


