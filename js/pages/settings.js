import { allTrans, darkOn, saveTheme, toggleTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export let themeLogic;

export const themeSwitch = ()=>{
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
  themeLogic = ()=>{
    if(darkOn){
      console.log("Theme should be dark");
      document.body.classList.add("dark")
      switchLogo.classList.replace("ri-moon-fill", "ri-sun-fill");
      
      
    }else{
      console.log("Theme should be light");
      document.body.classList.remove("dark")
      switchLogo.classList.replace("ri-sun-fill", "ri-moon-fill");
      
    }
  }
  switchBtn.addEventListener("click", ()=>{
    console.log("Theme Chnaged");
    toggleTheme();
    themeLogic();
    saveTheme();
  })
}


export let initSettings = ()=>{
themeSwitch();    

}

