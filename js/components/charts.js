export const updateGraph = (income, expense, total)=>{
    let totalGraph = document.querySelector("#total-graph")
    let incomeGraph = document.querySelector("#income-graph")
    let expenseGrpah = document.querySelector("#expense-graph")
    incomeGraph.style.height = `600px`
    incomeGraph.style.height = `${(expense/total) * (totalGraph.clientHeight)}`
}