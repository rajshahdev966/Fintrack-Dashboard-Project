
export function openTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.remove("hidden");
}

export function closeTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.add("hidden");
}

export function transModalSubmit(){
    let form = document.querySelector("form");
    form.addEventListener("submit", (e)=>{
        
    })
}