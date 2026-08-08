export let allTrans = JSON.parse(localStorage.getItem('savedTrans')) ?? [];
export let darkOn = localStorage.getItem('darkOn');

export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}