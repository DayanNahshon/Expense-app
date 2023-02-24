//-------------------Dashboard

window.onload = spanWelcome;
const spanWel = document.querySelector(
  ".container__h2Welcome__spanWelcome"
) as HTMLSpanElement;
// ------------------------------

//-----SideBar

//--SideBar Stuff
const sideMonitoring = document.querySelector("#sideBarMonitor")as HTMLImageElement;
const sidecalc = document.querySelector("#sideBarCalc")as HTMLImageElement;
const sideCurrency = document.querySelector("#sideBarCurrency")as HTMLImageElement;
const sideMemo = document.querySelector("#sideBarMemo")as HTMLImageElement;
const sideMoney = document.querySelector("#sideBarMoney")as HTMLImageElement;
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
const showMonitor = document.querySelector(".showMonitor")as HTMLDivElement;
const showCalculator = document.querySelector(".showCalculator")as HTMLDivElement;
const showCurrency = document.querySelector(".showCurrency")as HTMLDivElement;
const showMemo = document.querySelector(".main__show__showMemo")as HTMLDivElement;
const showMoney = document.querySelector(".showMoney")as HTMLDivElement;
// ------------------------------


//-----Monitoring

//--Monitoring Stuff

// ------------------------------

//-----Calc.

//--Calc. Stuff
const buttonInput = document.querySelectorAll(".calculator__buttons__button") as NodeListOf<HTMLInputElement>
const inputCalc = document.querySelector("#inputSum") as HTMLInputElement
const inputTitle = document.querySelector("#inputTitle") as HTMLInputElement
const buttonClear = document.querySelector("#clear") as HTMLButtonElement
const buttonAddToTotal = document.querySelector("#addToTotal") as HTMLButtonElement

window.onload = () => {
  inputCalc.value = ""
  inputTitle.value = ""
}

//--Calc. Events
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
// ------------------------------

//-----Memo
//--Memo Stuff
const memoButton = document.querySelector("#memoButton") as HTMLButtonElement;
let memoInput = document.querySelector("#memoInput") as HTMLInputElement;
const memoPar = document.querySelector("#memoPar") as HTMLDivElement;

//--Memo Events
memoButton.addEventListener("click", runMemoTask);

function runMemoTask(e) {
  e.preventDefault();
  try {
    if (memoInput.value != "") {
      const newpar = document.createElement("p") as HTMLParagraphElement;
      const toilet = document.createElement("image") as HTMLParagraphElement;
      const verified = document.createElement("image") as HTMLParagraphElement;
      memoPar.appendChild(newpar);
      memoPar.appendChild(toilet);
      memoPar.appendChild(verified);
      newpar.innerHTML = memoInput.value;
    }
  } catch (error) {
    return memoInput.required;
  }
}
// ----------------------------------



//-----Get LocalStorage.
function spanWelcome() {
  let newUser = localStorage.getItem("user")!;
     spanWel.innerHTML = newUser;
}

