import { expense, income, netWorth, total } from "../pages/dashboard.js"

export const updateGraph = ()=>{
    let totalGraph = document.querySelector("#total-graph")
    let incomeGraph = document.querySelector("#income-graph")
    let expenseGrpah = document.querySelector("#expense-graph")
    incomeGraph.style.height = `${((income/total) * (totalGraph.clientHeight))}px`
    incomeGraph.style.height = `${((expense/total) * (totalGraph.clientHeight))}px`
}