export let allTrans = [];

export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}