import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const clearLocalStor = () => {
    
    let allClearBtn = document.querySelector("#all-clear-btn");
    allClearBtn.addEventListener("click", () => {
      console.log("Button Working");
    localStorage.clear();
    dashboardTransUpd();
    allTransUpdate();
  });
};
export const initSettings = ()=>{
    console.log("Settigns working");
    clearLocalStor();
}