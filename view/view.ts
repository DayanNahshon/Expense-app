//-----Login Page
const form = document.querySelector(".login")as HTMLFormElement;
const info = document.querySelector("#li-Info")as HTMLElement;
const us = document.querySelector("#li-Us")as HTMLElement;
const contact = document.querySelector("#li-Contact")as HTMLElement;
const itsik_par = document.querySelector(".inFormer__showUs__itsik__par")as HTMLParagraphElement;
const dayan_par = document.querySelector(".inFormer__showUs__dayan__par")as HTMLParagraphElement;
const shaili_par = document.querySelector(".inFormer__showUs__shaili__par")as HTMLParagraphElement;


// the divs
const showInfo = document.querySelector(".inFormer__showinfo")as HTMLDivElement;
const showUS = document.querySelector(".inFormer__showUs")as HTMLDivElement;
const showContact = document.querySelector(".inFormer__showContact")as HTMLDivElement;

// events
// info.addEventListener("mouseover", showTheInfo)
// info.addEventListener("mouseout", hideTheInfo)
// us.addEventListener("mouseover", showTheUs)
// us.addEventListener("mouseout", hideTheUs)
// contact.addEventListener("mouseover", showTheContact)
// contact.addEventListener("mouseout", hideTheContact)


//-----Calc. Page
const buttonInput = document.querySelectorAll(".calculator__buttons__button") as NodeListOf<HTMLInputElement>
const inputCalc = document.querySelector("#inputSum") as HTMLInputElement
const inputTitle = document.querySelector("#inputTitle") as HTMLInputElement
const buttonClear = document.querySelector("#clear") as HTMLButtonElement
const buttonAddToTotal = document.querySelector("#addToTotal") as HTMLButtonElement

window.onload = () => {
    inputCalc.value = ""
    inputTitle.value = ""
}

// events
buttonInput.forEach((button) => {
    button.addEventListener("click", () => {
        //display value of each button
        console.log("click")
        inputCalc.value += button.value
    })
})

//Clear the inputs
buttonClear.addEventListener("click", () => {
    inputCalc.value = ""
    inputTitle.value = ""
});





    

    