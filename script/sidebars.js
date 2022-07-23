let closePincode = document.querySelector("#close");
let closeLogin = document.querySelector(".login-close");
let sidebarLayout = document.querySelector(".sidebar-background");
let pincodeSidebar = document.querySelector(".pincode-sidebar");
let loginSidebar = document.querySelector(".login-sidebar");

closePincode.addEventListener("click", closePincodeSidebar);
closeLogin.addEventListener("click", closeLoginSidebar);

document.querySelector(".pincode").addEventListener("click", function () {
    sidebarLayout.style.display = "block";
    pincodeSidebar.style.display = "block";
});

document.querySelector("#open_login").addEventListener("click", function () {
    sidebarLayout.style.display = "block";
    loginSidebar.style.display = "block";
});

function closePincodeSidebar() {
    sidebarLayout.style.display = "none";
    pincodeSidebar.style.display = "none";
}
function closeLoginSidebar() {
    sidebarLayout.style.display = "none";
    loginSidebar.style.display = "none";
}

let pincodeForm = document.querySelector(".sidebar-background form");

pincodeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (pincodeForm.pincode.value != "") {
        console.log(pincodeForm.pincode.value);
    }
});
