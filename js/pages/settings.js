export const clearLocalStor = () => {
    
    let allClearBtn = document.querySelector("#all-clear-btn");
    allClearBtn.addEventListener("click", () => {
      console.log("Button Working");
    localStorage.clear();
  });
};
export const initSettings = ()=>{
    console.log("Settigns working");
    clearLocalStor();
}