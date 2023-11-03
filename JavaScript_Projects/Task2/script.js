slidetext  =  ["Persuasion is often more effectual than force",
"Hibs and Ross County fans on final",
"Knowledge is Power"];


//Right side text
const texttag =document.getElementById("text");

currentIndex = 0;
function goNext() {

currentIndex++;
if (  currentIndex == slidetext.length ) {
    currentIndex = 0;
}
texttag.innerText = slidetext[currentIndex];
}

//Left side text
function goPrev() {

    currentIndex--;
    if (currentIndex  < 0 ) {
        currentIndex = slidetext.length - 1;

    }
    texttag.innerText = slidetext[currentIndex];
    }

//Lower Left side text
 const texttag_02 =document.getElementById("text2");

currentIndex = 0;
function goLeft() {

currentIndex++;
if (  currentIndex == slidetext.length ) {
    currentIndex = 0;
}
texttag_02.innerText = slidetext[currentIndex];
}

//Lower Left side text
function goRight() {        

    currentIndex--;
    if (currentIndex  < 0 ) {
        currentIndex = slidetext.length - 1;

    }
  
     texttag_02.innerText = slidetext[currentIndex];
    }
    setInterval(LowerTimeout, 2000);
function LowerTimeout() {
    currentIndex++;
if (currentIndex == slidetext.length) {
    currentIndex = 0;
}

}
//This is a build in library for animation but
// said that this library dont use instead of substring.
// so that bellow code we take substring.
//Automatic Text start with typing
// var typed = new Typed('#text2', {
//     strings: slidetext,
//     typeSpeed: 23,
//     loop: true,  // Enable looping
//     loopCount: Infinity,
// });



//Automatic Text start with typing
const typingElement = document.getElementById("typing-text");
let currentLineIndex = 0;
let currentCharIndex = 0;

function typeText() {
  if (currentLineIndex < slidetext.length) {
    const currentLine = slidetext[currentLineIndex];
    
    if (currentCharIndex <= currentLine.length) {
      typingElement.innerHTML = currentLine.substring(0, currentCharIndex);
      currentCharIndex++;
    } else {
      currentLineIndex++;
      currentCharIndex = 0;
    }
  } else {
    currentLineIndex = 0;
  }
}

setInterval(typeText,  80); // Adjust the speed here (50 milliseconds in this example)

// Start the typing effect immediately
typeText();
