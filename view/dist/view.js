var form = document.querySelector(".login");
var info = document.querySelector("#li-Info");
var us = document.querySelector("#li-Us");
var contact = document.querySelector("#li-Contact");
var itsik_par = document.querySelector(".inFormer__showUs__itsik__par");
var dayan_par = document.querySelector(".inFormer__showUs__dayan__par");
var shili_par = document.querySelector(".inFormer__showUs__shili__par");
// the divs
var showInfo = document.querySelector(".inFormer__showinfo");
var showUS = document.querySelector(".inFormer__showUs");
var showContact = document.querySelector(".inFormer__showContact");
// events
info.addEventListener("mouseover", showTheInfo);
info.addEventListener("mouseout", hideTheInfo);
us.addEventListener("mouseover", showTheUs);
us.addEventListener("mouseout", hideTheUs);
contact.addEventListener("mouseover", showTheContact);
contact.addEventListener("mouseout", hideTheContact);
