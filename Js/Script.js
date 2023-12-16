// var userInfo = document.getElementById('user-pages');
// var adminInfo = document.getElementById('admin-pages');

// var profile = document.getElementById('profile');
// var links = document.getElementById('links');

// var LogoutBtnC = document.getElementById('logoutC');
// var LogoutBtnA = document.getElementById('logoutA');


// var typeOfUser = localStorage.LoggedType;
// var first_name = localStorage.Logged;

// var admin = document.getElementById("adminBtn");
// var customer = document.getElementById("customerBtn");

// var Logged = localStorage.logged;

// function checkStatus() {

//     if (first_name) {
//         if (typeOfUser == 'Customer') {
//             links.style.display = "none";
//             userInfo.style.display = "flex";
//             profile.innerHTML = first_name;
//         } else if (typeOfUser == 'Admin') {
//             links.style.display = "none";
//             adminInfo.style.display = "flex";
//         }
//     }
// }

// checkStatus();



// LogoutBtnA.addEventListener('click', signOut);
// LogoutBtnC.addEventListener('click', signOut);

// function signOut() {
//     localStorage.removeItem('Logged');
// };


// ============= Products ===================
var productsDOM = document.getElementById("pr");

var product_object = JSON.parse(localStorage.product);
console.log(product_object);
console.log(product_object[0].ID);


function display_products() {

    // for (let i = 0; i = product_object[i].ID; i++){

    // }
    let productui = product_object.map((item) => {
        return `
        <div id="product_item" class="col-lg-3">
            <img class="product-item-img" width="150px"  src="${item.image}" alt="Product" />

            <div class="product-item-desc">
                <h5 class="card-title">${item.namep}</h5>
                <h3 class="card-text">${item.price}$</h3>
                <p>${item.description}</p>
                <p></p>
            </div>
            <div class="product-item-action">
                <button class="addToCart" id="cartBtn" onclick="addedToCart(${item.ID})">Add to Cart</button>
                <button onclick="addToWishList(${item.ID})"><i class="favourite fa-regular fa-heart"></i></button>
            </div>
        </div>
        `
    })
    productsDOM.innerHTML = productui.join("");
    console.log(productui[0].ID);
};

display_products();

//================ Cart Operations ===============
let inCart = [];

function addedToCart(id) {
    if (first_name) {
        let AddedProduct = product_object.find((item) => item.ID == id);
        console.log(AddedProduct);
        inCart = [...inCart, AddedProduct];
        localStorage.setItem('productsInCart', JSON.stringify(inCart));

    } else
        window.location = "login.html";




    // let CartCount = document.querySelectorAll('.user-pages badge');

    // console.log(CartCount.length);
}

//==================== whishlist ==============
let inWhish = [];
// var wishList_pro;
function addToWishList(id) {
    // if (localStorage.wish_list != null) {
    //     wishList_pro = JSON.parse(localStorage.wish_list);
    // }
    // else {
    //     wishList_pro = [];
    // }
    // let AddedProduct = product_object.find((item) => item.id == id);
    // wishList_pro = [...wishList_pro, AddedProduct];
    // localStorage.setItem('whish_list', JSON.stringify(wishList_pro));
    if (first_name) {
        let AddedProduct = product_object.find((item) => item.ID == id);
        console.log(AddedProduct);
        inWhish = [...inWhish, AddedProduct];
        localStorage.setItem('whish_list', JSON.stringify(inWhish));

    } else
        window.location = "login.html";

}





