//-------------------Dashboard

window.onload = spanWelcome;
const spanWel = document.querySelector(
  ".container__h2Welcome__spanWelcome"
) as HTMLSpanElement;
// ------------------------------

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

//--Sidebar Button Events
sideMonitoring.addEventListener("click", runMonitoring);
sidecalc.addEventListener("click", runCalculator);
sideCurrency.addEventListener("click", runCurrency);
sideMemo.addEventListener("click", runMemo);
sideMoney.addEventListener("click", runMoney);
// ------------------------------

//-----Main

//--Main Dashboard Stuff
const showMonitor = document.querySelector(".showMonitor") as HTMLDivElement;
const showCalculator = document.querySelector(
  ".showCalculator"
) as HTMLDivElement;
const showCurrency = document.querySelector(".showCurrency") as HTMLDivElement;
const showMemo = document.querySelector(
  ".main__show__showMemo"
) as HTMLDivElement;
const showMoney = document.querySelector(".showMoney") as HTMLDivElement;
// ------------------------------

//-----Analytics

//--Analytics Stuff

// ------------------------------

//-----Calc.

//--Calc. Stuff
const totalAmount = document.querySelector("#total-amount") as HTMLInputElement;
const userAmount = document.querySelector("#user-amount") as HTMLInputElement;
const checkAmountBtn = document.querySelector(
  "#check-amount"
) as HTMLButtonElement;
const totalAmountBtn = document.querySelector(
  "#total-amount-button"
) as HTMLButtonElement;
const productTitle = document.querySelector(
  "#product-title"
) as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLSpanElement;
const expenditureValue = document.querySelector(
  "#expenditure-value"
) as HTMLSpanElement;
const balanceAmount = document.querySelector(
  "#balance-amount"
) as HTMLSpanElement;
const list = document.querySelector("#list") as HTMLElement;
// ------------------------------
//--Calc. Functions
let tempAmount: number = 0;
//--Function To Set Budget
totalAmountBtn.addEventListener("click", () => {
  try {
    tempAmount = Number(totalAmount.value);
    //empty or negative input
    if (tempAmount === null || tempAmount < 0) {
      alert("Value cannot be empty or negative");
    } else {
      //Set Budget
      amount.innerHTML = tempAmount.toString();
      //Set Balance
      balanceAmount.innerText = (
        tempAmount - Number(expenditureValue.innerText)
      ).toString();
      //Clear Input Box
      totalAmount.value = "";
    }
  } catch (error) {
    console.error(error);
  }
});

//--Function To Disable 'Edit' & 'Delete' Button
const disableButtons = (bool: boolean) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    // element.disabled = bool
  });
};

//--Function To Modify List Elements
const modifyElement = (element, edit = false) => {
  try {
    let parentDiv = element.parentElement;
    let currentBalance = balanceAmount.innerText;
    let currentExpense = expenditureValue.innerText;
    let parentAmount = parentDiv.querySelector(".amount").innerText;
    if (edit) {
      let parentText = parentDiv.querySelector(".product").innerText;
      productTitle.value = parentText;
      userAmount.value = parentAmount;
      disableButtons(true);
    }
    balanceAmount.innerText = (
      parseInt(currentBalance) + parseInt(parentAmount)
    ).toString();
    expenditureValue.innerText = (
      parseInt(currentExpense) - parseInt(parentAmount)
    ).toString();
    parentDiv.remove();
  } catch (error) {
    console.error(error);
  }
};

//--Function To Create Expenses List
const listCreator = (expenseName, expenseValue) => {
  try {
    let sublistContent = document.createElement("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class = "product">${expenseName}</p>
            <p class = "amount">${expenseValue}</p>`;
    let editBtn = document.createElement("button");
    editBtn.classList.add("fa-solid", "fa-pen-to-square", "edit");
    editBtn.style.fontSize = "20px";
    editBtn.addEventListener("click", () => {
      modifyElement(editBtn, true);
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteBtn.style.fontSize = "20px";
    deleteBtn.addEventListener("click", () => {
      modifyElement(deleteBtn);
    });
    sublistContent.appendChild(editBtn);
    sublistContent.appendChild(deleteBtn);
    list.appendChild(sublistContent);
  } catch (error) {
    console.error(error);
  }
};

//--Function To Calculate Expensess & Balance
checkAmountBtn.addEventListener("click", () => {
  try {
    //empty checks
    if (!userAmount.value || !productTitle.value) {
      alert("Values cannot be empty");
      return false;
    }
    //Enable buttons
    disableButtons(false);
    //Expense
    let expenditure = parseInt(userAmount.value);
    //Total expense (existing + new)
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum.toString();
    //Total balance (budget - total expense)
    const totalBalance = tempAmount - sum;
    balanceAmount.innerText = totalBalance.toString();
    //Create list
    listCreator(productTitle.value, userAmount.value);
    //Empty inputs
    productTitle.value = "";
    userAmount.value = "";
  } catch (error) {
    console.error(error);
  }
});
// ------------------------------

//--Currency Stuff

<<<<<<< HEAD
// const btn: HTMLElement | null = document.querySelector("#button");
=======
const btn:HTMLElement|null = document.querySelector("#button");

if(btn){
  btn.addEventListener("click",(event) => }
    event.preventDefault();
    // const dollar = document.getElementById()
    
//   } )

// }

>>>>>>> 1da6bae7af6ebde54623716135b7c96b2d958fc1

//-----Memo
//--Memo Stuff
const memoButton = document.querySelector("#memoButton") as HTMLButtonElement;

//--Memo Events
memoButton.addEventListener("click", runMemoTask);

function runMemoTask(ev) {
  try {
    const memoInput = document.querySelector("#memoInput") as HTMLInputElement;
    if (!memoInput) throw new Error("couldent find memeo input");

    if (memoInput.value != "") {
      const memoPar = document.querySelector("#memeoPar") as HTMLDivElement;
      if (!memoPar) throw new Error("couldent find memeo par");

      const newpar = document.createElement("p") as HTMLParagraphElement;
      if (!newpar) throw new Error("couldent find new par");

      const toilet = document.createElement("image") as HTMLParagraphElement;
<<<<<<< HEAD
      if (!toilet) throw new Error("couldent find toilet");
=======
      toilet.innerHTML = "***"
      if(!toilet) throw new Error("couldent find toilet")
>>>>>>> 1da6bae7af6ebde54623716135b7c96b2d958fc1

      const verified = document.createElement("image") as HTMLParagraphElement;
      if (!verified) throw new Error("couldent find verified");

      memoPar.appendChild(newpar);
      newpar.setAttribute("id", "newp");
      memoPar.appendChild(toilet);
      toilet.setAttribute("id", "toilet");
      memoPar.appendChild(verified);
      verified.setAttribute("id", "verified");
      newpar.innerHTML = memoInput.value;
      memoInput.value = "";
    }
  } catch (error) {
    console.error(error);
  }
}
// ----------------------------------

//-----Get LocalStorage.
function spanWelcome() {
  let newUser = localStorage.getItem("user")!;
  spanWel.innerHTML = newUser;
}
