export let allTrans = JSON.parse(localStorage.getItem('savedTrans')) ?? [];
export let darkOn = JSON.parse(localStorage.getItem('darkOn')) ?? false;

console.log("Storage: ", darkOn);


export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}
export const saveTheme = ()=>{
    console.log("Storage: ", darkOn);
    localStorage.setItem('dakrOn', JSON.stringify(darkOn))
}
export const toggleTheme = ()=>{
    darkOn = !darkOn;
}