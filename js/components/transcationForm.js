
export function openTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.remove("hidden");
}

export function closeTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.add("hidden");
}