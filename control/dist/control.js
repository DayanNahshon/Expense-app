//-----Login Page
function runForm(e) {
    e.preventDefault();
    console.log("sdfsdf");
    location.href = "dashboard.html";
}
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
//-----Calc. Page
