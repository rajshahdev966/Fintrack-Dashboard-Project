export let allTrans = [];

export function localStorTrans(){
    allTrans = JSON.parse(localStorage.getItem("allTrans"));
    console.log(allTrans);
       
}
