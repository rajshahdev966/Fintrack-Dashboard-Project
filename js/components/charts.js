import { expense, income, netWorth } from "../pages/dashboard.js"

export const updateGraph = ()=>{
    let totalGraph = document.querySelector("#total-graph")
    let incomeGraph = document.querySelector("#income-graph")
    let expenseGrpah = document.querySelector("#expense-graph")
    incomeGraph.style.height = `${(income/netWorth) * (totalGraph.clientHeight)}`
    incomeGraph.style.height = `${(expense/netWorth) * (totalGraph.clientHeight)}`
}