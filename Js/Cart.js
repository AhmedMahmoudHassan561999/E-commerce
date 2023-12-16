

let productsInCart = localStorage.getItem('productsInCart');

var CartDOM = document.getElementById("cart");
var productInCart_object = JSON.parse(localStorage.productsInCart);
//console.log(productInCart_object);

function displayCartProducts() {

    let productuiC = productInCart_object.map((item) => {
        return `
        <div id="product_item" class="col-lg-12">
            <img class="product-item-img" width="150px"  src="${item.image}" alt="Product" />

            <div class="product-item-desc">
                <h5 class="card-title">${item.namep}</h5>
                <h3 class="card-text">${item.price}$</h3>
                <p>${item.description}</p>
                <button class="addToCart" id="cartBtn" onclick="RemoveFromCart(${item.ID})">Remove From Cart</button>
            </div>
        </div>
        `
    })
    CartDOM.innerHTML = productuiC.join("");

}
displayCartProducts();


function RemoveFromCart(id) {
    if (productsInCart) {
        let items = productInCart_object;
        let RemovedProduct = productInCart_object.find((item) => item.ID == id);
        console.log(RemovedProduct);



        productInCart_object.splice(id, 1);
        localStorage.productsInCart = JSON.stringify(productInCart_object);
        displayCartProducts();
        // let filtered = items.filter((item) => item.ID !== id);
        // displayCartProducts(filtered);
        // console.log(filtered);
        // localStorage.setItem('productsInCart', JSON.stringify(filtered));
    }
}




























// function addToWishList(item) {
//     // Check if local storage is supported by the browser
//     if (typeof(Storage) !== "undefined") {
//         // Retrieve the current wish list from local storage or initialize an empty array
//         let wishList = JSON.parse(localStorage.getItem('wishList')) || [];

//         // Check if the item is already in the wish list
//         if (!wishList.includes(item)) {
//             // Add the item to the wish list
//             wishList.push(item);

//             // Save the updated wish list back to local storage
//             localStorage.setItem('wishList', JSON.stringify(wishList));

//             // Optionally, you can provide feedback to the user
//             alert('Item added to Wish List!');
//         } else {
//             // Optionally, you can provide feedback to the user
//             alert('Item is already in Wish List!');
//         }
//     } else {
//         // If local storage is not supported, provide an error message
//         alert('Local storage is not supported in your browser');
//     }
// }
















