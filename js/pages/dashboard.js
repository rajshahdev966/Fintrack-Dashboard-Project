import { openTransactionModal } from "../components/transcationForm";

export function initDashboard (){
    const quickAddBtn = document.querySelector("#quickAddBtn");
    quickAddBtn.addEventListener('click', openTransactionModal)
}