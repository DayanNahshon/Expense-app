window.onload = spanWelcome;
var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
// all sidebar stuff
var sideMonitoring = document.querySelector("#sideBarMonitor");
var sidecalc = document.querySelector("#sideBarCalc");
var sideCurrency = document.querySelector("#sideBarCurrency");
var sideMemo = document.querySelector("#sideBarMemo");
var sideMoney = document.querySelector("#sideBarMoney");
// main dashboard
var showMonitor = document.querySelector(".showMonitor");
var showCalculator = document.querySelector(".showCalculator");
var showCurrency = document.querySelector(".showCurrency");
var showMemo = document.querySelector(".main__show__showMemo");
var showMoney = document.querySelector(".showMoney");
// sidebar button events
sideMonitoring.addEventListener("click", runMonitoring);
sidecalc.addEventListener("click", runCalculator);
sideCurrency.addEventListener("click", runCurrency);
sideMemo.addEventListener("click", runMemo);
sideMoney.addEventListener("click", runMoney);
// ------------------------------
// all localstorage here
// --------------------------------
// <!--Dashboard-->
// memo
var memoButton = document.querySelector("#memoButton");
memoButton.addEventListener("click", runMemoTask);
function runMemoTask(ev) {
    try {
        var memoInput = document.querySelector("#memoInput");
        if (!memoInput)
            throw new Error("couldent find memeo input");
        if (memoInput.value != "") {
            var memoPar = document.querySelector("#memoPar");
            if (!memoPar)
                throw new Error("couldent find memeo par");
            var newpar = document.createElement("p");
            if (!newpar)
                throw new Error("couldent find new par");
            var toilet = document.createElement("image");
            if (!toilet)
                throw new Error("couldent find toilet");
            var verified = document.createElement("image");
            if (!verified)
                throw new Error("couldent find verified");
            memoPar.appendChild(newpar);
            newpar.setAttribute("id", "newp");
            memoPar.appendChild(toilet);
            toilet.setAttribute("id", "toilet");
            memoPar.appendChild(verified);
            verified.setAttribute("id", "verified");
            newpar.innerHTML = memoInput.value;
        }
    }
    catch (error) {
        console.error(error);
    }
}
// ----------------------------------
// get localstorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
