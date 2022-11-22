// // ================= //
// // Section Animation //
// // ================= //

// function ativaNoScroll() {

//     document.querySelectorAll('img').forEach((img, index) => {
//       if(img.getBoundingClientRect().top < window.innerHeight) {
//         img.src = img.getAttribute('data-src');
//       };
//     })
  
//   }
  
//   window.addEventListener('scroll', ativaNoScroll);
  
  
//   // Show section
  
  
//   const observer = new IntersectionObserver ((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting){
//         // entry.target.classList.add('principal-show-section');
//         entry.target.classList.add('show');
//       }
//       else{
//         // entry.target.classList.remove('principal-show-section');
//         entry.target.classList.remove('show');
//       }
  
//     });
//   });
  
  
//   // const hiddenSection = document.querySelectorAll('.principal-section-hidden');
//   const hiddenSection = document.querySelectorAll('.hidden');
//   hiddenSection.forEach((el) => observer.observe(el));
  
  
//   // ============== //
//   // Scroll To View //
//   // ============== //
  
    
//   document.documentElement.style.scrollBehavior = "smooth";
  


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