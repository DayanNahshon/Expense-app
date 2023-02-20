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
