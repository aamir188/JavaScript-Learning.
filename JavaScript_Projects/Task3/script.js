// var task = [];
let tasktext    = document.getElementById("tasktext");
let activity_list = document.getElementById("textlist");
// const list = document.getElementById("activity"); // this code for this block [ // list.innerText += tasktext.value;].
function AddTask(){
    if (tasktext.value == "") {
        alert("Please Enter Task")
    }
    else{
        
        let newEle= document.createElement("ul");
        newEle.innerHTML =  `${tasktext.value} <i>&times;</i>`;
        newEle.className = "list-item";
        activity_list.appendChild(newEle);
        tasktext.value = "";
        newEle. querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove ();
                }
            }

        }



















    // task.push(task)
    // list.innerText += tasktext.value;
     //we can write this code
    // in this method the code will be run but inside a id "activity"
    // tag but we should to run this code in dav tag like  <ul id="tasklist"> 
    // so that is why we wrote the code in  <ul id="tasklist">.
//     activity_list.innerHTML += ' <div class="div_activities" ><p id="activity"> '+tasktext.value+'</p><div><span class="close-icon">&times;</span> </div></div>';
   	
//     let newEle= document.createElement(ul)
// newEle.innerHTML =  `${input.value} <i class = "fa-solid fa-trash"></i>`;
// tasktext.appendChild(newEle);

//     document.getElementById("close-icon").addEventListener("click", remove);
//   
// function remove(){
//     // const parent = document.getElementById("tasklist");
//     // const child =  document.getElementById('<div class="div_activities" ><p id="activity"> '+tasktext.value+'</p><div><span class="close-icon">&times;</span> </div></div>');
//     // parent.removeChild(child);
//     // activity_list.remove();

//     // var taskElement = document.querySelector('div_activities');
//     // taskElement.parentNode.removeChild(taskElement);  
//     activity_list.remove ();
    
// }







// var task=[];
// const tasktext=document.getElementById ("tasktext");

// function AddTask(){             
//     task.push(tasktext.value);
//     document.getElementById("tasklist").innerHTML+=' <div class="div_activities" ><p id="activity">'+tasktext.value+'</p> <div><span class="close-icon">&times;</span></div></div>';
//     tasktext.value = "";
// }