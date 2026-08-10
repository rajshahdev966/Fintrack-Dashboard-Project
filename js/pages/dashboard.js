import { updateGraph } from "../components/charts.js";
import { openNavOnMobile } from "../components/navbar.js";
import {
  closeModal,
  openModal,
  transModalSubmit,
} from "../components/transcationForm.js";
import { allTrans, currency } from "../core/storage.js";
import { themeLogic } from "./settings.js";

export let dashboardTransUpd = () => {
  const recentList = document.querySelector("#recent-trans-list");
  if (!recentList) return;
  recentList.innerHTML = ``;
  allTrans.forEach((transcation, index) => {
    recentList.innerHTML += `<div class="flex justify-between items-center border-b pb-4 border-(--text-primary)">
                    <div>
                        <h3 class="font-semibold text-(--text-primary)">${transcation.purpose}</h3>
                        <p class="text-(--text-muted) text-sm">${transcation.category}</p>
                    </div>
                    <div class="flex gap-0.5">
                        <span class="text-(--${transcation.type == "Income" ? "success" : "danger"}) font-bold">${transcation.type == "Income" ? "+" : "-"}</span>  
                        <span class="text-(--${transcation.type == "Income" ? "success" : "danger"}) font-bold" id="currency-display"></span>
                        <span class="text-(--${transcation.type == "Income" ? "success" : "danger"}) font-bold">${transcation.amount}</span>
                    </div>
                </div>`;
  });
};

export let income;
export let expense;
export let netWorth;
export let total;

export const netWorthCount = () => {
    netWorth = 0;
    total = 0;
    allTrans.forEach((transaction, index) => {
      if (transaction.type == "Income") {
        netWorth += transaction.amount;
        total += transaction.amount;
      } else {
        netWorth -= transaction.amount;
        total += transaction.amount;
      }
    });
  };

export const netWorthUpdate = () => {
  netWorthCount();
  let netWorthDisplay = document.querySelector("#net-worth");
  netWorthDisplay.textContent = netWorth;
};

export const expIncCount = () => {
    expense = 0;
    income = 0;
    allTrans.forEach((transaction, index) => {
      if (transaction.type == "Income") {
        income += Number(transaction.amount);
      } else {
        expense += Number(transaction.amount);
      }
    });
  };

export const expIncUpdate = () => {
  expIncCount();
  let expenseDisplay = document.querySelector("#expense-display");
  let incomeDisplay = document.querySelector("#income-display");
  expenseDisplay.textContent = expense;
  incomeDisplay.textContent = income;
};

export const allAmountUpdate = () => {
  netWorthUpdate();
  expIncUpdate();
  updateGraph(income, expense, total);
};

export const currencyUpdate = () => {
  let response = currency;
  const currencyDisplay = document.querySelectorAll("#currency-display");
  currencyDisplay.forEach((ele) => {
    ele.textContent = `${response.split("(")[1].charAt(0)}`;
  });
};

export function initDashboard() {
  document
    .querySelector("#quickAddBtn")
    .addEventListener("click", openModal);

  document
    .querySelector("#cancelBtn")
    .addEventListener("click", closeModal);

  transModalSubmit();
  allAmountUpdate();
  dashboardTransUpd();
  currencyUpdate();
  themeLogic();
  openNavOnMobile();
      updateGraph();
}
