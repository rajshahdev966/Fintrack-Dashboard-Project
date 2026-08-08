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
  const form = document.querySelector("#transFormCard");
  form.classList.remove("hidden");
}

export function closeTransactionModal() {
  const form = document.querySelector("#transFormCard");
  form.classList.add("hidden");
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
  console.log("Edit Clicked", index);
  console.log(allTrans[index]);
  const formCard = document.querySelector("form");
  const submit = document.querySelector("#submit-btn")
  formCard[0].value = allTrans[index].type;
  formCard[1].value = allTrans[index].amount;
  formCard[2].value = allTrans[index].purpose;
  formCard[3].value = allTrans[index].category;
  formCard[4].value = allTrans[index].date;
  submit.addEventListener("click", () => {
    allTrans[index].type = formCard[0].value;
    allTrans[index].amount = Number(formCard[1].value);
    allTrans[index].purpose = formCard[2].value;
    allTrans[index].category = formCard[3].value;
    allTrans[index].date = formCard[4].value;
    saveTrans();
    console.log(allTrans[index]);
      totalTransUpdate();
      allTransUpdate();
    formCard.reset();
    closeTransactionModal();
  });
};
