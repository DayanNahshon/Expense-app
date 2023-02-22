var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
var showMonitor = document.querySelector(".showMonitor");
var showCalc = document.querySelector(".showCalculator");
var sideBar = document.querySelectorAll("#sideBar");
if (sideBar) {
    sideBar.forEach(function (bars) {
        bars.addEventListener("click", function (event) {
        });
    });
}
function spanWelcome() {
    localStorage.getItem("user");
    spanWel.innerHTML = userName.value;
}
