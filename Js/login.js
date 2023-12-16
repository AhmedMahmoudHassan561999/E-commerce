//login user 

var username = document.getElementById("username");
var pass = document.getElementById("password");

var loginBtn = document.getElementById("loginBtn");

var userInfo = document.getElementById('user-pages');
var adminInfo = document.getElementById('admin-pages');
var links = document.getElementById('links');


// var admin = document.getElementById("adminBtn");
// var customer = document.getElementById("customerBtn");

var getUser;
var getPass;
var getType;
var getStatus;

var getuserObj = JSON.parse(localStorage.user_names);

console.log(getuserObj);


loginBtn.addEventListener('click', ch);

function ch() {
    for (var i = 0; i < getuserObj.length; i++) {
        if (username.value == getuserObj[i].username && pass.value == getuserObj[i].password) {
            getUser = getuserObj[i].username;
            getPass = getuserObj[i].password;
            getType = getuserObj[i].userType;

            localStorage.setItem('Logged', getUser)
            localStorage.setItem('LoggedType', getType)
            // getStatus = getuserObj[i].log;
            // alert(getUser);
            // alert(getPass);
            // alert(getStatus);
            // alert(getType);
        }
    }
}






loginBtn.addEventListener('click', login);



function login(e) {
    e.preventDefault();
    if (username.value == '' || pass.value == '')
        alert('Fill Data!!');
    else if (getUser.toLowerCase() && getUser.trim().toLowerCase() === username.value.trim() && getPass && getPass === pass.value) {
        setTimeout(() => {
            window.location = 'index.html';
        }, 1000);
    }
    else {
        alert('User Name or Password is wrong !!')
    }
}

