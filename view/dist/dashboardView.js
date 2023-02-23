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
        for (var i = 0; i < 4; i++) {
            if (i == index) {
                document.getElementById("sideBar")[i].style.display = "block";
            }
            else if (i != index) {
                document.getElementById("sideBar")[i].style.display = "none";
            }
        }
    }
    catch (error) {
    }
}
// get localstorage.
function spanWelcome() {
    var newUser = localStorage.getItem("user");
    spanWel.innerHTML = newUser;
}
