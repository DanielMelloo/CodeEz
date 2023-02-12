// https://github.com/DanielMelloo/CodeEz

// =========== //
// | Gabriel | //
// =========== //

async function progressiveWriter (id, message, timing) {
    
    console.log(`start: ${id}`);

    // achar elemento
    let element = document.getElementById(id);
    // console.log(element);

    // criar zona de texto
    let textZone = document.createElement("span");
    // console.log(textZone);

    // adicionar zona de texto
    element.parentElement.appendChild(textZone);  // breaking?!
    console.log(element);

    // adicionar texto
    textZone.textContent = message;


    console.log(`end: ${id}`);
    
    /* 

    // inserir zona de texto depois do elemento
    element.parentElement.appendChild(element);

    let last = (message.length - 1);

    for(let i = 0; i <= last; i++){
        textZone.textContent += "i";
        sleep(timing);
    }
     */
}

async function addChar (sentence, letter) {
    sentence += letter;
}

async function removeChar (sentence) {
    sentence -= 1;
}

// progressiveWriter("testCard1Content", "subtext message");


async function parallelCounter (limit, id) {
    for(let i = 0; i <= limit; i++){
        await console.log(`${id}: ${i}`);
    }
}

async function parallelTyper (limit, id) {
    for(let i = 0; i <= limit; i++){
        await console.log(`${id}: ${i}`);
    }
}

async function testing () {
    console.log("pre-sleep");
    await sleep(3000);
    console.log("pos-sleep");
}

// progressiveWriter(document.getElementById("testCard"), "message_text");
function sleep (ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}

// ============
//  execution:
// ============

// parallelCounter(1000, "function-1");
// parallelCounter(1000, "function-2");
progressiveWriter("testCard1Content")
progressiveWriter()
