export const updateGraph = (income,expense,total)=>{
    let totalGraph = document.querySelector("#total-graph")
    let incomeGraph = document.querySelector("#income-graph")
    let expenseGraph = document.querySelector("#expense-graph")
    incomeGraph.style.height = `${((income/total) * (totalGraph.clientHeight))}px`
    expenseGraph.style.height = `${((expense/total) * (totalGraph.clientHeight))}px`
}