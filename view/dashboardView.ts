window.onload = spanWelcome
const spanWel = document.querySelector(".container__h2Welcome__spanWelcome")as HTMLSpanElement;
const sideBar = document.querySelectorAll("#sideBar")!;

 
if(sideBar){
    sideBar.forEach((bar,index)=>{
      bar.addEventListener("click", ()=>{
        renderSideBarNav(index)
      })
    })
 }
     
    
  function renderSideBarNav(index:number):void{
    try {
     
        for(let i=0; i<4; i++){
            
           
           if(i == index){
            document.getElementById("sideBar")![i].style.display = "block"
         
           } else if(i != index){
            document.getElementById("sideBar")![i].style.display = "none"
           }
        }
     

    } catch (error) {
        
    }
  }










// get localstorage.
function spanWelcome(){
   let newUser = localStorage.getItem("user")!;
        
        spanWel.innerHTML = newUser
        
 
  
}





