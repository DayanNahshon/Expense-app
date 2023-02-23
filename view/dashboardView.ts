window.onload = spanWelcome

// all sidebar stuff

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

// ------------------------------



// all localstorage here
const spanWel = document.querySelector(".container__h2Welcome__spanWelcome")as HTMLSpanElement;


// --------------------------------


// <!--Dashboard-->


// memo
const memoButton = document.querySelector("#memoButton")as HTMLButtonElement;
let memoInput = document.querySelector("#memoInput")as HTMLInputElement;
const memoPar = document.querySelector("#memoPar")as HTMLDivElement;

memoButton.addEventListener("click", runMemoTask)

function runMemoTask(e){
  e.preventDefault()
  try {
    if(memoInput.value != ""){
      console.log("dsfsdf") 
    }
    
    
  } catch (error) {
    return alert("field is empty")
  }
}

// ----------------------------------










// get localstorage.
function spanWelcome(){
   let newUser = localStorage.getItem("user")!;
        
        spanWel.innerHTML = newUser
        
 
  
}





