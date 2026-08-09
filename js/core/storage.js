export let allTrans = JSON.parse(localStorage.getItem('savedTrans')) ?? [];
export let darkOn = JSON.parse(localStorage.getItem('darkOn')) ?? false;
export let userName = JSON.parse(localStorage.getItem('userName')) ?? ""



export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}
export const saveTheme = ()=>{
    localStorage.setItem('darkOn', JSON.stringify(darkOn))
}
export const toggleTheme = ()=>{
    darkOn = !darkOn;
}
export const updNameInStor = ()=>{
    localStorage.setItem('userName', JSON.stringify(userName))
}