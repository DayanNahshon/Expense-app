//-----Login Page
const form = document.querySelector(".login")as HTMLFormElement;
const info = document.querySelector(".navbar__li-Info")as HTMLElement;
const us = document.querySelector(".navbar__li-Us")as HTMLElement;
const contact = document.querySelector(".navbar__li-Contact")as HTMLElement;
const button = document.querySelector(".login__submit")as HTMLButtonElement;
const userName = document.querySelector(".login__userName")as HTMLInputElement;


// the divs
const showInfo = document.querySelector(".inFormer__showinfo")as HTMLDivElement;
showInfo.style.display ="none"
const showUS = document.querySelector(".inFormer__mainUs")as HTMLDivElement;
showUS.style.display ="none"
const showContact = document.querySelector(".inFormer__showContact")as HTMLDivElement;
showContact.style.display ="none"


// events
info.addEventListener("mouseover", showTheInfo)
info.addEventListener("mouseout", hideTheInfo)
us.addEventListener("mouseover", showTheUs)
us.addEventListener("mouseout", hideTheUs)
contact.addEventListener("mouseover", showTheContact)
contact.addEventListener("mouseout", hideTheContact)
button.addEventListener("click", runForm)




// run the function

// info
function showTheInfo(){
    showInfo.style.display = "block" 
    form.style.display = "none"  
    }
  
    function hideTheInfo(){
      form.style.display = "block"  
      showInfo.style.display = "none"
      }
  
    //  us
    function showTheUs(){
      form.style.display = "none"  
      showUS.style.display = "flex"
      showUS.style.flexDirection = "row"
      showUS.style.flexWrap ="wrap"
      showUS.style.gap = "10px"
    }
  
    function hideTheUs(){
      form.style.display = "block"  
      showUS.style.display = "none"
    }
    function showTheContact(){
      form.style.display = "none"  
      showContact.style.display = "block"
      }
  
    function hideTheContact(){
      form.style.display = "block"  
      showContact.style.display = "none"
    }


// runForm

function runForm(e){
e.preventDefault()
localStorage.setItem("user",userName.value)
location.href = "dashboard.html";
spanWelcome()
}
    

    