//-----Login Page
var form = document.querySelector(".login");
var info = document.querySelector("#li-Info");
var us = document.querySelector("#li-Us");
var contact = document.querySelector("#li-Contact");
var button = document.querySelector(".login__submit");
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
form.addEventListener("submit", runForm);
