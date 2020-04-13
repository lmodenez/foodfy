const receitas = document.querySelectorAll(".receitas")
const adminDetails = document.querySelectorAll(".admin-receitas-details")
const esconder = document.querySelectorAll("#action");

for(let i = 0; i < receitas.length; i++) {
    receitas[i].addEventListener("click", function(){
        window.location.href = `/recipe/${i}`
    })
}

for(let i = 0; i < adminDetails.length; i++) {
    adminDetails[i].addEventListener("click", function(){
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
    const ingredients = document.getElementById("ingredients");
    const input = document.createElement("input")
    const div = document.createElement("div");

    input.setAttribute("type","text")
    input.setAttribute("name","ingredients[]")
    input.setAttribute("style","font-family: Roboto; font-size: 16px;")

    div.setAttribute("class", "ingredient")

    ingredients.appendChild(input);
  }

function addPasso() {
    const passos = document.getElementById("passos");
    const input = document.createElement("input")
    const div = document.createElement("div");

    input.setAttribute("type","text")
    input.setAttribute("name","preparation[]")
    input.setAttribute("style","font-family: Roboto; font-size: 16px;")

    div.setAttribute("class", "passo")

    passos.appendChild(input);
  }