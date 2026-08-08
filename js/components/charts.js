import { expense, income, netWorth } from "../pages/dashboard.js"

export const updateGraph = ()=>{
    let totalGraph = document.querySelector("#total-graph")
    let incomeGraph = document.querySelector("#income-graph")
    let expenseGrpah = document.querySelector("#expense-graph")
    incomeGraph.style.height = `${((income/netWorth) * (totalGraph.clientHeight))/1000}px`
    incomeGraph.style.height = `${((expense/netWorth) * (totalGraph.clientHeight))/1000}px`
}