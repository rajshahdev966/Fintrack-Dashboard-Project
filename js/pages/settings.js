export const delAllData = ()=>{
    document.querySelector("#del-all-data-btn")
            .addEventListener("click", ()=>{
                localStorage.clear();
            })
}
export const initSettings = ()=>{
    delAllData();
}