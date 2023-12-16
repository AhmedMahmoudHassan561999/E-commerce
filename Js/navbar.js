var userInfo = document.getElementById('user-pages');
var adminInfo = document.getElementById('admin-pages');

var profile = document.getElementById('profile');
var links = document.getElementById('links');

var LogoutBtnC = document.getElementById('logoutC');
var LogoutBtnA = document.getElementById('logoutA');


var typeOfUser = localStorage.LoggedType;
var first_name = localStorage.Logged;

var admin = document.getElementById("adminBtn");
var customer = document.getElementById("customerBtn");

var Logged = localStorage.logged;

function checkStatus() {

    if (first_name) {
        if (typeOfUser == 'Customer') {
            links.style.display = "none";
            userInfo.style.display = "flex";
            profile.innerHTML = first_name;
        } else if (typeOfUser == 'Admin') {
            links.style.display = "none";
            adminInfo.style.display = "flex";
        }
    }
}

checkStatus();



LogoutBtnA.addEventListener('click', signOut);
LogoutBtnC.addEventListener('click', signOut);

function signOut() {
    localStorage.removeItem('Logged');
    window.location = 'index.html';
};