const slides = document.getElementById("slide")
const caption = document.getElementById("caption")
var currentindex=0;
const images=["img.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"];
const captions=["The woods","Cinque Terre"," Mountains fjords","Northern Lights","Nature and Sunrise","Snowy Mountains"];

// Change image from bottom?
function currentSlide( newvalue){
currentindex=newvalue;
slides.setAttribute("src",images[currentindex]);
caption.innerText=captions[currentindex];

}

function goNext(){
    currentindex++;

    if(images.length==currentindex){
        currentindex=0;
    }

    slides.setAttribute("src",images[currentindex]);
    caption.innerText=captions[currentindex];
    }

function goPrev(){
        currentindex--;
    
        if(currentindex<0){
            currentindex=images.length-1;
        }
    
        slides.setAttribute("src",images[currentindex]);
    caption.innerText=captions[currentindex];

}
setInterval(function (){goNext()},3000);