export let allTrans = [];

export function localStorTrans(){
    allTrans = localStorage.getItem("allTrans");
    console.log(allTrans);
       
}
