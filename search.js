
const form = document.querySelector(".formnew");
const section_result = document.querySelector('.section-result');
  $(document).ready( function() {
      console.log(form.search.value);
      
    $(".formnew").submit(function(event) {  //chiamata AJAX  //action="#"     name='form' class="form" method="post"
         event.preventDefault();
         $.ajax({
             url: "do_search.php",
             dataType: 'json',
             method: 'post',
            data: { 
                'search' : form.search.value
             }, 
             success: function(data){
              section_result.innerHTML = "";
               for(let i=0; i<data.Search.length; i++){

               console.log(data.Search[i].Title);
               console.log(data.Search[i].Poster);
               console.log(data.Search[i].imdbID);

               section_result.dataset.id_img = data.Search[i].imdbID;

               const result_container = document.createElement('div');
               result_container.classList.add("result_container");
               section_result.appendChild(result_container);
               
               const div_image = document.createElement('div');
               div_image.classList.add("div_image");
               result_container.appendChild(div_image);
        
               const link_image = document.createElement('img');
               link_image.src = data.Search[i].Poster;
               link_image.classList.add("link_image");
               div_image.appendChild(link_image);
        
               const div_title = document.createElement('div');
               div_title.classList.add("div_title");
               result_container.appendChild(div_title);
        
               const title = document.createElement('h3');
               title.textContent = data.Search[i].Title;
               div_title.appendChild(title);

               const div_button = document.createElement('div');
               div_button.classList.add("div_button");
               //div_button.classList.add("hidden");
               result_container.appendChild(div_button);
               
               const container_button = document.createElement('div');
               container_button.classList.add("container_button");
               div_button.appendChild(container_button);

               let button_add = document.createElement("button");
               button_add.classList.add("button_add");
               button_add.innerHTML = "Aggiungi Subito!";
               container_button.appendChild(button_add);

               const input_title = document.createElement("input");
               input_title.type = "input";
               input_title.name = "input_title";
               input_title.classList.add("hidden");
               input_title.value = data.Search[i].Title;
               container_button.appendChild(input_title);

               const input_img = document.createElement("input");
               input_img.type = "input";
               input_img.name = "input_img";
               input_img.classList.add("hidden");
               input_img.value = data.Search[i].Poster;
               container_button.appendChild(input_img);

               const input_id = document.createElement("input");
               input_id.type = "input";
               input_id.name = "input_id";
               input_id.classList.add("hidden");
               input_id.value = data.Search[i].imdbID;
               container_button.appendChild(input_id);
          
               /*
               container_button.appendChild(button_add);
               div_button.appendChild(container_button);
               result_container.appendChild(div_button);
*/
               }
               /*
                const results = document.querySelectorAll(".result_container");
                for (result of results ){
                    result.addEventListener("click", aggiungi_poster);
                } */
                fetch('http://localhost/mhw4/add_search.php').then(onResponse).then(onTextReady); //, body: FormData,
                
                const buttons = document.querySelectorAll(".button_add");
                for (let button of buttons){
                  button.addEventListener("click", raccogli);
                }  
              }
       });  
    });
  });
/*
  function onText(json){
    console.log(json);
  }

  function onResp(response){
    
    return response.json();
}
*/
function raccogli(event){
  console.log("raccogli");
  console.log("event",event);
  console.log("event.target",event.target);
  console.log("event.currentTarget",event.currentTarget);
  console.log("event.currentTarget.parentNode",event.currentTarget.parentNode);
  console.log("event.currentTarget.parentNode.childNodes[4]",event.currentTarget.parentNode.childNodes[4]);
 // console.log(event.currentTarget.parentNode.childNodes[4].getElementByClassName);


console.log(  event.currentTarget.parentNode.childNodes[4].options[event.currentTarget.parentNode.childNodes[4].selectedIndex].value);
console.log(  event.currentTarget.parentNode.childNodes[4].options[event.currentTarget.parentNode.childNodes[4].selectedIndex].text);

let select_option = event.currentTarget.parentNode.childNodes[4].options[event.currentTarget.parentNode.childNodes[4].selectedIndex].value;
let title = event.currentTarget.parentNode.childNodes[1].value;
let link_image = event.currentTarget.parentNode.childNodes[2].value;
let img_id = event.currentTarget.parentNode.childNodes[3].value;
console.log("let title =" ,title);
console.log("let link_image =", link_image);
console.log("let img_id =" ,img_id );
console.log("select_option");


const form_data = new FormData();
form_data.append("titolo", title);
form_data.append("link_img", link_image);
form_data.append("input_id", img_id); 
form_data.append("select_option", select_option);
fetch('http://localhost/mhw4/add_db.php',{ method: "post", body: form_data }); //.then(onResp).then(onText);
}



 function onTextReady(json){
    console.log(json);
    console.log(json[0]);
    console.log("json.length",json[0].length);
    
    const conts = document.querySelectorAll(".container_button");
    console.log(conts[0]);
    const sel = document.querySelector(".select");
    console.log(sel);
    
    if(sel === null){
        for(cont of conts){
          const select = document.createElement("select");
          select.classList.add("select");

          for(let i=0; i<json[0].length; i++){
              console.log(json[0][i].nome_raccolta);
              const option = document.createElement("option");
              option.textContent = json[0][i].nome_raccolta;
              option.value = json[0][i].nome_raccolta;
              option.classList.add("option");
              select.appendChild(option);
  
          }
          cont.appendChild(select);
          //var click = document.getElementByClassName("option");

        }
      }

    }


function onResponse(response){
    return response.json();
}




  
  

