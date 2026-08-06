export const clearLocalSotr = () => {
  let allClearBtn = document.querySelector("#all-clear-btn");
  allClearBtn.addEventListener("click", () => {
    localStorage.clear();
  });
};
export const initSettings = ()=>{
    clearLocalSotr();
}