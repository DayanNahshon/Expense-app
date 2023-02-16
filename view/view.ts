const form = document.querySelector(".login")as HTMLFormElement;
const info = document.querySelector("#li-Info")as HTMLElement;
const us = document.querySelector("#li-Us")as HTMLElement;
const contact = document.querySelector("#li-Contact")as HTMLElement;


// the divs
const showInfo = document.querySelector(".inFormer__showinfo")as HTMLDivElement;
const showUS = document.querySelector(".inFormer__showUs")as HTMLDivElement;
const showContact = document.querySelector(".inFormer__showContact")as HTMLDivElement;

    // events

    info.addEventListener("mouseover", showTheInfo)
    info.addEventListener("mouseout", hideTheInfo)
    us.addEventListener("mouseover", showTheUs)
    us.addEventListener("mouseout", hideTheUs)
    contact.addEventListener("mouseover", showTheContact)
    contact.addEventListener("mouseout", hideTheContact)
    

    