/*
function onText(json){
console.log(json);
console.log(json[0]);
console.log("json.length",json[0].length);
*/

console.log(window.location.href.replace());
$res =getUrlParameter(window.location.href.replace());
console.log($res);
console.log($res.title);

let click=0;

function getUrlParameter(url) {
  var toReturn = {};
  var questionSplit = url.split('?');
  questionSplit.shift();
  var onlyParameters = questionSplit.join('?');
  var splittedParameters = onlyParameters.split('&');
  for (var c = 0; c < splittedParameters.length; c++) {
      var parts = splittedParameters[c].split('=');
      if ($.trim(parts[0]) != '') {
          toReturn[parts[0]] = parts[1];
      }
  }
  return toReturn;
}



const container = document.querySelector(".container");
const section_result = document.querySelector('.section-result');
$(document).ready( function() {
  
  $(".container").ready(function(event) {  
      $.ajax({
          url: "collection_print.php",
          dataType: 'json',
          method: 'post',
          data: { 
               'titolo' : $res.title
          }, 
          success: function(data){
            section_result.innerHTML = "";

            console.log(data);
            console.log(data[0]);
            console.log(data[0][0]);
  
            console.log(data[0][0].nome_raccolta);

            const container_top = document.querySelector(".container");

            const div_image = document.createElement('div');
            div_image.classList.add("card");
            container_top.appendChild(div_image);

            const link_image = document.createElement('img');
            link_image.src = data[0][0].url_raccolta;
            link_image.classList.add("card-image");
            div_image.appendChild(link_image);

            const div_titolo_raccolta = document.createElement("div");
            div_titolo_raccolta.classList.add("div_titolo_raccolta");
            container_top.appendChild(div_titolo_raccolta);

            const titolo = document.createElement("h1");
            titolo.classList.add("titolo");
            titolo.textContent = "Raccolta: " + data[0][0].nome_raccolta;
            div_titolo_raccolta.appendChild(titolo);
            

            for(let i=0; i<data[0].length ; i++){

                const result_container = document.createElement('div');
                result_container.classList.add("result_container");
                section_result.appendChild(result_container);
                
                const div_img_tit = document.createElement("div");
                div_img_tit.classList.add("div_img_tit");
                div_img_tit.dataset.nome_raccolta = data[0][i].nome_raccolta;
                div_img_tit.dataset.url_img_raccolta = data[0][i].url_raccolta;
                div_img_tit.dataset.username = data[0][i].username;
                div_img_tit.dataset.id_contenuto = data[0][i].id_contenuto;
                div_img_tit.dataset.url_contenuto = data[0][i].url_contenuto
                div_img_tit.dataset.title = data[0][i].title;
                result_container.appendChild(div_img_tit);

                const div_image = document.createElement('div');
                div_image.classList.add("div_image");
                div_img_tit.appendChild(div_image);
          
                const link_image = document.createElement('img');
                link_image.src = data[0][i].url_contenuto;
                link_image.classList.add("link_image");
                div_image.appendChild(link_image);
          
                const div_title = document.createElement('div');
                div_title.classList.add("div_title");
                div_img_tit.appendChild(div_title);
          
                const title = document.createElement('h3');
                title.textContent = data[0][i].title;
                div_title.appendChild(title);

                const div_button = document.createElement('div');
                div_button.classList.add("div_button");
                //div_button.classList.add("hidden");
                result_container.appendChild(div_button);
                
                const container_button = document.createElement('div');
                container_button.classList.add("container_button");
                div_button.appendChild(container_button);

                let button_add = document.createElement("button");
                button_add.type = "submit";
                button_add.classList.add("button_delete");
                button_add.innerHTML = "Elimina";
                button_add.dataset.nome_raccolta = data[0][i].nome_raccolta;
                button_add.dataset.url_img_raccolta = data[0][i].url_raccolta;
                button_add.dataset.username = data[0][i].username;
                button_add.dataset.id_contenuto = data[0][i].id_contenuto;
                button_add.dataset.url_contenuto = data[0][i].url_contenuto
                button_add.dataset.title = data[0][i].title;
                container_button.appendChild(button_add);
                }

                let div_images = document.querySelectorAll(".div_image");
                for (let div_image of div_images){
                  div_image.addEventListener("click", mostra_info ); 
                }
                
                let div_titles = document.querySelectorAll(".div_title");
                for (let div_title of div_titles){
                  div_title.addEventListener("click", mostra_info );
                }
                
                console.log("main");

                if (click != 0){
                  let div_click = document.querySelectorAll(".div_img_tit");
                  if (div_click.dataset.id_contenuto == click){
                      console.log("add_event");
                      
                      div_click.addEventListener("click",mostra_contenuto );
                  }
                 }

/*
                let delete_buttons = document.querySelectorAll(".button_delete");
                for (let delete_button of delete_buttons){
                  delete_button.addEventListener("click", delete_img);
                  
                } */
                const button_delete = document.querySelector(".button_delete");

  $(document).ready( function() {

    $(".button_delete").click(function(event) {  //chiamata AJAX  //action="#"     name='form' class="form" method="post"
         //event.preventDefault();
         $.ajax({
             url: 'collection_delete.php',
             dataType: 'json',
             method: 'post',
            data: { 
              'titolo_raccolta' : event.currentTarget.dataset.nome_raccolta,
              'url_img_raccolta': event.currentTarget.dataset.url_img_raccolta,
              'id_contenuto': event.currentTarget.dataset.id_contenuto,
              'titolo_img': event.currentTarget.dataset.title 
             }, 
             success: function(data){
              console.log("function");

              window.location.reload();
              //fetch('http://localhost/mhw4/collection_refresh.php'); //.then(onResp).then(onText);
              

              }
       });  
    });
  });


          }
      });  
  });
});


