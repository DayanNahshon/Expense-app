//-------------------Dashboard
window.onload = spanWelcome;
var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
// ------------------------------
//-----SideBar
//-----Main
//-----Analytics
//--Analytics Stuff
// ------------------------------
//-----Calc.
//--Calc. Stuff
var totalAmount = document.querySelector("#total-amount");
var userAmount = document.querySelector("#user-amount");
var checkAmountBtn = document.querySelector("#check-amount");
var totalAmountBtn = document.querySelector("#total-amount-button");
var productTitle = document.querySelector("#product-title");
var amount = document.querySelector("#amount");
var expenditureValue = document.querySelector("#expenditure-value");
var balanceAmount = document.querySelector("#balance-amount");
var list = document.querySelector("#list");
// ------------------------------
//--Calc. Functions
var tempAmount = 0;
//--Function To Set Budget
totalAmountBtn.addEventListener("click", function () {
    try {
        tempAmount = Number(totalAmount.value);
        //empty or negative input
        if (tempAmount === null || tempAmount < 0) {
            alert("Value cannot be empty or negative");
        }
        else {
            //Set Budget
            amount.innerHTML = tempAmount.toString();
            //Set Balance
            balanceAmount.innerText = (tempAmount - Number(expenditureValue.innerText)).toString();
            //Clear Input Box
            totalAmount.value = "";
        }
    }
    catch (error) {
        console.error(error);
    }
});
//--Function To Disable 'Edit' & 'Delete' Button
var disableButtons = function (bool) {
    var editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach(function (element) {
        // element.disabled = bool
    });
};
//--Function To Modify List Elements
var modifyElement = function (element, edit) {
    if (edit === void 0) { edit = false; }
    try {
        var parentDiv = element.parentElement;
        var currentBalance = balanceAmount.innerText;
        var currentExpense = expenditureValue.innerText;
        var parentAmount = parentDiv.querySelector(".amount").innerText;
        if (edit) {
            var parentText = parentDiv.querySelector(".product").innerText;
            productTitle.value = parentText;
            userAmount.value = parentAmount;
            disableButtons(true);
        }
        balanceAmount.innerText = (parseInt(currentBalance) + parseInt(parentAmount)).toString();
        expenditureValue.innerText = (parseInt(currentExpense) - parseInt(parentAmount)).toString();
        parentDiv.remove();
    }
    catch (error) {
        console.error(error);
    }
};
//--Function To Create Expenses List
var listCreator = function (expenseName, expenseValue) {
    try {
        var sublistContent = document.createElement("div");
        sublistContent.classList.add("sublist-content", "flex-space");
        list.appendChild(sublistContent);
        sublistContent.innerHTML = "<p class = \"product\">" + expenseName + "</p>\n            <p class = \"amount\">" + expenseValue + "</p>";
        var editBtn_1 = document.createElement("button");
        editBtn_1.classList.add("fa-solid", "fa-pen-to-square", "edit");
        editBtn_1.style.fontSize = "20px";
        editBtn_1.addEventListener("click", function () {
            modifyElement(editBtn_1, true);
        });
        var deleteBtn_1 = document.createElement("button");
        deleteBtn_1.classList.add("fa-solid", "fa-trash-can", "delete");
        deleteBtn_1.style.fontSize = "20px";
        deleteBtn_1.addEventListener("click", function () {
            modifyElement(deleteBtn_1);
        });
        sublistContent.appendChild(editBtn_1);
        sublistContent.appendChild(deleteBtn_1);
        list.appendChild(sublistContent);
    }
    catch (error) {
        console.error(error);
    }
};
//--Function To Calculate Expensess & Balance
checkAmountBtn.addEventListener("click", function () {
    try {
        //empty checks
        if (!userAmount.value || !productTitle.value) {
            alert("Values cannot be empty");
            return false;
        }
        //Enable buttons
        disableButtons(false);
        //Expense
        var expenditure = parseInt(userAmount.value);
        //Total expense (existing + new)
        var sum = parseInt(expenditureValue.innerText) + expenditure;
        expenditureValue.innerText = sum.toString();
        //Total balance (budget - total expense)
        var totalBalance = tempAmount - sum;
        balanceAmount.innerText = totalBalance.toString();
        //Create list
        listCreator(productTitle.value, userAmount.value);
        //Empty inputs
        productTitle.value = "";
        userAmount.value = "";
    }
    catch (error) {
        console.error(error);
    }
});
// ------------------------------
//-----Currency
//--Currency Stuff
var dropList = document.querySelectorAll("select");
var fromCurrency = document.querySelector(".currencyConverter__form__drop-list__from__select-box__select");
var toCurrency = document.querySelector(".currencyConverter__form__drop-list__to__select-box__select");
var btn = document.querySelector("button");
//--Country List
var countryList = {
    "AED": "AE",
    "AFN": "AF",
    "XCD": "AG",
    "ALL": "AL",
    "AMD": "AM",
    "ANG": "AN",
    "AOA": "AO",
    "AQD": "AQ",
    "ARS": "AR",
    "AUD": "AU",
    "AZN": "AZ",
    "BAM": "BA",
    "BBD": "BB",
    "BDT": "BD",
    "XOF": "BE",
    "BGN": "BG",
    "BHD": "BH",
    "BIF": "BI",
    "BMD": "BM",
    "BND": "BN",
    "BOB": "BO",
    "BRL": "BR",
    "BSD": "BS",
    "NOK": "BV",
    "BWP": "BW",
    "BYR": "BY",
    "BZD": "BZ",
    "CAD": "CA",
    "CDF": "CD",
    "XAF": "CF",
    "CHF": "CH",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "CRC": "CR",
    "CUP": "CU",
    "CVE": "CV",
    "CYP": "CY",
    "CZK": "CZ",
    "DJF": "DJ",
    "DKK": "DK",
    "DOP": "DO",
    "DZD": "DZ",
    "ECS": "EC",
    "EEK": "EE",
    "EGP": "EG",
    "ETB": "ET",
    "EUR": "FR",
    "FJD": "FJ",
    "FKP": "FK",
    "GBP": "GB",
    "GEL": "GE",
    "GGP": "GG",
    "GHS": "GH",
    "GIP": "GI",
    "GMD": "GM",
    "GNF": "GN",
    "GTQ": "GT",
    "GYD": "GY",
    "HKD": "HK",
    "HNL": "HN",
    "HRK": "HR",
    "HTG": "HT",
    "HUF": "HU",
    "IDR": "ID",
    "ILS": "IL",
    "INR": "IN",
    "IQD": "IQ",
    "IRR": "IR",
    "ISK": "IS",
    "JMD": "JM",
    "JOD": "JO",
    "JPY": "JP",
    "KES": "KE",
    "KGS": "KG",
    "KHR": "KH",
    "KMF": "KM",
    "KPW": "KP",
    "KRW": "KR",
    "KWD": "KW",
    "KYD": "KY",
    "KZT": "KZ",
    "LAK": "LA",
    "LBP": "LB",
    "LKR": "LK",
    "LRD": "LR",
    "LSL": "LS",
    "LTL": "LT",
    "LVL": "LV",
    "LYD": "LY",
    "MAD": "MA",
    "MDL": "MD",
    "MGA": "MG",
    "MKD": "MK",
    "MMK": "MM",
    "MNT": "MN",
    "MOP": "MO",
    "MRO": "MR",
    "MTL": "MT",
    "MUR": "MU",
    "MVR": "MV",
    "MWK": "MW",
    "MXN": "MX",
    "MYR": "MY",
    "MZN": "MZ",
    "NAD": "NA",
    "XPF": "NC",
    "NGN": "NG",
    "NIO": "NI",
    "NPR": "NP",
    "NZD": "NZ",
    "OMR": "OM",
    "PAB": "PA",
    "PEN": "PE",
    "PGK": "PG",
    "PHP": "PH",
    "PKR": "PK",
    "PLN": "PL",
    "PYG": "PY",
    "QAR": "QA",
    "RON": "RO",
    "RSD": "RS",
    "RUB": "RU",
    "RWF": "RW",
    "SAR": "SA",
    "SBD": "SB",
    "SCR": "SC",
    "SDG": "SD",
    "SEK": "SE",
    "SGD": "SG",
    "SKK": "SK",
    "SLL": "SL",
    "SOS": "SO",
    "SRD": "SR",
    "STD": "ST",
    "SVC": "SV",
    "SYP": "SY",
    "SZL": "SZ",
    "THB": "TH",
    "TJS": "TJ",
    "TMT": "TM",
    "TND": "TN",
    "TOP": "TO",
    "TRY": "TR",
    "TTD": "TT",
    "TWD": "TW",
    "TZS": "TZ",
    "UAH": "UA",
    "UGX": "UG",
    "USD": "US",
    "UYU": "UY",
    "UZS": "UZ",
    "VEF": "VE",
    "VND": "VN",
    "VUV": "VU",
    "YER": "YE",
    "ZAR": "ZA",
    "ZMK": "ZM",
    "ZWD": "ZW"
};
//--Currency Events
for (var i = 0; i < dropList.length; i++) {
    for (var currency_code in countryList) {
        //Creating option tag with passing currency code as a text and value
        var selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "NPR" ? "selected" : "";
        var optionTag = "<option value=\"" + currency_code + "\" " + selected + ">" + currency_code + "</option>";
        //Inserting option tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    //Calling loadFlag with passing target element as an argument
    dropList[i].addEventListener("change", function (e) {
        loadFlag(e.target);
    });
}
var loadFlag = function (element) {
    try {
        for (var code in countryList) {
            //If currency code of country list is equal to option value
            if (code == element.value) {
                var imgTag = element.parentElement.querySelector("img");
                //Selecting img tag
                imgTag.src = "https://flagcdn.com/48x36/" + countryList[code].toLowerCase() + ".png";
            }
        }
    }
    catch (error) {
        console.error(error);
    }
};
var exchangeIcon = document.querySelector(".currencyConverter__form__drop-list__icon");
exchangeIcon.addEventListener("click", function () {
    var tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});
btn.addEventListener("click", function (e) {
    e.preventDefault(); //Preventing form from submitting
    getExchangeRate();
});
var getExchangeRate = function () {
    try {
        var amount_1 = document.querySelector("input");
        var amountValue_1 = Number(amount_1.value);
        //If user don't enter any value or enter 0 then we'll put 1 value by default in the input field
        if (amountValue_1 == null || amountValue_1 == 0) {
            amount_1.value = "1";
            amountValue_1 = 1;
        }
        var url = "https://v6.exchangerate-api.com/v6/42f37d829156a40ca2d79f43/latest/" + fromCurrency.value;
        //Fetching api response and returning it with parsing into json object and in another then method receiving that object
        fetch(url).then(function (response) { return response.json(); }).then(function (result) {
            var exchangeRate = result.conversion_rates[toCurrency.value];
            var totalExchangeRate = (amountValue_1 * exchangeRate).toFixed(2);
            var exchangeRateText = document.querySelector(".currencyConverter__form__exchange-rate");
            exchangeRateText.innerText = amountValue_1 + " " + fromCurrency.value + " = " + totalExchangeRate + " " + toCurrency.value;
        });
    }
    catch (error) {
        console.error(error);
    }
};
// ------------------------------
//-----Memo
//--Memo Stuff
var memoButton = document.querySelector("#memoButton");
//--Memo Events
memoButton.addEventListener("click", runMemoTask);
var Task = /** @class */ (function () {
    function Task(text, finished) {
        this.text = text;
        this.finished = finished;
        this.id = "id-" + Math.random();
    }
    return Task;
}());
var tasks = [];
function runMemoTask(ev) {
    try {
        var memoInput = document.querySelector("#memoInput");
        if (!memoInput)
            throw new Error("couldent find memeo input");
        if (memoInput.value != "") {
            tasks.push(new Task(memoInput.value, false));
            var memoPar = document.querySelector("#memeoPar");
            if (!memoPar)
                throw new Error("couldent find memeo par");
            renderTasks(tasks, memoPar);
            memoInput.value = "";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function renderTasks(tasks, domElement) {
    try {
        var html = tasks
            .map(function (task) {
            if (!task.finished) {
                return "<p class=\"newp\">" + task.text + " <span onclick=\"handleDone('" + task.id + "')\" class=\"fa-solid fa-pen-to-square\"></span>\n      <span onclick=\"handleDelete('" + task.id + "')\" class=\"fa-solid fa-trash-can\" id=\"delete\"></span>\n      </p>";
            }
            else {
                return "<p class=\"newp newp--finished\">" + task.text + " <span onclick=\"handleDone('" + task.id + "')\" class=\"fa-solid fa-pen-to-square\"></span>\n      <span class=\"fa-solid fa-trash-can\" id=\"delete\"></span>\n      </p>";
            }
        })
            .join(" ");
        domElement.innerHTML = html;
    }
    catch (error) {
        console.error(error);
    }
}
function handleDelete(taskId) {
    try {
        //find from tasks
        var index = tasks.findIndex(function (task) { return task.id === taskId; });
        if (index === -1)
            throw new Error("couldnt found tasks in array of tasks");
        var memoPar = document.querySelector("#memeoPar");
        if (!memoPar)
            throw new Error("couldent find memeo par");
        memoPar.remove();
    }
    catch (error) {
        console.error(error);
    }
}
function handleDone(taskId) {
    try {
        //find from tasks
        var index = tasks.findIndex(function (task) { return task.id === taskId; });
        if (index === -1)
            throw new Error("couldnt found tasks in array of tasks");
        tasks[index].finished = !tasks[index].finished;
        var memoPar = document.querySelector("#memeoPar");
        if (!memoPar)
            throw new Error("couldent find memeo par");
        renderTasks(tasks, memoPar);
    }
    catch (error) {
        console.error(error);
    }
}
function handleDel() {
    try {
    }
    catch (error) {
        console.error(error);
    }
}
// -----------user tool-----------------------
var poalim = document.querySelector("#poalim").addEventListener("click", runPoalim);
var leumi = document.querySelector("#leumi").addEventListener("click", runLeumi);
var mizrahi = document.querySelector("#mizrahi").addEventListener("click", runMizrahi);
var discount = document.querySelector("#discount").addEventListener("click", runDiscount);
//-----Get LocalStorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
