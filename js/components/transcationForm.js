import { allTrans, saveTrans, saveTranscation } from "../core/storage.js";
import {
  allAmountUpdate,
  dashboardTransUpd,
  netWorth,
  income,
  expense,
} from "../pages/dashboard.js";
import { allTransUpdate, totalTransUpdate } from "../pages/transcation.js";
import { updateGraph } from "./charts.js";

export function openModal() {
  const form = document.querySelector("#transFormCard");
  form.classList.remove("hidden");
}

export function closeModal() {
  const form = document.querySelector("#transFormCard");
  form.classList.add("hidden");
}



export let formEdit = false;

const getTranscationFromForm = (form)=>{
  return {
      type: form[0].value,
      amount: Number(form[1].value),
      purpose: form[2].value,
      category: form[3].value,
      date: form[4].value,
    };
}

export function transModalSubmit() {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    if(formEdit) return;
    e.preventDefault();

    let transcation = getTranscationFromForm(form)
    saveTranscation(transcation);

    if (document.body.id == "dashboard-page") {
      
    }
    if (document.body.id == "transactions-page") {
      totalTransUpdate();
      allTransUpdate();
    }
    form.reset();
    closeModal();
  });
}

export const openEditModal = (index) => {
  openModal();
  console.log("Edit Clicked", index);
  console.log(allTrans[index]);
  const formCard = document.querySelector("form");
  const submit = document.querySelector("#submit-btn")
  formCard[0].value = allTrans[index].type;
  formCard[1].value = allTrans[index].amount;
  formCard[2].value = allTrans[index].purpose;
  formCard[3].value = allTrans[index].category;
  formCard[4].value = allTrans[index].date;
  submit.addEventListener("click", (e) => {
      e.preventDefault();
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
    closeModal();
    formEdit = false;
  });
};
