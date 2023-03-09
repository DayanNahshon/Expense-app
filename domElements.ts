//-----SideBar

//--SideBar Stuff
const sideMonitoring = document.querySelector(
    "#sideBarMonitor"
  ) as HTMLImageElement;
  const sidecalc = document.querySelector("#sideBarCalc") as HTMLImageElement;
  const sideCurrency = document.querySelector(
    "#sideBarCurrency"
  ) as HTMLImageElement;
  const sideMemo = document.querySelector("#sideBarMemo") as HTMLImageElement;
  const sideMoney = document.querySelector("#sideBarMoney") as HTMLImageElement;
  // ------------------------------


  //--Main Dashboard Stuff
const showMonitor = document.querySelector(".showMonitor") as HTMLDivElement;
const showCalculator = document.querySelector(
  ".showCalculator"
) as HTMLDivElement;
const showCurrency = document.querySelector(".showCurrency") as HTMLDivElement;
const showMemo = document.querySelector(
  ".main__show__showMemo"
) as HTMLDivElement;
const showMoney = document.querySelector(".showUserTool") as HTMLDivElement;
// ------------------------------

//--Sidebar Button Events
sideMonitoring.addEventListener("click", runMonitoring);
sidecalc.addEventListener("click", runCalculator);
sideCurrency.addEventListener("click", runCurrency);
sideMemo.addEventListener("click", runMemo);
sideMoney.addEventListener("click", runMoney);
// ------------------------------



//-----RunSideBar Function

function runMonitoring(){
    
    showMonitor.style.display = "block"  
    showCalculator.style.display = "none"
    showCurrency.style.display = "none"
    showMemo.style.display = "none"
    showMoney.style.display = "none"
}

function runCalculator(){
    
    showMonitor.style.display = "none"  
    showCalculator.style.display = "block"
    showCurrency.style.display = "none"
    showMemo.style.display = "none"
    showMoney.style.display = "none"
}

function runCurrency(){
    
    showMonitor.style.display = "none"  
    showCalculator.style.display = "none"
    showCurrency.style.display = "block"
    showMemo.style.display = "none"
    showMoney.style.display = "none"
}

function runMemo(){
    showMonitor.style.display = "none"  
    showCalculator.style.display = "none"
    showCurrency.style.display = "none"
    showMemo.style.display = "block"
    showMoney.style.display = "none"
}

function runMoney(){
  showMonitor.style.display = "none"  
    showCalculator.style.display = "none"
    showCurrency.style.display = "none"
    showMemo.style.display = "none"
    showMoney.style.display = "block"
}


