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
  
