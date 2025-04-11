let task = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector(".add_task");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let nbtn = document.createElement("button");
    let newDiv = document.createElement("div");
    newDiv.classList.add("list_item");
    nbtn.classList.add("btn")
    if(task.value.length==0){
        alert("please add task !");
    }else{
        item.innerText=`${task.value}`;
        nbtn.innerText="delete";
        newDiv.appendChild(item);
        newDiv.appendChild(nbtn);
        ul.appendChild(newDiv);
        task.value="";
    }
});


// deletinf to task
ul.addEventListener("click",function(event){
   if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
   }

});
// let delButts = document.querySelectorAll(".btn");
// for (const del of delButts ) {
//     del.addEventListener("click",()=>{
//     const liItem = document.querySelector("li");
//     liItem.remove();
// });
// }
