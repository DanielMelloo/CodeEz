
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