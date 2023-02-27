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
        sublistContent.innerHTML =
            "<p class = \"product\">" + expenseName + "</p>\n            <p class = \"amount\">" + expenseValue + "</p>";
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
//--Currency Stuff
var btn = document.querySelector("#button");
<<<<<<< HEAD
// if(btn){
//   btn.addEventListener("click",(event) => {
//     event.preventDefault();
//     const dollar = document.getElementById()
//   } )
// }
=======
if (btn) {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        // const dollar = document.getElementById()
    });
}
>>>>>>> 58948bee6e39fa69913e539d688b219e0f539cca
//-----Memo
//--Memo Stuff
var memoButton = document.querySelector("#memoButton");
//--Memo Events
memoButton.addEventListener("click", runMemoTask);
function runMemoTask(ev) {
    try {
        var memoInput = document.querySelector("#memoInput");
        if (!memoInput)
            throw new Error("couldent find memeo input");
        if (memoInput.value != "") {
            var memoPar = document.querySelector("#memeoPar");
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
            memoInput.value = "";
        }
    }
    catch (error) {
        console.error(error);
    }
}
// ----------------------------------
//-----Get LocalStorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
