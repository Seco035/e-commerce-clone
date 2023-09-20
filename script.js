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


// const searchBtn = document.querySelector(".searchBtn");
// const searchInput = document.querySelector(".searchInput");

// searchBtn.addEventListener("click", aramaYap)
// function aramaYap(){
//     let searchText = searchInput.value.toLowerCase();
//     searchInput.value = ""

//     let cards = document.querySelectorAll(".col-3");

//     cards.forEach(function(card){
//         let title = card.querySelector(".card-title");
//         if(title.innerHTML.toLowerCase().includes(searchText)){
//             card.style.display = "block"
//         }else{
//             card.style.display = "none"
//         }
//     })
// }