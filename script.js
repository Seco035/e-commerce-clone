const url = "https://fakestoreapi.com/products";
// API'den gelen verileriri yakalıyoruz.
document.addEventListener("DOMContentLoaded", function(){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        data.forEach(function(resim){
            ekranaYazdir(resim)
        });   
    })
})

// ekranaYazdir(resim) fonksiyonunu tanimliyoruz.
const row = document.querySelector(".rowW");
function ekranaYazdir(resim){
    row.innerHTML += `
         <div class="col-4 my-3">
                     <div class="card h-100 d-flex align-items-center text-center">
                     <img src=${resim.image} alt=""  height="250px" width="250px" class="card-img-top p-4" alt="">
                     <div class="card-body">
                         <h5 class="card-title">${resim.title}</h5>
                         <h5 class="card-title fs-3" style="color: green;">${resim.price} ₺</h5>
                         <a id="addBtn" href="#" style="background-color: rgb(196, 194, 194);" class="btn">Add To Cart</a>
                     </div>
                 </div>
             </div>
         `
}

// sepete ekleye bastığımızda sepetin içindeki ürün sayısını arttıran kodlar.
row.addEventListener("click", ekle)
function ekle(e){
    if(e.target.id.includes("addBtn")){
        const parentDiv = e.target.parentElement.parentElement
        console.log(parentDiv);
        const cart = document.querySelector(".cart-box")
        cart.innerHTML++;
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
