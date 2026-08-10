export let allTrans = JSON.parse(localStorage.getItem('savedTrans')) ?? [];
export let darkOn = JSON.parse(localStorage.getItem('darkOn')) ?? false;

export let userName = JSON.parse(localStorage.getItem('userName')) || "User Name"
export let userMail = JSON.parse(localStorage.getItem('userMail')) || "user@mail.com"
export let currency = JSON.parse(localStorage.getItem('currency')) || "INR(₹)"
 

export function saveTrans (){
    localStorage.setItem('savedTrans', JSON.stringify(allTrans));
}   
export const saveTheme = ()=>{
    localStorage.setItem('darkOn', JSON.stringify(darkOn))
}
export const toggleTheme = ()=>{
    darkOn = !darkOn;
}
export const updNameInStor = (newName)=>{
    localStorage.setItem('userName', JSON.stringify(newName))
}
export const mailInStor = (newMail)=>{
    localStorage.setItem('userMail', JSON.stringify(newMail))
}
export const currencyStore = (newCurrency)=>{
    localStorage.setItem('currency', JSON.stringify(newCurrency))
}

export const saveTranscation = (transaction)=>{
    allTrans.push(transaction);
    saveTrans();
}