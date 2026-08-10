import {
  closeModal,
  openEditModal,
  openModal,
  transModalSubmit,
} from "../components/transcationForm.js";
import { transSort } from "../components/transcationTable.js";
import { allTrans, saveTrans } from "../core/storage.js";
import { currencyUpdate } from "./dashboard.js";
import { themeLogic } from "./settings.js";

export let allTransUpdate = (remove) => {
  const transTable = document.querySelector("#trans-table");
  if (!transTable) return;
  transTable.innerHTML = ``;
  allTrans.forEach((transcation, index) => {
    if(transcation.type == remove) return;
    transTable.innerHTML += `<tr class="hover:bg-(--surface-bright) transition ">
        
        <td class="px-6 py-6 font-medium">
        ${transcation.date}
        </td>
        
        <td class="px-6 py-6">
        
        <span
        class="rounded-full px-3 py-1 text-xs font-semibold">
        ${transcation.category}
        </span>
        
        </td>
        
        <td class="px-6 py-6 text-(--text-secondary)">
        ${transcation.purpose}
        </td>
        
        <td class="px-6 py-6 text-right font-bold text-(--${transcation.type == "Income" ? "success" : "danger"}) w-min">
        <span>${transcation.type == "Income" ? "+" : "-"}</span>
        <span id="currency-display"></span>
        ${transcation.amount}
        </td>
        
        <td class="px-6 py-6 text-center flex items-center justify-center gap-4 text-3xl">
        <span class="hover:text-(--danger) cursor-pointer" onclick="delTrans(${index})"><i class="ri-close-circle-fill"></i></span>
        <span class="hover:text-(--primary) cursor-pointer" onclick="editTrans(${index})"><i class="ri-pencil-fill"></i></span>
        </td>
        </tr>`;
  });
};

export const totalTransUpdate = () => {
  const totalDisplay = document.querySelector("#total-trans");
  totalDisplay.textContent = allTrans.length;
};

export const updateAfterTranscation = () => {
  totalTransUpdate();
  allTransUpdate(remove);
};

export function initTransPage() {
  console.log("TransPage Work!");

  document.querySelector("#add-new-btn").addEventListener("click", openModal);

  document
    .querySelector("#cancelBtn")
    .addEventListener("click", closeModal);

  transModalSubmit(updateAfterTranscation);
  totalTransUpdate();
  allTransUpdate();
  transSort();
  themeLogic();
  currencyUpdate();
}

export const delTrans = (index) => {
  allTrans.splice(index, 1);
  saveTrans();
  totalTransUpdate();
  allTransUpdate();
};


export const editTrans = (index) => {
  openEditModal(index, updateAfterTranscation);
};

