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
        console.log(e.target[0].value); //transType 
        console.log(e.target[1].value); // amount
        console.log(e.target[2].value); // category
        console.log(e.target[3].value); // date
       
        
        // console.log(e.srcElement);
        
        // console.log(ine.value);
                
    })

}