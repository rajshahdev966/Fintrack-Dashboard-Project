import { closeTransactionModal, openEditModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { transSort } from "../components/transcationTable.js";
import { allTrans, saveTrans } from "../core/storage.js";
import { currencyUpdate } from "./dashboard.js";
import { themeLogic } from "./settings.js";



export let allTransUpdate = ()=>{
    const transTable = document.querySelector("#trans-table");
    if(!transTable) return;
    transTable.innerHTML = ``
    allTrans.forEach((transcation, index)=>{
        transTable.innerHTML += `<tr class="hover:bg-(--surface-bright) transition block relative p-4 md:table-row md:p-0 ">
        
        <td class="px-6 py-6 font-medium block md:table-cell">
        ${transcation.date}
        </td>
        
        <td class="px-6 py-6 block md:table-cell">
        
        <span
        class="rounded-full px-3 py-1 text-xs font-semibold">
        ${transcation.category}
        </span>
        
        </td>
        
        <td class="px-6 py-6 text-(--text-secondary) block md:table-cell">
        ${transcation.purpose}
        </td>
        
        <td class="px-6 py-6 text-right font-bold text-(--${transcation.type == "Income" ? "success" : "danger"}) w-min block md:table-cell">
        <span>${transcation.type == "Income" ? "+" : "-"}</span>
        <span id="currency-display"></span>
        ${transcation.amount}
        </td>
        
        <td class="px-6 py-6 text-center block items-center justify-center gap-4 text-3xl md:table-cell md:flex">
        <span class="hover:text-(--danger) cursor-pointer" onclick="delTrans(${index})"><i class="ri-close-circle-fill"></i></span>
        <span class="hover:text-(--primary) cursor-pointer" onclick="editTrans(${index})"><i class="ri-pencil-fill"></i></span>
        </td>
        </tr>`
    })
}

export const totalTransUpdate = ()=>{
    const totalDisplay = document.querySelector("#total-trans")
    totalDisplay.textContent = allTrans.length;
}


export function initTransPage(){
    
    console.log("TransPage Work!");
    
    document.querySelector("#add-new-btn")
    .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
    .addEventListener("click", closeTransactionModal)
    
    transModalSubmit();
    totalTransUpdate();
    allTransUpdate();
    transSort();
    themeLogic();
    currencyUpdate();
}

export const delTrans = (index)=>{
    allTrans.splice(index , 1);
    saveTrans();
    allTransUpdate();
}
window.delTrans = delTrans;

export const editTrans = (index)=>{
openEditModal(index);

}
window.editTrans = editTrans;