import { closeTransactionModal, openTransactionModal, transModalSubmit } from "../components/transcationForm.js";
import { allTrans } from "../core/storage.js";

export let allTransUpdate = ()=>{
    let transTable = document.querySelector("tbody");
    transTable.innerHTML = ``
    allTrans.forEach((transcation, index)=>[
        transTable.innerHTML += `<tr class="hover:bg-(--surface-bright) transition">

                        <td class="px-6 py-6 font-medium">
                            ${all}
                        </td>

                        <td class="px-6 py-6">

                            <span
                                class="rounded-full px-3 py-1 text-xs font-semibold">
                                Shopping
                            </span>

                        </td>

                        <td class="px-6 py-6 text-(--text-secondary)">
                            Amazon Premium Web Services Monthly Sub
                        </td>

                        <td class="px-6 py-6 text-right font-bold text-(--danger)">
                            -$142.00
                        </td>

                        <td class="px-6 py-6 text-center">
                            ⋮
                        </td>

                    </tr>`
    ])
}

export function initTransPage(){
    
    console.log("TransPage Work!");

    document.querySelector("#add-new-btn")
    .addEventListener("click", openTransactionModal)
    
    document.querySelector("#cancelBtn")
    .addEventListener("click", closeTransactionModal)
    
    transModalSubmit();
}