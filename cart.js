let cartRow = document.querySelector(".cartRow");

let sepettekiUrunler = localStorage.getItem("cart");
sepettekiUrunler = JSON.parse(sepettekiUrunler);
console.log(sepettekiUrunler);
if(sepettekiUrunler&& sepettekiUrunler.length>0){
    sepettekiUrunler.forEach(function(product){
        cartRow.innerHTML +=`
        <div class="col-4 borderr">
        <img width="20px" src="${product.image}">
        
        <p>${product.name}</p>   
        </div>
        <div class="col-2 borderr"></div>
        <div class="col-3 borderr"></div>
        <div class="col-3 borderr"></div>
        `
    })
}
