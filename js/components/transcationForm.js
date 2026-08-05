let formCard;
export function initTransactionModal() {
    formCard = document.querySelector("#transFormCard");

    document
        .querySelector("#quickAddBtn")
        .addEventListener("click", openTransactionModal);
}
export function openTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.remove("hidden");
}

export function closeTransactionModal() {
    const formCard = document.querySelector("#transFormCard");
    formCard.classList.add("hidden");
}