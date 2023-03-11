//-------------------Dashboard

window.onload = spanWelcome;
const spanWel = document.querySelector(
  ".container__h2Welcome__spanWelcome"
) as HTMLSpanElement;
// ------------------------------

//-----SideBar

//-----Main

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
    const editBtn = document.createElement("button");
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

//-----Currency
//--Currency Stuff
const dropList: NodeListOf<HTMLSelectElement> = document.querySelectorAll("select")
const fromCurrency = document.querySelector(".currencyConverter__form__drop-list__from__select-box__select") as HTMLSelectElement
const toCurrency = document.querySelector(".currencyConverter__form__drop-list__to__select-box__select") as HTMLSelectElement
const btn = document.querySelector("button") as HTMLButtonElement

//--Country List
const countryList = {
  "AED" : "AE",
  "AFN" : "AF",
  "XCD" : "AG",
  "ALL" : "AL",
  "AMD" : "AM",
  "ANG" : "AN",
  "AOA" : "AO",
  "AQD" : "AQ",
  "ARS" : "AR",
  "AUD" : "AU",
  "AZN" : "AZ",
  "BAM" : "BA",
  "BBD" : "BB",
  "BDT" : "BD",
  "XOF" : "BE",
  "BGN" : "BG",
  "BHD" : "BH",
  "BIF" : "BI",
  "BMD" : "BM",
  "BND" : "BN",
  "BOB" : "BO",
  "BRL" : "BR",
  "BSD" : "BS",
  "NOK" : "BV",
  "BWP" : "BW",
  "BYR" : "BY",
  "BZD" : "BZ",
  "CAD" : "CA",
  "CDF" : "CD",
  "XAF" : "CF",
  "CHF" : "CH",
  "CLP" : "CL",
  "CNY" : "CN",
  "COP" : "CO",
  "CRC" : "CR",
  "CUP" : "CU",
  "CVE" : "CV",
  "CYP" : "CY",
  "CZK" : "CZ",
  "DJF" : "DJ",
  "DKK" : "DK",
  "DOP" : "DO",
  "DZD" : "DZ",
  "ECS" : "EC",
  "EEK" : "EE",
  "EGP" : "EG",
  "ETB" : "ET",
  "EUR" : "FR",
  "FJD" : "FJ",
  "FKP" : "FK",
  "GBP" : "GB",
  "GEL" : "GE",
  "GGP" : "GG",
  "GHS" : "GH",
  "GIP" : "GI",
  "GMD" : "GM",
  "GNF" : "GN",
  "GTQ" : "GT",
  "GYD" : "GY",
  "HKD" : "HK",
  "HNL" : "HN",
  "HRK" : "HR",
  "HTG" : "HT",
  "HUF" : "HU",
  "IDR" : "ID",
  "ILS" : "IL",
  "INR" : "IN",
  "IQD" : "IQ",
  "IRR" : "IR",
  "ISK" : "IS",
  "JMD" : "JM",
  "JOD" : "JO",
  "JPY" : "JP",
  "KES" : "KE",
  "KGS" : "KG",
  "KHR" : "KH",
  "KMF" : "KM",
  "KPW" : "KP",
  "KRW" : "KR",
  "KWD" : "KW",
  "KYD" : "KY",
  "KZT" : "KZ",
  "LAK" : "LA",
  "LBP" : "LB",
  "LKR" : "LK",
  "LRD" : "LR",
  "LSL" : "LS",
  "LTL" : "LT",
  "LVL" : "LV",
  "LYD" : "LY",
  "MAD" : "MA",
  "MDL" : "MD",
  "MGA" : "MG",
  "MKD" : "MK",
  "MMK" : "MM",
  "MNT" : "MN",
  "MOP" : "MO",
  "MRO" : "MR",
  "MTL" : "MT",
  "MUR" : "MU",
  "MVR" : "MV",
  "MWK" : "MW",
  "MXN" : "MX",
  "MYR" : "MY",
  "MZN" : "MZ",
  "NAD" : "NA",
  "XPF" : "NC",
  "NGN" : "NG",
  "NIO" : "NI",
  "NPR" : "NP",
  "NZD" : "NZ",
  "OMR" : "OM",
  "PAB" : "PA",
  "PEN" : "PE",
  "PGK" : "PG",
  "PHP" : "PH",
  "PKR" : "PK",
  "PLN" : "PL",
  "PYG" : "PY",
  "QAR" : "QA",
  "RON" : "RO",
  "RSD" : "RS",
  "RUB" : "RU",
  "RWF" : "RW",
  "SAR" : "SA",
  "SBD" : "SB",
  "SCR" : "SC",
  "SDG" : "SD",
  "SEK" : "SE",
  "SGD" : "SG",
  "SKK" : "SK",
  "SLL" : "SL",
  "SOS" : "SO",
  "SRD" : "SR",
  "STD" : "ST",
  "SVC" : "SV",
  "SYP" : "SY",
  "SZL" : "SZ",
  "THB" : "TH",
  "TJS" : "TJ",
  "TMT" : "TM",
  "TND" : "TN",
  "TOP" : "TO",
  "TRY" : "TR",
  "TTD" : "TT",
  "TWD" : "TW",
  "TZS" : "TZ",
  "UAH" : "UA",
  "UGX" : "UG",
  "USD" : "US",
  "UYU" : "UY",
  "UZS" : "UZ",
  "VEF" : "VE",
  "VND" : "VN",
  "VUV" : "VU",
  "YER" : "YE",
  "ZAR" : "ZA",
  "ZMK" : "ZM",
  "ZWD" : "ZW"
}

