import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";

export let allTransUpdate = ()=>{
    let 
}

export function initTransPage(){
    
    console.log("TransPage Work!");

    document.querySelector("#add-new-btn")
    .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
    .addEventListener("click", closeTransactionModal)
    
    transModalSubmit();
}