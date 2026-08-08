import { allTrans } from "../core/storage";

export const transSort = ()=>{
    const incSortBtn = document.querySelector("#inc-sort-btn");
    const expSortBtn = document.querySelector("#exp-sort-btn");
    let sortBy;
    incSortBtn.addEventListener("click", ()=>{
        sortBy = "Income";
    })
    expSortBtn.addEventListener("click", ()=>{
        sortBy = "Expense";
    })
    const sortUpdate = ()=>{
        const transTable = document.querySelector("#trans-table");
    if(!transTable) return;
    transTable.innerHTML = ``
    allTrans.forEach((transcation, index)=>{
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
        ${transcation.type == "Income" ? "+" : "-"}${transcation.amount}
        </td>
        
        <td class="px-6 py-6 text-center flex items-center justify-center gap-4 text-3xl">
        <span class="hover:text-(--danger) cursor-pointer" onclick="delTrans(${index})"><i class="ri-close-circle-fill"></i></span>
        <span class="hover:text-(--primary) cursor-pointer" onclick="editTrans(${index})"><i class="ri-pencil-fill"></i></span>
        </td>
        </tr>`
    })
    


}