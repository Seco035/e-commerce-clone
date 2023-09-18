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
         <div class="col-3 my-3">
                     <div class="card h-100 d-flex align-items-center pt-5 text-center">
                     <img src=${resim.image} alt="" class="card-img-top w-50 pt-3" alt="">
                     <div class="card-body">
                         <h5 class="card-title">${resim.title}</h5>
                         <h5 class="card-title fs-3" style="color: green;">${resim.price} ₺</h5>
                         <a id="addBtn" href="#" class="btn btn-secondary">Sepete Ekle</a>
                     </div>
                 </div>
             </div>
         `
}


// document.addEventListener("DOMContentLoaded", function(){
//     fetch(url)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//         data.forEach(function(resim){
//             ekranaYazdir(resim)
//         })
//     })
// })
// const row = document.querySelector(".row");
// function ekranaYazdir(resim){

//     row.innerHTML += `
//     <div class="col-4">
//                 <div class="card">
//                 <img src=${resim.image} alt="" class="card-img-top" alt="">
//                 <div class="card-body">
//                     <h5 class="card-title">${resim.title}</h5>
//                     <h5 class="card-title">${resim.price} TL</h5>
//                     <a id="addBtn" href="#" class="btn btn-success">Sepete Ekle</a>
//                 </div>
//             </div>
//         </div>
//     `
// }