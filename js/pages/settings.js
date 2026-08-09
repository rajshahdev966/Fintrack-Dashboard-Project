import { allTrans, darkOn, saveTheme, toggleTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeLogic = () => {
  console.log("darkon = " + darkOn);

  if (darkOn) {
    document.body.classList.add("dark");
    
  } else {
    document.body.classList.remove("dark");
    
  }
};

export const themeLogoUpdate = () => {
  const switchLogo = document.querySelector("#switch-logo");

  if (darkOn) {
    switchLogo.classList.replace("ri-moon-fill hover:text-blue-500", "ri-sun-fill hover:text-amber-300");
  } else {
    switchLogo.classList.replace("ri-sun-fill hover:text-amber-300", "ri-moon-fill hover:text-blue-500");
  }
};

export const themeSwitch = () => {
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
  switchBtn.addEventListener("click", () => {
    console.log("Theme Chnaged");
    toggleTheme();
    themeLogic();
    saveTheme();
    themeLogoUpdate();
  });
};

export let initSettings = () => {
  themeSwitch();
};
