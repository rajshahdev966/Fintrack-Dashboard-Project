export let allTrans = JSON.parse(localStorage.getItem('savedTrans')) ?? [];
export let darkOn = JSON.parse(localStorage.getItem('darkOn')) ?? false;



export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}
export const saveTheme = ()=>{
    console.log("Storage: ", darkOn);
    localStorage.setItem('darkOn', JSON.stringify(darkOn))
}
export const toggleTheme = ()=>{
    darkOn = !darkOn;
}