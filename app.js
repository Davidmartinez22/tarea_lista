let button = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

function AddTask(){
    if (inputTexto.value !== ""){
     let nuevoItem = document.createElement("li");
     nuevoItem.textContent = inputTexto.value;

     nuevoItem.classList.add("my-3");

     nuevoItem.addEventListener("click", function(){
        alert("Has pinchado en: " + nuevoItem.textContent)
        nuevoItem.remove();
     });
     lista.appendChild(nuevoItem);
     addbuttonBorrar(nuevoItem);
    }
};


function addbuttonBorrar(nuevoItem){
    let buttonBorrar= document.createElement("button");
    buttonBorrar.textContent="Borrar";
    buttonBorrar.setAttribute("class", "mx-3 float-start btn btn-primary");
    console.log(buttonBorrar);
    nuevoItem.appendChild(buttonBorrar);
};



button.addEventListener("click",function () {
    AddTask();

});


inputTexto.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key ==='Enter') {
        AddTask();
    }
});






// let lista = document.querySelector("ul");
// let nuevoItem = document.createElement("li");
// nuevoItem.textContent="Elemento nuevo a borrar"