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

//--Currency Stuff

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
