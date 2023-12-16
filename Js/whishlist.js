

//======================== Displaying Products s========================


let productsInWhish = localStorage.getItem('whish_list');

var whishDOM = document.getElementById("whishlistDiv");
var productsInWhish_object = JSON.parse(localStorage.whish_list);

function displayWhishListProducts() {

    let productuiW = productsInWhish_object.map((item) => {
        return `
        <div id="product_item" class="col-lg-8">
            <img src="${item.image}" class="product-item-img" alt="tablet image">

            <div class="product-item-desc">
                <h5 class="card-title">${item.namep}</h5>
                <h3 class="card-text">${item.price}$</h3>
                <p>${item.description}</p>
                <button id="CBtn" class="addcart" onclick="addedToCart(${item.ID})">Add to cart</button>
                <br>
                <button id="WBtn" class="removewishlist" onclick="deleteproduct(${item.ID})">Remove from Wish list </button>
            </div>
        </div>
        `
    })
    whishDOM.innerHTML = productuiW.join("");

}
displayWhishListProducts();



//====================== ADD TO Cart ========================
let inCart = [];
var product_object = JSON.parse(localStorage.product);
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

function deleteproduct(id) {
    let RemovedProduct = product_object.find((item) => item.ID == id);
    wishlist.splice(i, 1);
    localStorage.wish_list = JSON.stringify(wishlist);
    viewdatawishlist();
}




//==================================


// var wishlistObj = JSON.parse(localStorage.whish_list);;
// var viewwishlist;
// function viewdatawishlist() {
//     for (var i = 0; i < wishlistObj.length; i++) {

//         viewwishlist +=
//             `<div class="product-item">
//                 <img src="${wishlistObj[i].image}" class="product-item-img" alt="tablet image">
//                 <div class="product-item-desc">
//                     <h2> ${wishlistObj[i].namep}</h2>
//                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                     <span> Size: ${wishlistObj[i].price}</span>
//                 </div>

//                 <div class="product-item-actions">
//                     <button class="addcart">Add to cart </button>
//                     <br>
//                     <button class="removewishlist" onclick="deleteproduct(${i})">Remove from Wish list </button>


//                 </div>
//             </div>`
//             ;
//     }

//     document.getElementById('pr').innerHTML = viewwishlist;
// }

// viewdatawishlist();




// viewdatawishlist();
