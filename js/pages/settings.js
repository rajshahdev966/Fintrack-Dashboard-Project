import { allTrans, darkOn, mailInStor, saveTheme, toggleTheme, updNameInStor, userName, userMail, currencyStore, currency } from "../core/storage.js";

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
  const profileIcon = document.querySelectorAll("#profile-icon");
  updNameInStor(response);
  profileIcon.innerHTML = `${(response.split(" ")[0] ?? "").charAt(0)}${(response.split(" ")[1] ?? "").charAt(0) ?? ""}`

}

export const preProfileUpd = ()=>{
  let response = userName;
  profileUpdate(response);
  const nameInput = document.querySelector("#name-input");
  nameInput.value = response;
}



export const profileChange = ()=>{
  const nameInput = document.querySelector("#name-input");
  nameInput.addEventListener("input", ()=>{
    profileUpdate(nameInput.value);
  })
} 


export const preMailUpd = ()=>{
  let response = userMail;
  const mailInput = document.querySelector("#mail-input");
  mailInput.value = response;
}

export const userMailChange = ()=>{
  const mailInput = document.querySelector("#mail-input");
  mailInput.addEventListener("input", ()=>{
    mailInStor(mailInput.value);

  })
}

export const currencyChange = ()=>{
  const currencyOption = document.querySelector("#currency-option")
  currencyOption.addEventListener("change", (e)=>{
    currencyStore(e.target.value);
  })
}

export const preCurrencyUpdate = ()=>{
  let response = currency;
  const currencyOption = document.querySelector("#currency-option")
  currencyOption.value = response;

}

export const delAllData = ()=>{
  const allDataDelBtn = document.querySelector("#all-data-del-btn");
  allDataDelBtn.addEventListener("click", ()=>{
    localStorage.removeItem('savedTrans')
    
  })
}

export let initSettings = () => {
  themeSwitch();
  profileChange();
  preProfileUpd();
  userMailChange();
  preMailUpd();
  currencyChange();
  delAllData();
  preCurrencyUpdate();
  themeLogic();
};
