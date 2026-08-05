export const delAllData = () => {
  const delAllBtn = document.querySelector("#del-all-data-btn");
  delAllBtn.addEventListener("click", () => {
    localStorage.clear();
  });
};
export const initSettings = () => {
  delAllData();
};
