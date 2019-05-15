
// *********************************************************** CONTROLLLO ESISTENZA RACCOLTE E STAMPA *************************************+**
const section_collection = document.querySelector(".section-collection");
$(document).ready( function() {
      
    $(".section-collection").ready(function(event){  
      
         console.log("funzione stampa");
         $.ajax({
             url: "home_print.php",
             dataType: 'json',
             method: 'post',
            data: { 
                'dato' : "control"
             }, 
             success: function(data){
                 console.log("data : ", data);
                 console.log("data[0] : ",data[0]);


                 for(let i =0; i<data[0].length ; i++){
                     
                   console.log(data[0][i]);
                   console.log(data[0][i].id_raccolta);
                   console.log(data[0][i].nome_raccolta);
                   console.log(data[0][i].url_raccolta);
                   console.log(data[0][i].username);
                   

                    let n_card_section = document.querySelector(".card-section");
                     console.log(n_card_section);

                     
                              if (n_card_section === null){
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
                      new_card.dataset.titolo = data[0][i].nome_raccolta;
                      new_card.classList.add("card");
                      card_container.appendChild(new_card);


/*
                      let form = document.createElement("form");
                      form.action = ("http://localhost/mhw4/collection.php?title=" + data[0][i].nome_raccolta);
                      form.classList.add("form");
                      new_card.appendChild(form);

                      let button_link = document.createElement("button");
                      button_link.type = ("submit");
                      button_link.classList.add("button_link")
                      
  */                                         
                      let card_img = document.createElement("img");
                      card_img.classList.add("card-image");
                      card_img.src = data[0][i].url_raccolta;
                      new_card.appendChild(card_img);

                      console.log("data",data);
                      console.log("d",data[0]);
                      console.log(data[0][i]);
                      console.log(data[0][i].nome_raccolta);
                      
                      
                    

                      let card_copy = document.createElement("div");
                      card_copy.classList.add("card-copy");
                     new_card.appendChild(card_copy);

                      let h3 = document.createElement("h3");
                      h3.classList.add("card-h3");
                      h3.textContent = data[0][i].nome_raccolta;
                      card_copy.appendChild(h3);
                      console.log("creo titolo");

                      let a = document.createElement("a");
                      a.href = ("http://localhost/mhw4/collection.php?title=" + data[0][i].nome_raccolta);
                      a.innerHTML = "Vai alla racolta";
                      a.classList.add("a");
                      card_copy.appendChild(a);
                      
                 /*
                      let p = document.createElement("p");
                      p.classList.add("card-p");
                      p.textContent = "Nessun contenuto"
                      card_copy.appendChild(p);

                   */  
                
              }
              /*
              const clicks = document.querySelectorAll(".card");
              for (let click of clicks){
                console.log(click);
                console.log("click");
                
                
                click.addEventListener("click", salva_titolo);
              } */



             }

         });
    });
  });
/*
  function salva_titolo(event){
      
   console.log("event.dataset.titolo",event.currentTarget.dataset.titolo);
   let title = event.currentTarget.dataset.titolo;
   const form_data = new FormData();
   form_data.append("titolo", title);
   //fetch('http://localhost/mhw4/home_print_get_title.php',{ method: "post", body: form_data }); //.then(onResp).then(onText);
   fetch('http://localhost/mhw4/home.php',{ method: "post", body: form_data });

  }  */