//--Currency Events
for (let i = 0; i < dropList.length; i++) {
  for(let currency_code in countryList){
      //Creating option tag with passing currency code as a text and value
      let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : ""
      let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`
      //Inserting option tag inside select tag
      dropList[i].insertAdjacentHTML("beforeend", optionTag)
  }

  //Calling loadFlag with passing target element as an argument
  dropList[i].addEventListener("change", e =>{
      loadFlag(e.target)
  });
}

const loadFlag = (element) => {
  try{
      for(let code in countryList){
          //If currency code of country list is equal to option value
          if(code == element.value){
              let imgTag = element.parentElement.querySelector("img")
              //Selecting img tag
              imgTag.src = `https://flagcdn.com/48x36/${countryList[code].toLowerCase()}.png`
          }
      }
  }catch(error){
      console.error(error)
  }
}

const exchangeIcon = document.querySelector(".currencyConverter__form__drop-list__icon") as HTMLElement
exchangeIcon.addEventListener("click", ()=>{
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
})

btn.addEventListener("click", e => {
  e.preventDefault() //Preventing form from submitting
  getExchangeRate()
})


const getExchangeRate = () => {
  try{
      const amount = document.querySelector("input") as HTMLInputElement
      let amountValue:number = Number(amount.value)
      //If user don't enter any value or enter 0 then we'll put 1 value by default in the input field
      if(amountValue == null || amountValue == 0){
          amount.value = "1"
          amountValue = 1
      }
      let url = `https://v6.exchangerate-api.com/v6/42f37d829156a40ca2d79f43/latest/${fromCurrency.value}`
      //Fetching api response and returning it with parsing into json object and in another then method receiving that object
      fetch(url).then(response => response.json()).then(result => {
          let exchangeRate = result.conversion_rates[toCurrency.value]
          let totalExchangeRate = (amountValue * exchangeRate).toFixed(2)
          const exchangeRateText = document.querySelector(".currencyConverter__form__exchange-rate") as HTMLElement
          exchangeRateText.innerText = `${amountValue} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`
      })
  }catch(error){
      console.error(error)
  }
}

// ------------------------------

//-----Memo
//--Memo Stuff
const memoButton = document.querySelector("#memoButton") as HTMLButtonElement;

//--Memo Events
memoButton.addEventListener("click", runMemoTask);
class Task {
  id: string = `id-${Math.random()}`;
  constructor(public text: string, public finished: boolean) {}
}
const tasks: Task[] = [];

function runMemoTask(ev) {
  try {
    const memoInput = document.querySelector("#memoInput") as HTMLInputElement;
    if (!memoInput) throw new Error("couldent find memeo input");

    if (memoInput.value != "") {
      tasks.push(new Task(memoInput.value, false));

      const memoPar = document.querySelector("#memeoPar") as HTMLDivElement;
      if (!memoPar) throw new Error("couldent find memeo par");

      renderTasks(tasks, memoPar);

      memoInput.value = "";
    }
  } catch (error) {
    console.error(error);
  }
}

function renderTasks(tasks: Task[], domElement: Element) {
  try {
    const html: string = tasks
      .map((task) => {
        if (!task.finished) {
          return `<p class="newp">${task.text} <span onclick="handleDone('${task.id}')" class="fa-solid fa-pen-to-square"></span>
      <span onclick="handleDelete('${task.id}')" class="fa-solid fa-trash-can" id="delete"></span>
      </p>`;
        } else {
          return `<p class="newp newp--finished">${task.text} <span onclick="handleDone('${task.id}')" class="fa-solid fa-pen-to-square"></span>
      <span class="fa-solid fa-trash-can" id="delete"></span>
      </p>`;
        }
      })
      .join(" ");
    domElement.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function handleDelete(taskId: string) {
  try{
    //find from tasks
    const index: number = tasks.findIndex((task) => task.id === taskId);

    if (index === -1) throw new Error("couldnt found tasks in array of tasks");

    const memoPar = document.querySelector("#memeoPar") as HTMLDivElement;
    if (!memoPar) throw new Error("couldent find memeo par");

    memoPar.remove()
    

  }catch (error) {
    console.error(error)
  }
}

function handleDone(taskId: string) {
  try {
    
    //find from tasks
    const index: number = tasks.findIndex((task) => task.id === taskId);

    if (index === -1) throw new Error("couldnt found tasks in array of tasks");

    tasks[index].finished = !tasks[index].finished;

    const memoPar = document.querySelector("#memeoPar") as HTMLDivElement;
    if (!memoPar) throw new Error("couldent find memeo par");

    renderTasks(tasks, memoPar);
  } catch (error) {
    console.error(error);
  }
}

function handleDel(){
  try{



  }catch(error){
    console.error(error)
  }
}
// -----------user tool-----------------------
const poalim = document.querySelector("#poalim")!.addEventListener("click", runPoalim)
const leumi = document.querySelector("#leumi")!.addEventListener("click", runLeumi)
const mizrahi = document.querySelector("#mizrahi")!.addEventListener("click", runMizrahi)
const discount = document.querySelector("#discount")!.addEventListener("click", runDiscount)









//-----Get LocalStorage.
function spanWelcome() {
  let newUser = localStorage.getItem("user")!;
  spanWel.innerHTML = newUser;
}
