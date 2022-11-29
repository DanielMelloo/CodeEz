const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["<-- Para visualizar informações adicionais, mantenha pressionado o card desejado por alguns instantes -->"];
const typingDelay = 50;
const erasingDelay = 5;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});










const typedTextSpanS = document.querySelector(".typedTextSwap");
const cursorSpanS = document.querySelector(".cursorSwap");

const textArrayS = ["Desafiador","Evoluir","Aprender","Legal","Vida"];
const typingDelayS = 200;
const erasingDelayS = 50;
const newTextDelayS = 500; // Delay between current and next text
let textArraySIndexS = 0;
let charIndexS = 0;

function typeS() {
  if (charIndexS < textArrayS[textArraySIndexS].length) {
    if(!cursorSpanS.classList.contains("typing")) cursorSpanS.classList.add("typing");
    typedTextSpanS.textContent += textArrayS[textArraySIndexS].charAt(charIndexS);
    charIndexS++;
    setTimeout(typeS, typingDelayS);
  } 
  else {
    cursorSpanS.classList.remove("typing");
  	setTimeout(eraseS, newTextDelayS);
  }
}

function eraseS() {
	if (charIndexS > 0) {
    if(!cursorSpanS.classList.contains("typing")) cursorSpanS.classList.add("typing");
    typedTextSpanS.textContent = textArrayS[textArraySIndexS].substring(0, charIndexS-1);
    charIndexS--;
    setTimeout(eraseS, erasingDelayS);
  } 
  else {
    cursorSpanS.classList.remove("typing");
    textArraySIndexS++;
    if(textArraySIndexS>=textArrayS.length) textArraySIndexS=0;
    setTimeout(typeS, typingDelayS + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArrayS.length) setTimeout(typeS, newTextDelayS + 250);
});


