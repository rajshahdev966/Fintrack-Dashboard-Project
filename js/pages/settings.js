export const clearLocalStor = () => {
  let allClearBtn = document.querySelector("#all-clear-btn");
  allClearBtn.addEventListener("click", () => {
    localStorage.clear();
  });
};
export const initSettings = ()=>{
    clearLocalStor();
}