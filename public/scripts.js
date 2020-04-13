const receitas = document.querySelectorAll(".receitas")
const receitas2 = document.querySelectorAll(".admin-receitas-details")
const esconder = document.querySelectorAll("#action");

for(let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener("click", function(){
        window.location.href = `/recipe/${i}`
    })
}

for(let i = 0; i < receitas2.length; i++) {
    receitas2[i].addEventListener("click", function(){
        window.location.href = `/admin/recipes/${i}`
    })
}

for(let i = 0; i < esconder.length; i++) {  
    esconder[i].addEventListener("click", function(){
        document.querySelector("#lista" + i).classList.toggle("esconder")
        if(document.querySelector("#lista" + i).classList.contains("esconder")){
           esconder[i].innerHTML = "mostrar"
        } else {
            esconder[i].innerHTML = "esconder"
        }
    })
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");
  
    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
  }
  
document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addPasso() {
    const passos = document.querySelector("#passos");
    const fieldContainer = document.querySelectorAll(".passo");
  
    // Realiza um clone do último passoe adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
  
    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;
  
    // Deixa o valor do input vazio
    newField.children[0].value = "";
    passos.appendChild(newField);
  }
  
document.querySelector(".add-passo").addEventListener("click", addpasso);