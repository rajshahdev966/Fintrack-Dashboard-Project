export let allTrans = JSON.parse(localStorage.getItem('savedTrans'));

export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}