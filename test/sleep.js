/* * precisa usar a "await" keyword quando for chamar */
function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms));
}