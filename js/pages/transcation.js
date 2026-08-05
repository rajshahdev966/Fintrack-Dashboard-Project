import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";

export function initTransPage(){
    
    console.log("TransPage Work!");
    let addNew = document.querySelector("#add-new-btn")
    addNew.addEventListener("click", openTransactionModal)
    
    document.querySelector("cancelBtn")
    .addEventListener(closeTransactionModal)
    
    transModalSubmit();
}