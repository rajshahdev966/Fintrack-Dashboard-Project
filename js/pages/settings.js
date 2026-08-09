import { allTrans, darkOn, saveTheme, toggleTheme } from "../core/storage.js";
import { dashboardTransUpd } from "./dashboard.js";
import { allTransUpdate } from "./transcation.js";

export const themeLogic = () => {

  if (darkOn) {
    document.body.classList.add("dark");
    
  } else {
    document.body.classList.remove("dark");
    
  }
};

export const themeLogoUpdate = () => {
  const switchLogo = document.querySelector("#switch-logo");
  const switchBtn = document.querySelector("#switch-btn")

  if (darkOn) {
    switchLogo.classList.replace("ri-moon-fill", "ri-sun-fill");
    switchBtn.classList.replace("hover:text-blue-500", "hover:text-amber-300");
  } else {
    switchLogo.classList.replace("ri-sun-fill", "ri-moon-fill");
    switchBtn.classList.replace("hover:text-amber-300", "hover:text-blue-500");
  }
};

export const themeSwitch = () => {
  const switchBtn = document.querySelector("#switch-btn");
  const switchLogo = document.querySelector("#switch-logo");
  switchBtn.addEventListener("click", () => {
    toggleTheme();
    themeLogic();
    saveTheme();
    themeLogoUpdate();
  });
};

export const profileUpdate = (response) =>{
  const profileIcon = document.querySelector("#profile-icon");
  console.log("I am changed");
  profileIcon.innerHTML = `${response.split(" ")[0].charAt(0) ?? ""}${response.split(" ")[1].charAt(0) ?? ""}`
}

export const profileChange = ()=>{
  const nameInput = document.querySelector("#name-input");
  nameInput.addEventListener("input", ()=>{
    profileUpdate(nameInput.value);
    // console.log(nameInput.value);
    
    
  })
} 




export let initSettings = () => {
  themeSwitch();
  profileChange();
};
