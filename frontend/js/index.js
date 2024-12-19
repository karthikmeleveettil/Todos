const inp=document.getElementById("inp")
const listContainer=document.getElementById("list-container")

function addTask(){
    if(inp.value ===''){
        alert("You Must Write Anything")
    }
    else{
        let li=document.createElement("li");
        li.textContent = inp.value;
        console.log(inp.value);
        
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = " \u00d7";
        li.appendChild(span);
    }
    inp.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}