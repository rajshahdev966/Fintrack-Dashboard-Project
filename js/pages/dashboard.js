import { updateGraph } from "../components/charts.js";
import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { allTrans, currency } from "../core/storage.js";

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
                    <span class="text-(--${transcation.type == "Income" ? "success" : "danger"}) font-bold">${transcation.type == "Income" ? "+" : "-"}${transcation.amount}</span>
                </div>` 
    })
    console.log("dashboard should get updated");
    
}


export let income;
export let expense;
export let netWorth;
export let total;


export const netWorthUpdate = ()=>{
    let netWorthCount = ()=>{
        netWorth = 0;
        total = 0;
        allTrans.forEach((transaction, index)=>{
            if(transaction.type == "Income"){
                netWorth += transaction.amount;
                total += transaction.amount;
            }else{
                netWorth -= transaction.amount;
                total += transaction.amount;
            }
        })
    }
    netWorthCount();
    let netWorthDisplay = document.querySelector("#net-worth")
    netWorthDisplay.textContent = netWorth;    
}
export const expenseUpdate = ()=>{
    let expenseCount = ()=>{
        expense = 0;
        income = 0;
        allTrans.forEach((transaction,index)=>{
            if(transaction.type == "Income"){
                income += Number(transaction.amount);
            }else{
                expense += Number(transaction.amount);
            }
        })
        
    }
    expenseCount();
    let expenseDisplay = document.querySelector("#expense-display")
    let incomeDisplay = document.querySelector("#income-display")
    expenseDisplay.textContent = expense;
    incomeDisplay.textContent = income;
}
export const allAmountUpdate = ()=>{
    netWorthUpdate();
    expenseUpdate();

}

export const dashboardCurrencyUpdate = ()=>{
    let response = currency;
    const currencyDisplay = document.querySelectorAll("#currency-display");
    currencyDisplay.forEach((ele)=>{
            ele.textContent = `${response.split("(")[1].charAt(0)}`
    })
} 

export function initDashboard (){

    console.log("Dashboard Work!");

    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
            .addEventListener("click", closeTransactionModal)

    transModalSubmit();
    allAmountUpdate();
    dashboardTransUpd();
    updateGraph();
    dashboardCurrencyUpdate();
}