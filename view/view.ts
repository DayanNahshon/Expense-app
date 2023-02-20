//-----Login Page
const form = document.querySelector(".login")as HTMLFormElement;
const info = document.querySelector("#li-Info")as HTMLElement;
const us = document.querySelector("#li-Us")as HTMLElement;
const contact = document.querySelector("#li-Contact")as HTMLElement;
const button = document.querySelector(".login__submit")as HTMLButtonElement;


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
form.addEventListener("submit", runForm)







    

    