import { allTrans } from "../core/storage.js";
import { allTransUpdate } from "../pages/transcation.js";

export const transSort = () => {

  const incSortBtn = document.querySelector("#inc-sort-btn");
  const expSortBtn = document.querySelector("#exp-sort-btn");
  const allBtn = document.querySelector("#all-btn")

  let remove;

  allBtn.addEventListener("click", ()=>{
    remove = "none"
    allTransUpdate(remove);
  })

  incSortBtn.addEventListener("click", () => {
    remove = "Expense";
    allTransUpdate(remove)
  });
  expSortBtn.addEventListener("click", () => {
    remove = "Income";
    allTransUpdate(remove)
  });

};
