export const openNavOnMobile = ()=>{
    const hamBtn = document.querySelector("#ham-btn");
    const navBar = document.querySelector("nav")
    hamBtn.addEventListener("click", ()=>{
        console.log("Hello before");
        navBar.classList.toggle("-translate-x-full")
        console.log("Hello after");
        
    })
}