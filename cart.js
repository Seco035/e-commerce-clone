let cartRow = document.querySelector(".cartRow");

let sepettekiUrunler = localStorage.getItem("cart");
sepettekiUrunler = JSON.parse(sepettekiUrunler);
console.log(sepettekiUrunler);
if(sepettekiUrunler&& sepettekiUrunler.length>0){
    
    sepettekiUrunler.forEach(function(product){
        cartRow.innerHTML +=`
        <div class="col-4 borderr d-flex align-items-center">
        <img width="100px" class="py-2" src="${product.image}">
        
        <h5 class="mx-4">${product.name}</h5>   
        </div>
        <div class="col-2 borderr d-flex justify-content-center align-items-center">
        <h5 class="urunFiyatı">${product.price}</h5>
        
        </div>
        <div class="col-3 borderr d-flex justify-content-center align-items-center">
        <button class="w-25">+</button>
        <p class="text-center tane mt-3 mx-1 border border-1 w-25 ">1</p>
        <button class="w-25">-</button>

        </div>
        <div class="col-3 borderr d-flex justify-content-center align-items-center ">
        <h5 class="d-inline-block productPrice me-3">${product.price}</h5>
        <i class="bi bi-x-square-fill fs-2"></i>
        </div>
        `
    })


}