import { allTrans, darkOn, saveTheme, toggleTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeSwitch = ()=>{
  const themeLogic = ()=>{
    if(darkOn){
      
      document.body.classList.add("dark")
      
      // switchLogo.classList.replace("ri-moon-fill", "ri-sun-fill");
      
      
    }else{
      document.body.classList.remove("dark")
      // switchLogo.classList.replace("ri-sun-fill", "ri-moon-fill");
      
    }
  }
  if(!document.body.id == "settings-page") return;
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
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

