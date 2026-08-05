import { closeTransactionModal, openTransactionModal } from "../components/transcationForm.js";

export function initDashboard (){
    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)
}