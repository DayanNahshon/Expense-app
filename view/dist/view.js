//-----Login Page
var form = document.querySelector(".login");
var info = document.querySelector(".navbar__li-Info");
var us = document.querySelector(".navbar__li-Us");
var contact = document.querySelector(".navbar__li-Contact");
var button = document.querySelector(".login__submit");
var userName = document.querySelector(".login__userName");
// the divs
var showInfo = document.querySelector(".inFormer__showinfo");
showInfo.style.display = "none";
var showUS = document.querySelector(".inFormer__mainUs");
showUS.style.display = "none";
var showContact = document.querySelector(".inFormer__showContact");
showContact.style.display = "none";
// events
info.addEventListener("mouseover", showTheInfo);
info.addEventListener("mouseout", hideTheInfo);
us.addEventListener("mouseover", showTheUs);
us.addEventListener("mouseout", hideTheUs);
contact.addEventListener("mouseover", showTheContact);
contact.addEventListener("mouseout", hideTheContact);
button.addEventListener("click", runForm);
// run the function
// info
function showTheInfo() {
    showInfo.style.display = "block";
    form.style.display = "none";
}
function hideTheInfo() {
    form.style.display = "block";
    showInfo.style.display = "none";
}
//  us
function showTheUs() {
    form.style.display = "none";
    showUS.style.display = "flex";
    showUS.style.flexDirection = "row";
    showUS.style.flexWrap = "wrap";
    showUS.style.gap = "10px";
}
function hideTheUs() {
    form.style.display = "block";
    showUS.style.display = "none";
}
function showTheContact() {
    form.style.display = "none";
    showContact.style.display = "block";
}
function hideTheContact() {
    form.style.display = "block";
    showContact.style.display = "none";
}
// runForm
function runForm(e) {
    e.preventDefault();
    localStorage.setItem("user", userName.value);
    location.href = "dashboard.html";
}
