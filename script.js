// $(document).ready(function() { 
//   window.location.href='#roadMapIndex';
//   });


var checkbox = $('#button-menu');

$('body').not('menuNav').click(function() {
  checkbox.prop("checked", false);
});

$('#button-menu, #menuNav').click(function(event) {
  event.stopPropagation();

});


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




const typedTextSpanToolTips = document.querySelector(".typedTextToolTips");
const cursorSpanToolTips = document.querySelector(".cursorToolTips");

const textArrayToolTips = ["<-- Clique no card para ver o projeto -->"];
const typingDelayToolTips = 50;
const erasingDelayToolTips = 5;
const newTextDelayToolTips = 2000; // Delay between current and next text
let textArrayToolTipsIndexToolTips = 0;
let charIndexToolTips = 0;

function typeToolTips() {
  if (charIndexToolTips < textArrayToolTips[textArrayToolTipsIndexToolTips].length) {
    if(!cursorSpanToolTips.classList.contains("typing")) cursorSpanToolTips.classList.add("typing");
    typedTextSpanToolTips.textContent += textArrayToolTips[textArrayToolTipsIndexToolTips].charAt(charIndexToolTips);
    charIndexToolTips++;
    setTimeout(typeToolTips, typingDelayToolTips);
  } 
  else {
    cursorSpanToolTips.classList.remove("typing");
  	setTimeout(eraseToolTips, newTextDelayToolTips);
  }
}

function eraseToolTips() {
	if (charIndexToolTips > 0) {
    if(!cursorSpanToolTips.classList.contains("typing")) cursorSpanToolTips.classList.add("typing");
    typedTextSpanToolTips.textContent = textArrayToolTips[textArrayToolTipsIndexToolTips].substring(0, charIndexToolTips-1);
    charIndexToolTips--;
    setTimeout(eraseToolTips, erasingDelayToolTips);
  } 
  else {
    cursorSpanToolTips.classList.remove("typing");
    textArrayToolTipsIndexToolTips++;
    if(textArrayToolTipsIndexToolTips>=textArrayToolTips.length) textArrayToolTipsIndexToolTips=0;
    setTimeout(typeToolTips, typingDelayToolTips + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArrayToolTips.length) setTimeout(typeToolTips, newTextDelayToolTips + 250);
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




