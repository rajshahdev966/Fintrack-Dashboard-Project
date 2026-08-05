import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";

export function initDashboard (){

    console.log("Dashboard Work!");


    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)

    transModalSubmit();

}