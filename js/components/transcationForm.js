import { allTrans, saveTrans } from "../core/storage.js";
import { allAmountUpdate, dashboardTransUpd } from "../pages/dashboard.js";
import { allTransUpdate, totalTransUpdate } from "../pages/transcation.js";

export function openTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.remove("hidden");
}

export function closeTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.add("hidden");
}

export function transModalSubmit(){
    let form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        let transcation = {
            type: e.target[0].value,
            amount: e.target[0].value == "Income" ? `+${e.target[1].value}`: `-${e.target[1].value}`,
            purpose: e.target[2].value,
            category: e.target[3].value,
            date: e.target[4].value,
        }
        allTrans.push(transcation);
        saveTrans();
        if(document.body.id == "dashboard-page") allAmountUpdate();
        if(document.body.id == "dashboard-page") dashboardTransUpd();
        if(document.body.id == "transactions-page") totalTransUpdate();
        if(document.body.id == "transactions-page") allTransUpdate();
        form.reset();
        closeTransactionModal();
        // dashboardTransUpd();
        // allTransUpdate();
        
    })
}
