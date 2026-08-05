import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { allTrans } from "../core/storage.js";

export let dashboardTransUpd = ()=>{
    const recentList = document.querySelector("#recent-trans-list")
    if(!recentList) return;
    recentList.innerHTML = ``
    allTrans.forEach((transcation, index)=>{
        recentList.innerHTML += `<div class="flex justify-between items-center border-b pb-4 border-(--text-primary)">
                    <div>
                        <h3 class="font-semibold text-(--text-primary)">${transcation.purpose}</h3>
                        <p class="text-(--text-muted) text-sm">${transcation.category}</p>
                    </div>
                    <span class="text-(--${transcation.type == "Income" ? "success" : "danger"}) font-bold">${transcation.amount}</span>
                </div>` 
    })
}

export const netWorthUpdate = ()=>{
    let netWorth;
    let netWorthCount = ()=>{
        netWorth = 0;
        allTrans.forEach((transaction, index)=>{
            netWorth += Number(transaction.amount)
        })
    }
    netWorthCount();
    let netWorthDisplay = document.querySelector("#net-worth")
    netWorthDisplay.textContent = netWorth;    
}
export const expenseUpdate = ()=>{
    let expense;
    let expenseCount = ()=>{
        expense = 0;
        
    }
}

export function initDashboard (){

    console.log("Dashboard Work!");


    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)

    transModalSubmit();
    allAmountUpdate();

}