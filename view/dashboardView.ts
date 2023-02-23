window.onload = spanWelcome
let spanWel = document.querySelector(".container__h2Welcome__spanWelcome")as HTMLSpanElement;
let sideBar = document.querySelectorAll("#sideBar")!;

 
if(sideBar){
    sideBar.forEach((bar,index)=>{
      bar.addEventListener("click", ()=>{
        renderSideBarNav(index)
      })
    })
 }
   

  function renderSideBarNav(index:number):void{
    try {
        console.log("sdfsdfsdf")
      for(let i=0; i < sideBar.length; i++);

    } catch (error) {
        
    }
  }










// get localstorage.
function spanWelcome(){
   let newUser = localStorage.getItem("user")!;
        
        spanWel.innerHTML = newUser
        
 
  
}





