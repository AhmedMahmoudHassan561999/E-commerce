//create product
//1-store image 


var fileimage = document.getElementById('image');
var imageData = ' ';
fileimage.addEventListener('change', function (event) {
    //get file selected
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (readerEvent) {
        //get image as based64-encode-string
        imageData = readerEvent.target.result;
        console.log('readaimagedone');
    };
    //read th file as data url
    reader.readAsDataURL(file);
});

var namep = document.getElementById('name');
var imageData;
var fileimage = document.getElementById('image');
fileimage.addEventListener('change', function (event) {
    //get file selected
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (readerEvent) {
        //get image as based64-encode-string
        imageData = readerEvent.target.result;
        console.log('readaimagedone');
    };
    //read th file as data url
    reader.readAsDataURL(file);
});

var ID = document.getElementById('ID');
var category = document.getElementById('category');
var price = document.getElementById('price');
var description = document.getElementById('description');
var quentity = document.getElementById('quentity');
var submit = document.getElementById('submit');

var mood = 'create';
var proindex;
var datapro;

if (localStorage.product != null) {
    datapro = JSON.parse(localStorage.product);

} else {
    datapro = [];

}
function createproduct() {
    var newpro = {
        ID: ID.value,
        namep: namep.value.toLowerCase(),
        image: imageData,
        category: category.value.toLowerCase(),
        price: price.value,
        description: description.value,
        quentity: quentity.value

    }
    if (namep.value != '' && category.value != '' &&
        description.value != ' '

        && price.value > 0
        && quentity.value > 0
    ) {

        if (mood === 'create') {
            datapro.push(newpro);
            // if (quentity.value > 1) {
            //     for (var i = 0; i < quentity.value; i++) {
            //         datapro.push(newpro);
            //     }
            // } else {
            //     datapro.push(newpro);
            // }
        } else {
            datapro[proindex] = newpro;
            mood = 'create';
            submit.innerHTML = 'Create';
        }
        clearDtat();
    } else {
        alert("full data correct");

    }
    //save in localstorage
    localStorage.setItem("product", JSON.stringify(datapro));
    ReadData();

}


//clear data
function clearDtat() {
    ID.value = '';
    namep.value = '';
    image.value = '';
    category.value = '';
    quentity.value = '';
    price.value = '';
    description.value = '';

}
{/* <td>${i}</td> */ }
//read data
function ReadData() {

    var btn = document.getElementById('deleteall');
    if (datapro.length > 0) {
        var table = '';
        for (let i = 0; i < datapro.length; i++) {
            table += `
        <tr>
        

        <td>${datapro[i].ID}</td>
        <td>${datapro[i].namep}</td>
        <td>${datapro[i].category}</td>
        <td>${datapro[i].description}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].quentity}</td>
        <td id ="update" onclick="updateproduct(${i})"><button>update</button></td>
        <td id ="delete" onclick="deleteproduct(${i})"><button>delete</button></td>

    </tr>
        `;
            document.getElementById('datatable').innerHTML = table;
        }

        btn.innerHTML = `<button onclick="deleteallproduct()">Delete All(${datapro.length})</button>`;
    }

    else {
        document.getElementById('datatable').innerHTML = '';
        btn.innerHTML = '';
    }

}


ReadData();
//deleteoneproduct
function deleteproduct(i) {
    datapro.splice(i, 1);
    localStorage.product = JSON.stringify(datapro);
    ReadData();
}
//deleteallproduct
function deleteallproduct() {
    localStorage.clear();
    datapro.splice(0);
    console.log(datapro);
    ReadData();
}

//update of the product
function updateproduct(i) {
    mood = "update";
    submit.innerHTML = 'Update';
    namep.value = datapro[i].namep;
    imageData = datapro[i].imageData;
    category.value = datapro[i].category;
    price.value = datapro[i].price
    description.value = datapro[i].description;
    quentity.value = datapro[i].quentity;
    proindex = i;
    // createproduct();
    scroll({
        top: 0,
        behavior: "smooth",
    })

}

//secrchproduct
//var searchinput=document.getElementById('serch').value;

function searchbyname(value) {
    var table = '';
    for (var i = 0; i < datapro.length; i++) {
        if (datapro[i].namep.includes(value.toLowerCase())) {

            table += `
        <tr>
        <td>${i}</td>
        <td>${datapro[i].namep}</td>
        <td>${datapro[i].category}</td>
        <td>${datapro[i].description}</td>
        <td>${datapro[i].price}</td>
        <td>${datapro[i].quentity}</td>
        <td id ="update" onclick="updateproduct(${i})"><button>update</button></td>
        <td id ="delete" onclick="deleteproduct(${i})"><button>delete</button></td>

    </tr>
        `;

        }
        else {

            if (datapro[i].category.includes(value)) {

                table += `
                <tr>
                <td>${i}</td>
                <td>${datapro[i].namep}</td>
                <td>${datapro[i].category}</td>
                <td>${datapro[i].description}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].quentity}</td>
                <td id ="update" onclick="updateproduct(${i})"><button>update</button></td>
                <td id ="delete" onclick="deleteproduct(${i})"><button>delete</button></td>
        
            </tr>
                `;

            }
        }



    }
    document.getElementById('datatable').innerHTML = table;

}

