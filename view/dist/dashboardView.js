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
//--Currency Stuff
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
                return "<p class=\"newp\">" + task.text + " <span onclick=\"handleDone('" + task.id + "')\" class=\"fa-solid fa-pen-to-square\"></span>\n      <span class=\"fa-solid fa-trash-can\" id=\"delete\"></span>\n      </p>";
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
// ----------------------------------
//-----Get LocalStorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
