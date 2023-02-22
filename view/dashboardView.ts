window.onload = spanWelcome
let spanWel = document.querySelector(".container__h2Welcome__spanWelcome")as HTMLSpanElement;

const showMonitor = document.querySelector(".showMonitor")as HTMLDivElement
const showCalc = document.querySelector(".showCalculator")as HTMLDivElement

let sideBar:any = document.querySelectorAll("#sideBar");
if(sideBar){
    sideBar.forEach((bars) =>{
       bars.addEventListener("click", (event:object)=>{
   
       
    
  






})
       
    })
}


function spanWelcome(){
   let newUser = localStorage.getItem("user")!;
        
        spanWel.innerHTML = newUser
        
 
  
}





