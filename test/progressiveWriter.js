
/*
 * recebe um elemento & aplica o efeito nele 
 * depende da função "sleep()"
*/
async function progressiveWriter1(element, delay = 100, pause = 1000){

    console.log("[progressiveWriter1-signal]");

    let originalMessage = element.textContent;
    let tempMessage = '';

    element.textContent = '';

    while(tempMessage.length != originalMessage.length){ // pading
        tempMessage += ' ';
    }

    element.textContent = tempMessage;
    
    while(true){

        for(let i = 1; i <= originalMessage.length; i++){
            tempMessage = originalMessage.substring(0, i); 
            while(tempMessage.length != originalMessage.length){ // pading
                tempMessage += ' ';
            }
            element.textContent = tempMessage;
            await sleep(delay);
        }
        await sleep(pause);
        for(let i = originalMessage.length; i >= 0; i--){
            tempMessage = originalMessage.substring(0, i); 
            while(tempMessage.length != originalMessage.length){ // pading
                tempMessage += ' ';
            }
            element.textContent = tempMessage;
            await sleep(delay);
        }

        tempMessage = originalMessage.substring(0, 0); 
        while(tempMessage.length != originalMessage.length){ // pading
            tempMessage += ' ';
        }
        element.textContent = tempMessage;
        await sleep(delay);

        /* 
        for(let i in originalMessage){
            // element.textContent += message[i];
            await sleep(delay);
        }
        await sleep(pause);
        for(let i in originalMessage){
            element.textContent = element.textContent.substring(0, (element.textContent.length - 1));
            await sleep(delay);
        }
         */
    }

}

// let targets = document.querySelectorAll("[progressiveWriting]"); // todos os elementos com "progressiveWriting" attribute


// targets.forEach((target) => {
document.querySelectorAll("[progressiveWriting]").forEach((target) => { // seleciona todos os [Elements] com o [Attribute], e aplica o observer a todos

    
    new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => { // [entries] e passado como um unico [element], mas por algum motivo ele se tona um array
            if(entry.isIntersecting){ // verifica constantemente se o [element] aparece, na [Viewport]
                // console.log(`intersect: ${entry}`);
                // console.log(entry.target);
                let element = entry.target;
                let delay; 
                let pause;
    
                progressiveWriter1(entry.target);
                observer.disconnect(); // faz executar uma vez só
            }
        })
        let entry = entries[0]; 

    }, {
        // especifica a  [Viewport]:
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 1.0
    
    }).observe(target); // observa o [element]

});