//-----Login Page
var form = document.querySelector(".login");
var info = document.querySelector("#li-Info");
var us = document.querySelector("#li-Us");
var contact = document.querySelector("#li-Contact");
// the divs
var showInfo = document.querySelector(".inFormer__showinfo");
var showUS = document.querySelector(".inFormer__mainUs");
var showContact = document.querySelector(".inFormer__showContact");
console.log(showUS);
// events
info.addEventListener("mouseover", showTheInfo);
info.addEventListener("mouseout", hideTheInfo);
us.addEventListener("mouseover", showTheUs);
us.addEventListener("mouseout", hideTheUs);
contact.addEventListener("mouseover", showTheContact);
contact.addEventListener("mouseout", hideTheContact);
//-----Calc. Page
// const buttonInput = document.querySelectorAll(".calculator__buttons__button") as NodeListOf<HTMLInputElement>
// const inputCalc = document.querySelector("#inputSum") as HTMLInputElement
// const inputTitle = document.querySelector("#inputTitle") as HTMLInputElement
// const buttonClear = document.querySelector("#clear") as HTMLButtonElement
// const buttonAddToTotal = document.querySelector("#addToTotal") as HTMLButtonElement
// window.onload = () => {
//     inputCalc.value = ""
//     inputTitle.value = ""
// }
// // events
// buttonInput.forEach((button) => {
//     button.addEventListener("click", () => {
//         //display value of each button
//         console.log("click")
//         inputCalc.value += button.value
//     })
// })
// //Clear the inputs
// buttonClear.addEventListener("click", () => {
//     inputCalc.value = ""
//     inputTitle.value = ""
// });
