//-----SideBar
//--SideBar Stuff
var sideMonitoring = document.querySelector("#sideBarMonitor");
var sidecalc = document.querySelector("#sideBarCalc");
var sideCurrency = document.querySelector("#sideBarCurrency");
var sideMemo = document.querySelector("#sideBarMemo");
var sideMoney = document.querySelector("#sideBarMoney");
// ------------------------------
//--Main Dashboard Stuff
var showMonitor = document.querySelector(".showMonitor");
var showCalculator = document.querySelector(".showCalculator");
var showCurrency = document.querySelector(".showCurrency");
var showMemo = document.querySelector(".main__show__showMemo");
var showMoney = document.querySelector(".showUserTool");
// ------------------------------
//--Sidebar Button Events
sideMonitoring.addEventListener("click", runMonitoring);
sidecalc.addEventListener("click", runCalculator);
sideCurrency.addEventListener("click", runCurrency);
sideMemo.addEventListener("click", runMemo);
sideMoney.addEventListener("click", runMoney);
// ------------------------------
//-----RunSideBar Function
function runMonitoring() {
    showMonitor.style.display = "block";
    showCalculator.style.display = "none";
    showCurrency.style.display = "none";
    showMemo.style.display = "none";
    showMoney.style.display = "none";
}
function runCalculator() {
    showMonitor.style.display = "none";
    showCalculator.style.display = "block";
    showCurrency.style.display = "none";
    showMemo.style.display = "none";
    showMoney.style.display = "none";
}
function runCurrency() {
    showMonitor.style.display = "none";
    showCalculator.style.display = "none";
    showCurrency.style.display = "block";
    showMemo.style.display = "none";
    showMoney.style.display = "none";
}
function runMemo() {
    showMonitor.style.display = "none";
    showCalculator.style.display = "none";
    showCurrency.style.display = "none";
    showMemo.style.display = "block";
    showMoney.style.display = "none";
}
function runMoney() {
    showMonitor.style.display = "none";
    showCalculator.style.display = "none";
    showCurrency.style.display = "none";
    showMemo.style.display = "none";
    showMoney.style.display = "block";
}
// user tool function
function runPoalim() {
    window.open("https://www.bankhapoalim.co.il/he", '_blank');
}
function runLeumi() {
    window.open("https://www.leumi.co.il/", '_blank');
}
function runMizrahi() {
    window.open("https://www.mizrahi-tefahot.co.il/", '_blank');
}
function runDiscount() {
    window.open("https://www.leumi.co.il/", '_blank');
}
