//-----Login Page
var form = document.querySelector(".login");
var info = document.querySelector("#li-Info");
var us = document.querySelector("#li-Us");
var contact = document.querySelector("#li-Contact");
// the divs
var showInfo = document.querySelector(".inFormer__showinfo");
showInfo.style.display = "none";
var showUS = document.querySelector(".inFormer__mainUs");
showUS.style.display = "none";
var showContact = document.querySelector(".inFormer__showContact");
showContact.style.display = "none";
// events
info.addEventListener("mouseover", showTheInfo);
info.addEventListener("mouseout", hideTheInfo);
us.addEventListener("mouseover", showTheUs);
us.addEventListener("mouseout", hideTheUs);
contact.addEventListener("mouseover", showTheContact);
contact.addEventListener("mouseout", hideTheContact);
//-----Calc. Page
var buttonInput = document.querySelectorAll(".calculator__buttons__button");
var inputCalc = document.querySelector("#inputSum");
var inputTitle = document.querySelector("#inputTitle");
var buttonClear = document.querySelector("#clear");
var buttonAddToTotal = document.querySelector("#addToTotal");
window.onload = function () {
    inputCalc.value = "";
    inputTitle.value = "";
};
// events
buttonInput.forEach(function (button) {
    button.addEventListener("click", function () {
        //display value of each button
        console.log("click");
        inputCalc.value += button.value;
    });
});
//Clear the inputs
buttonClear.addEventListener("click", function () {
    inputCalc.value = "";
    inputTitle.value = "";
});
