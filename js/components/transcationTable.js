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
    allTrans.forEach(element => {
        
    });



}