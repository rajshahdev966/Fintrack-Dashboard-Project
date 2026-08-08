import { allTrans, darkOn, saveTheme, toggleTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeLogic = ()=>{
  console.log("darkon = " + darkOn);
  
  if(darkOn){
    console.log("Theme should be dark");
    document.body.classList.add("dark")
    // switchLogo.classList.replace("ri-moon-fill", "ri-sun-fill");
    
    
  }else{
    console.log("Theme should be light");
    document.body.classList.remove("dark");
    // switchLogo.classList.replace("ri-sun-fill", "ri-moon-fill");
    
  }
  console.log(document.body);
  
  document.body.classList.contains("dark")
}

export const themeSwitch = ()=>{
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

