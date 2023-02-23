window.onload = spanWelcome;
// all sidebar stuff
var sideBar = document.querySelectorAll("#sideBar");
function sidebarListen() {
    try {
        var sideBarElement = document.querySelectorAll("#sideBar");
        if (sideBarElement) {
            sideBarElement.forEach(function (bar, index) {
                bar.addEventListener("click", function () {
                    renderSideBarNav(index);
                });
            });
        }
    }
    catch (error) {
        console.error(error);
    }
}
sidebarListen();
function renderSideBarNav(index) {
    try {
        console.log(index);
        var sideBarElements = document.querySelectorAll("#sideBar");
        console.log(sideBarElements);
        sideBarElements.forEach(function (bar, i) {
            if (i === index) {
                bar.style.display = "block";
            }
            else {
                bar.style.display = "none";
            }
        });
    }
    catch (error) {
        console.error(error);
    }
}
// ------------------------------
// all localstorage here
var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
// --------------------------------
// <!--Dashboard-->
// memo
var memoButton = document.querySelector("#memoButton");
var memoInput = document.querySelector("#memoInput");
var memoPar = document.querySelector("#memoPar");
memoButton.addEventListener("click", runMemoTask);
function runMemoTask(e) {
    e.preventDefault();
    try {
        if (memoInput.value != "") {
            var newpar = document.createElement("p");
            var toilet = document.createElement("image");
            var verified = document.createElement("image");
            memoPar.appendChild(newpar);
            memoPar.appendChild(toilet);
            memoPar.appendChild(verified);
            newpar.innerHTML = memoInput.value;
        }
    }
    catch (error) {
        return memoInput.required;
    }
}
// ----------------------------------
// get localstorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
