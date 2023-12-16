
//register user
var fname = document.getElementById("f_name");
var username = document.getElementById("username");
var pass = document.getElementById("password");
var re_pass = document.getElementById("repassword");

var validName;

var type = document.getElementById("userType");


var submit_btn = document.getElementById("submit_btn");

// localStorage.setItem('first_name', fname.value)
// localStorage.setItem('username', username.value)
// localStorage.setItem('password', pass.value)
// localStorage.setItem('userType', type.value)

submit_btn.addEventListener('click', register);

var users = [];

function register(e) {

    e.preventDefault();
    if (username.value == '' || pass.value == '')
        alert('Fill Data!!');
    else if (pass.value != re_pass.value)
        alert('Password and repeat password must be the same!!');
    else {
        if (localStorage.user_names != null) {
            users = JSON.parse(localStorage.user_names);
        }
        else {
            users = [];
        }
        var userData =
        {
            username: username.value.toLowerCase(),
            password: pass.value,
            userType: type.value,
            first_name: fname.value,
            log: false
        };
        users.push(userData);
        localStorage.setItem('user_names', JSON.stringify(users));


        setTimeout(() => {
            window.location = 'login.html';
        }, 1500);
        console.log(users);
    }

}






