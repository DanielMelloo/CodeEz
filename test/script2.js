// https://github.com/DanielMelloo/CodeEz

// ===============
//  funções-start
// ===============

async function progressiveWriterById(id, message, timing){
    
    console.log(`start: ${id}`);

    // achar elemento
    let element = document.getElementById(id);
    // console.log(element);

    // criar [zona de texto]
    let textZone = document.createElement("span");
    // console.log(textZone);

    // adicionar [zona de texto] em baixo do [elemento]
    element.parentElement.appendChild(textZone);  // breaking?!
    // console.log(element);

    // adicionar texto
    textZone.textContent = message;


    console.log(`end: ${id}`);
}

async function addChar(sentence, letter){
    sentence += letter;
}

async function removeChar(sentence){
    sentence -= 1;
}

async function parallelCounter(limit, id){
    for(let i = 0; i <= limit; i++){
        await console.log(`${id}: ${i}`);
    }
}

async function parallelTyper(limit, id){
    for(let i = 0; i <= limit; i++){
        await console.log(`${id}: ${i}`);
    }
}

async function testing(){
    console.log("pre-sleep");
    await sleep(3000);
    console.log("pos-sleep");
}




/*
 * recebe um elemento & aplica o efeito nele 
 * depende da função "sleep()"
*/
async function progressiveWriter1(element, delay = 100){
    let message = element.textContent;
    element.textContent = "";
    
    while(true){

        for(let i in message){
            element.textContent += message[i];
            await sleep(delay);
        }

        for(let i in message){
            element.textContent = element.textContent.substring(0, element.textContent.length - 1);
            await sleep(delay);
        }

    }

}






const targets = document.querySelectorAll('');


const intObsAsign = target => { console.log(target)}

targets.forEach(intObsAsign)

const intObs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        
        console.log("[signal]");

        if(entry.isIntersecting){
            const element = entry.target;
            progressiveWriter1(element);
            observer.disconnect();
        }
    });
});

// (...)







// ===============
//  funções-end
// ===============



// =================
//  chamandas-start
// =================

/* 
let element1 = document.querySelector("#progressiveWriterTarget1");
let element2 = document.querySelector("#progressiveWriterTarget2");

progressiveWriter1(element1);
progressiveWriter1(element2);
 */

// progressiveWriter2("progressiveWriterFlag");

// =================
//  chamandas-end
// =================