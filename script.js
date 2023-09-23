let url = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", function(){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        data.forEach(function(photo){
            ekranaYazdir(photo)
        })
    })
})

// ekranaYazdir(photo) fonksiyonunu tanimliyoruz.
const row = document.querySelector(".rowW");
function ekranaYazdir(photo){
    row.innerHTML += `
         <div class="col-4 my-3">
                     <div class="card h-100 d-flex align-items-center text-center">
                     <img src=${photo.image} alt=""  height="250px" width="250px" class="card-img-top p-4" alt="">
                     <div class="card-body">
                         <h5 class="card-title">${photo.title}</h5>
                         <h5 class="card-title fs-3" style="color: green;">${photo.price} ₺</h5>
                         <a id="addBtn" href="#" style="background-color: rgb(196, 194, 194);" class="btn">Add To Cart</a>
                     </div>
                 </div>
             </div>
         `
}


// // sepete ekleye bastığımızda sepetin içindeki ürün sayısını arttıran kodlar.
// row.addEventListener("click", ekle)
// function ekle(e){
//     if(e.target.id.includes("addBtn")){
//         const parentDiv = e.target.parentElement.parentElement
//         console.log(parentDiv);
//         const cart = document.querySelector(".cart-box")
//         cart.innerHTML++;
//     }
// }

// Ürünleri saklamak için bir dizi oluşturun.
let cartItems = [];

// Sepete eklemeyi dinlemek için addBtn elementini kullanabilirsiniz.
row.addEventListener("click", ekle)

function ekle(e){
    if(e.target.id.includes("addBtn")){
        // Tıklanan ürünü bulun.
        const parentDiv = e.target.parentElement.parentElement;
        const productName = parentDiv.querySelector(".card-title").innerHTML;

        if (cartItems.some(item=>item.name == productName)) {
            // Ürün sepette zaten varsa kullanıcıya bir uyarı verin.
            const alert = document.querySelector(".alert")
            alert.classList.remove("d-none");
            alert.classList.add("d-block");
            setTimeout(function(){
                alert.classList.remove("d-block");
                alert.classList.add("d-none");
                
            },3500)
        } else {
            const productPrice = parentDiv.querySelector(".card-title.fs-3").innerHTML;
            const productImage = parentDiv.querySelector(".card-img-top").getAttribute("src");

            // Ürünü bir nesne olarak temsil edin.
            const product = {
                name: productName,
                price: productPrice,
                image: productImage
            };

            // Ürünü sepete ekleyin.
            cartItems.push(product);

            // Sepet içeriğini local storage'e kaydedin.
            localStorage.setItem("cart", JSON.stringify(cartItems));
            
            // Sepet sayısını güncelleyin.
            const cart = document.querySelector(".cart-box")
            cart.innerHTML++;

        }
    }
}

// Ürün filtreleme

const searchBtn = document.querySelector(".searchBtn");
const searchInput = document.querySelector(".searchInput");

searchBtn.addEventListener("click", filtrele);

function filtrele() {
    let searchText = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".col-4");
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const productName = card.querySelector(".card-title").innerHTML.toLowerCase();

        if (productName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}