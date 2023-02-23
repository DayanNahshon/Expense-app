window.onload = spanWelcome;

// all sidebar stuff

const sideBar = document.querySelectorAll("#sideBar")!;

function sidebarListen() {
  try {
    const sideBarElement = document.querySelectorAll("#sideBar");
    if (sideBarElement) {
      sideBarElement.forEach((bar, index) => {
        bar.addEventListener("click", () => {
          renderSideBarNav(index);
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
}

sidebarListen();

function renderSideBarNav(index: number): void {
  try {
    console.log(index);
    const sideBarElements = document.querySelectorAll("#sideBar");
    console.log(sideBarElements);

    sideBarElements.forEach((bar, i) => {
      if (i === index) {
        bar.style.display = "block";
      } else {
        bar.style.display = "none";
      }
    });
  } catch (error) {
    console.error(error);
  }
}

// ------------------------------

// all localstorage here
const spanWel = document.querySelector(
  ".container__h2Welcome__spanWelcome"
) as HTMLSpanElement;

// --------------------------------

// <!--Dashboard-->

// memo
const memoButton = document.querySelector("#memoButton") as HTMLButtonElement;
let memoInput = document.querySelector("#memoInput") as HTMLInputElement;
const memoPar = document.querySelector("#memoPar") as HTMLDivElement;

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

// get localstorage.
function spanWelcome() {
  let newUser = localStorage.getItem("user")!;

  spanWel.innerHTML = newUser;
}
