window.onload = spanWelcome;
var spanWel = document.querySelector(".container__h2Welcome__spanWelcome");
var sideBar = document.querySelectorAll("#sideBar");
if (sideBar) {
    sideBar.forEach(function (bar, index) {
        bar.addEventListener("click", function () {
            renderSideBarNav(index);
        });
    });
}
function renderSideBarNav(index) {
    try {
        console.log("sdfsdfsdf");
        for (var i = 0; i < sideBar.length; i++)
            ;
    }
    catch (error) {
    }
}
// get localstorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
