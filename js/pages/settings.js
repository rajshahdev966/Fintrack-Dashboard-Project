import { allTrans } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const clearLocalStor = () => {
    let allClearBtn = document.querySelector("#all-clear-btn");
    allClearBtn.addEventListener("click", () => {
      console.log("Button Working");
      localStorage.removeItem("savedTrans")
    allTrans.splice(0)
    dashboardTransUpd();
    allTransUpdate();
  });
};
export const initSettings = ()=>{
    console.log("Settigns working");
    clearLocalStor();
}