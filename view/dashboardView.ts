window.onload = spanWelcome;
const spanWel = document.querySelector(
  ".container__h2Welcome__spanWelcome"
) as HTMLSpanElement;
// all sidebar stuff
const sideMonitoring = document.querySelector("#sideBarMonitor")as HTMLImageElement;
const sidecalc = document.querySelector("#sideBarCalc")as HTMLImageElement;
const sideCurrency = document.querySelector("#sideBarCurrency")as HTMLImageElement;
const sideMemo = document.querySelector("#sideBarMemo")as HTMLImageElement;
const sideMoney = document.querySelector("#sideBarMoney")as HTMLImageElement;

// main dashboard

const showMonitor = document.querySelector(".showMonitor")as HTMLDivElement;
const showCalculator = document.querySelector(".showCalculator")as HTMLDivElement;
const showCurrency = document.querySelector(".showCurrency")as HTMLDivElement;
const showMemo = document.querySelector(".main__show__showMemo")as HTMLDivElement;
const showMoney = document.querySelector(".showMoney")as HTMLDivElement;
    





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
const memoButton = document.querySelector("#memoButton") as HTMLButtonElement;



memoButton.addEventListener("click", runMemoTask);

function runMemoTask(ev) {
  
  try {
    
    const memoInput = document.querySelector("#memoInput") as HTMLInputElement;
     if(!memoInput) throw new Error("couldent find memeo input")

    if (memoInput.value != ""){
      const memoPar = document.querySelector("#memoPar") as HTMLDivElement; 
      if(!memoPar) throw new Error("couldent find memeo par")
      
      const newpar = document.createElement("p") as HTMLParagraphElement;
      if(!newpar) throw new Error("couldent find new par")

      const toilet = document.createElement("image") as HTMLParagraphElement;
      if(!toilet) throw new Error("couldent find toilet")

      const verified = document.createElement("image") as HTMLParagraphElement;
      if(!verified) throw new Error("couldent find verified")

      memoPar.appendChild(newpar);
      newpar.setAttribute("id", "newp")
      memoPar.appendChild(toilet);
      toilet.setAttribute("id", "toilet")
      memoPar.appendChild(verified);
      verified.setAttribute("id", "verified")
      newpar.innerHTML = memoInput.value;
    }
  } catch (error) {
    console.error(error)
  }
}

// ----------------------------------

// get localstorage.
function spanWelcome() {
  let newUser = localStorage.getItem("user")!;
     spanWel.innerHTML = newUser;
}
