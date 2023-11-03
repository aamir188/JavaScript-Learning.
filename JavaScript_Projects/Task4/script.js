var btnInput = document.getElementById("output");
var btn1 = document.getElementById('btn');
function addNew(){
    let containerHTML = document.querySelector('.container').outerHTML;
    let outPutDiv= document.createElement('div');
    outPutDiv.innerHTML = containerHTML;
    btnInput.appendChild(outPutDiv);

    var removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.id = 'removeid';
        removeButton.onclick = removeElements;
        outPutDiv.appendChild(removeButton);


}
    function removeElements() {
        btnInput.innerHTML = ''; // Remove all child elements
    }
 







// my code
// var btnInput = document.getElementById("output");
// var btn1 = document.getElementById('btn');
// function addNew(){
//     let containerHTML = document.querySelector('.container').outerHTML;
//     let outPutDiv= document.createElement('div');
//     outPutDiv.innerHTML = containerHTML;
//     btnInput.appendChild(outPutDiv);

//     var removeButton = document.createElement('button');
//         removeButton.textContent = "Remove";
//         removeButton.id = 'removeid';
//         removeButton.onclick = removeElements;
//         outPutDiv.appendChild(removeButton);


// }
//     function removeElements() {
//         btnInput.innerHTML = ''; // Remove all child elements
//     }
 


    
// 2nd Merhod
// const inputContent2 = document.getElementById("output");
// // let button = document.getElementById('btn');


// function addNew() {

//     let div1 = document.createElement('div');
//     div1.setAttribute("id", "first-div")
//     inputContent2.appendChild(div1)

//     let label = document.createElement('label');
//     label.for = 'myName2';
//     label.innerText = 'Name:';

//     let input = document.createElement('input');
//     input.placeholder = 'Name Here...';

  
//     div1.appendChild(label);
//     div1.appendChild(input);
// }