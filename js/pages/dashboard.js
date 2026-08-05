import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { allTrans } from "../core/storage.js";

let dashboardTransUpd = ()=>{
    let recentList = document.querySelector("#recent-trans-list")
    allTrans.forEach((transcation, index)=>{
        recentList += `<div class="flex justify-between items-center border-b pb-4 border-(--text-primary)">
                    <div>
                        <h3 class="font-semibold text-(--text-primary)">${}</h3>
                        <p class="text-(--text-muted) text-sm">Tech & Gear</p>
                    </div>
                    <span class="text-(--danger) font-bold">-$1,299</span>
                </div>` 
    })
}

export function initDashboard (){

    console.log("Dashboard Work!");


    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)

    transModalSubmit();

}