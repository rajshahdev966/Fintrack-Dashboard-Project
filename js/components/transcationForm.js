import { allTrans, saveTrans, saveTranscation } from "../core/storage.js";
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

export function transModalSubmit(onSuccess) {
  const form = document.querySelector("form");
  
  form.addEventListener("submit", (e) => {
    if(formEdit) return;
    e.preventDefault();

    let transcation = getTranscationFromForm(form)
    saveTranscation(transcation);
    
   onSuccess();

    form.reset();
    closeModal();
  });
}

const insertValueInEditModal = (form, index)=>{
  form[0].value = allTrans[index].type;
  form[1].value = allTrans[index].amount;
  form[2].value = allTrans[index].purpose;
  form[3].value = allTrans[index].category;
  form[4].value = allTrans[index].date;
}

export const openEditModal = (index) => {
  openModal();
  const form = document.querySelector("form");
  const submit = document.querySelector("#submit-btn")

 insertValueInEditModal(form);

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    allTrans[index].type = form[0].value;
    allTrans[index].amount = Number(form[1].value);
    allTrans[index].purpose = form[2].value;
    allTrans[index].category = form[3].value;
    allTrans[index].date = form[4].value;
    saveTrans();
      totalTransUpdate();
      allTransUpdate();

    form.reset();
    closeModal();
    formEdit = false;
  });
};
