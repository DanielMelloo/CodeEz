// https://github.com/DanielMelloo/CodeEz

// =========== //
// | Gabriel | //
// =========== //

function progressiveWriter (id, message, timing) {
    
    // achar elemento
    let element = document.getElementById(id);
    // console.log(element);

    // criar zona de texto
    let textZone = document.createElement("span");
    // console.log(textZone);

    // adicionar zona de texto
    element.parentElement.appendChild(textZone);
    console.log(element);

    
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

progressiveWriter("testCard1Content");


// progressiveWriter(document.getElementById("testCard"), "message_text");

async function sleep (ms) {
    return await new Promise((resolve)=>setTimeout(resolve, ms));
}

/* Objetivo do site
Ensinar e orientar estudantes que estão entrando na programação agora, ou que já possuem alguma prática.
 */