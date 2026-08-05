import { closeTransactionModal, openTransactionModal } from "../components/transcationForm.js";

export function initDashboard (){
    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)

    let ine = document.querySelector("#ine");
    let form = document.querySelector("form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(e);
        
        console.log(ine.value);
                
    })

}