import { allTrans, saveTrans } from "../core/storage.js";
import {
  allAmountUpdate,
  dashboardTransUpd,
  netWorth,
  income,
  expense,
} from "../pages/dashboard.js";
import { allTransUpdate, totalTransUpdate } from "../pages/transcation.js";
import { updateGraph } from "./charts.js";

export function openTransactionModal() {
  const formCard = document.querySelector("#transFormCard");
  formCard.classList.remove("hidden");
}

export function closeTransactionModal() {
  const formCard = document.querySelector("#transFormCard");
  formCard.classList.add("hidden");
}

export function transModalSubmit() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let transcation = {
      type: e.target[0].value,
      amount: Number(e.target[1].value),
      purpose: e.target[2].value,
      category: e.target[3].value,
      date: e.target[4].value,
    };
    allTrans.push(transcation);
    saveTrans();
    if (document.body.id == "dashboard-page") {
      allAmountUpdate();
      dashboardTransUpd();
      updateGraph();
    }
    if (document.body.id == "transactions-page") {
      totalTransUpdate();
      allTransUpdate();
    }
    form.reset();
    closeTransactionModal();
  });
}

export const openEditModal = (index) => {
  openTransactionModal();
  const formCard = document.querySelector("form");
  formCard[0].value = allTrans[index].type;
  formCard[1].value = allTrans[index].amount;
  formCard[2].value = allTrans[index].purpose;
  formCard[3].value = allTrans[index].category;
  formCard[4].value = allTrans[index].date;
  formCard.addEventListener("submit", (e) => {
    e.preventDefault();
    allTrans[index].type = e.target[0].value;
    allTrans[index].amount = e.target[1].value;
    allTrans[index].purpose = e.target[2].value;
    allTrans[index].category = e.target[3].value;
    allTrans[index].date = e.target[4].value;
  });
  saveTrans();
  totalTransUpdate();
  allTransUpdate();
  formCard.reset();
  closeTransactionModal();
};
