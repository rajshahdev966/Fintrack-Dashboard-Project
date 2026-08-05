import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { allTrans } from "../core/storage.js";

export let allTransUpdate = ()=>{
    console.log("all Trans Update working");
    const transTable = document.querySelector("#trans-table");
    if(!transTable) return;
    transTable.innerHTML = ``
    allTrans.forEach((transcation, index)=>[
        transTable.innerHTML += `<tr class="hover:bg-(--surface-bright) transition">

                        <td class="px-6 py-6 font-medium">
                            ${transcation.date}
                        </td>

                        <td class="px-6 py-6">

                            <span
                                class="rounded-full px-3 py-1 text-xs font-semibold">
                                ${transcation.category}
                            </span>

                        </td>

                        <td class="px-6 py-6 text-(--text-secondary)">
                            ${transcation.purpose}
                        </td>

                        <td class="px-6 py-6 text-right font-bold text-(--${transcation.type == "Income" ? "success" : "danger"})">
                            ${transcation.amount}
                        </td>

                        <td class="px-6 py-6 text-center">
                            ⋮
                        </td>
                    </tr>`
    ])
}

let totalTransUpdate = ()=>{
    const totalDisplay = document.querySelector("#total-trans")
    totalDisplay.textContent = allTrans.length();
}
tot

export function initTransPage(){
    
    console.log("TransPage Work!");

    document.querySelector("#add-new-btn")
    .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
    .addEventListener("click", closeTransactionModal)
    
    transModalSubmit();
}