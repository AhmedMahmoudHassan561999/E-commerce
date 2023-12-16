

var product_show = JSON.parse(localStorage.productsInCart);

function showorderpage() {
    var tabelshow = '';
    for (let i = 0; i < product_show.length; i++) {
        tabelshow += `
     <tr id="trtable">
        <td>${i}</td>
        <td>${product_show[i].namep}</td>
        <td>${product_show[i].category}</td>
        <td>${product_show[i].description}</td>
        <td>${product_show[i].price}</td>
        <td>${product_show[i].quentity}</td>
        <td id ="update"  > <button onclick="acceptproduct(${i})">ACCEPT</button></td>
        <td id ="delete"> <button onclick="rejectproduct(${i})">REJECT</button></td>
    </tr>`;
        document.getElementById('datatable').innerHTML = tabelshow;

    }


}

showorderpage();

function rejectproduct(i) {
    product_show.splice(i, 1);
    localStorage.productsInCart = JSON.stringify(product_show);
    showorderpage();
}
var mood = "Accept";
function acceptproduct(i) {
    product_show.splice(i, 1);
    alert('this product accepted');
    product_show.mood = 'accept';
    document.getElementById('trtable').style.display = 'none';
    alert(product_show.mood);
    showorderpage();

}