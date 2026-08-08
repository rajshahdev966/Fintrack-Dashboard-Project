import { allTrans, darkOn, saveTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeSwitch = ()=>{
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
  const themeLogic = ()=>{
    if(darkOn){
      console.log("Theme should be dark");
      
      document.body.classList.add("dark")
      switchLogo.classList.replace("ri-moon-fill", "ri-sun-fill");
      
      darkOn != darkOn;
      
    }else{
      console.log("Theme should be light");
      switchLogo.classList.replace("ri-sun-fill", "ri-moon-fill");
      darkOn != darkOn;
      
    }
  }
  switchBtn.addEventListener("click", ()=>{
    console.log("Theme Chnaged");
    themeLogic();
    saveTheme();
  })
}


export const initSettings = ()=>{
themeSwitch();    

}

