//-------------------Dashboard
window.onload = spanWelcome;
var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
// ------------------------------
//-----SideBar
//--SideBar Stuff
var sideMonitoring = document.querySelector("#sideBarMonitor");
var sidecalc = document.querySelector("#sideBarCalc");
var sideCurrency = document.querySelector("#sideBarCurrency");
var sideMemo = document.querySelector("#sideBarMemo");
var sideMoney = document.querySelector("#sideBarMoney");
// ------------------------------
//--Sidebar Button Events
sideMonitoring.addEventListener("click", runMonitoring);
sidecalc.addEventListener("click", runCalculator);
sideCurrency.addEventListener("click", runCurrency);
sideMemo.addEventListener("click", runMemo);
sideMoney.addEventListener("click", runMoney);
// ------------------------------
//-----Main
//--Main Dashboard Stuff
var showMonitor = document.querySelector(".showMonitor");
var showCalculator = document.querySelector(".showCalculator");
var showCurrency = document.querySelector(".showCurrency");
var showMemo = document.querySelector(".main__show__showMemo");
var showMoney = document.querySelector(".showMoney");
// ------------------------------
//-----Monitoring
//--Monitoring Stuff
// ------------------------------
//-----Calc.
//--Calc. Stuff
var buttonInput = document.querySelectorAll(".calculator__buttons__button");
var inputCalc = document.querySelector("#inputSum");
var inputTitle = document.querySelector("#inputTitle");
var buttonClear = document.querySelector("#clear");
var buttonAddToTotal = document.querySelector("#addToTotal");
window.onload = function () {
    inputCalc.value = "";
    inputTitle.value = "";
};
//--Calc. Events
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
// ------------------------------
//-----Memo
//--Memo Stuff
var memoButton = document.querySelector("#memoButton");
var memoInput = document.querySelector("#memoInput");
var memoPar = document.querySelector("#memoPar");
//--Memo Events
memoButton.addEventListener("click", runMemoTask);
function runMemoTask(e) {
    e.preventDefault();
    try {
        if (memoInput.value != "") {
            var newpar = document.createElement("p");
            var toilet = document.createElement("image");
            var verified = document.createElement("image");
            memoPar.appendChild(newpar);
            memoPar.appendChild(toilet);
            memoPar.appendChild(verified);
            newpar.innerHTML = memoInput.value;
        }
    }
    catch (error) {
        console.log("error");
        return memoInput.required;
    }
}
// ----------------------------------
//-----Get LocalStorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
