import { openTransactionModal } from "../components/transcationForm";

export function initDashboard (){
    document.querySelector("#quickAddBtn")
            .addEventListener("click", openTransactionModal)
}