import { allTrans, darkOn } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeSwitch = ()=>{
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
  const themeLogic = ()=>{
    if(darkOn){
      document.body.classList.add(dark)
      switchLogo.classList.replace(ri-moon-fill, ri-sun-fill);
      
    }else{
      switchLogo.classList.replace(ri-sun-fill, ri-moon-fill);
    }
  }
  switchBtn.addEventListener("click", ()=>{
    console.log("Theme Chnaged");
    
    darkOn != darkOn;
    themeLogic();
  })
}


export const initSettings = ()=>{
themeSwitch();    

}