function mostra_info(event){
  console.log("event.currentTarget",event.currentTarget);
  console.log("event.currentTarget",event.currentTarget.parentNode );
  console.log("event.currentTarget",event.currentTarget.parentNode.childNodes[0] );

 let div_imgtit = event.currentTarget.parentNode;
  event.currentTarget.parentNode.childNodes[0].classList.add("hidden");
  event.currentTarget.parentNode.childNodes[1].classList.add("hidden");

  console.log(div_imgtit.dataset.title);
  console.log(div_imgtit.dataset.nome_raccolta);
  console.log(div_imgtit.dataset.username);
  console.log( div_imgtit.dataset.id_contenuto);

  const div_info = document.createElement("div");
  div_info.classList.add("div_info");
  div_imgtit.appendChild(div_info);

  const info_poster= document.createElement("p");
  info_poster.classList.add("info");
  info_poster.innerHTML = "Titolo poster : " + div_imgtit.dataset.title;
  div_info.appendChild(info_poster);

  const info_raccolta= document.createElement("p");
  info_raccolta.classList.add("info");
  info_raccolta.innerHTML = "Nome raccolta : " + div_imgtit.dataset.nome_raccolta;
  div_info.appendChild(info_raccolta);

  const info_username= document.createElement("p");
  info_username.classList.add("info");
  info_username.innerHTML  = "raccolta di : " + div_imgtit.dataset.username;
  div_info.appendChild(info_username);

  const info_id= document.createElement("p");
  info_id.classList.add("info");
  info_id.innerHTML  = "Id immagine : " + div_imgtit.dataset.id_contenuto;
  div_info.appendChild(info_id);

  div_info.addEventListener("click", mostra_contenuto ); 
}


const button_delete = document.querySelector(".button_delete");

  $(document).ready( function() {

    $(".button_delete").click(function(event) {  //chiamata AJAX  //action="#"     name='form' class="form" method="post"
         //event.preventDefault();
         $.ajax({
             url: 'collection_delete.php',
             dataType: 'json',
             method: 'post',
            data: { 
              'titolo_raccolta' : event.currentTarget.dataset.nome_raccolta,
              'url_img_raccolta': event.currentTarget.dataset.url_img_raccolta,
              'id_contenuto': event.currentTarget.dataset.id_contenuto,
              'titolo_img': event.currentTarget.dataset.title 
             }, 
             success: function(data){
              section_result.innerHTML = "";
               for(let i=0; i<data.Search.length; i++){

               console.log(data.Search[i]);

               section_result.dataset.id_img = data.Search[i].imdbID;
               
               }

              }
       });  
    });
  });


 function mostra_contenuto(event){
  console.log(" event.currentTarget", event.currentTarget);
  console.log(" event.currentTarget", event.currentTarget.parentNode);
  console.log("event.currentTarget.parentNode.childNodes[0]", event.currentTarget.parentNode.childNodes[0]);
  console.log(" event.currentTarget", event.currentTarget.parentNode.childNodes[0].childNodes);
 console.log("mostra_contenuto");
 
  event.currentTarget.classList.add("hidden");

  event.currentTarget.parentNode.childNodes[0].classList.remove("hidden");
  event.currentTarget.parentNode.childNodes[1].classList.remove("hidden");
 }