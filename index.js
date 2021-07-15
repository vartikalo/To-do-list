let addbutton = document.getElementById("add");
let todoid = document.getElementById("todoId");
let input = document.getElementById("inputField");

// addbutton.addEventListener("click", function(){
//     var items = document.createElement('p');
//     items.innerText = input.value; 
// })

addbutton.addEventListener("click", function(){
    var para = document.createElement('p');
    para.classList.add("para-style");
    para.innerText = input.value;
    todoid.appendChild(para);
    input.value = "";
    para.addEventListener("click", function(){
        para.style.textDecoration = "line-through";
    })
    para.addEventListener("dblclick", function(){
        para.removeChild(para);
    })
})