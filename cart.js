let cartRow = document.querySelector(".cartRow");

let sepettekiUrunler = localStorage.getItem("cart");
sepettekiUrunler = JSON.parse(sepettekiUrunler);
console.log(sepettekiUrunler);
if (sepettekiUrunler && sepettekiUrunler.length > 0) {

    sepettekiUrunler.forEach(function (product) {
        cartRow.innerHTML += `
        <div class="col-md-4 col-sm-4 border border-1 d-flex align-items-center">
        <img width="100px" class="py-2" src="${product.image}">
        
        <h5 class="mx-4">${product.name}</h5>   
        </div>
        <div class="col-md-2 col-sm-2 border border-1 d-flex justify-content-center align-items-center">
        <h5 class="urunFiyatı">${product.price}</h5>
        
        </div>
        <div class="col-md-3 col-sm-3 border border-1 d-flex justify-content-center align-items-center">
        <button class="w-25">+</button>
        <p class="text-center tane mt-3 mx-1 border border-1 w-25 ">1</p>
        <button class="w-25">-</button>

        </div>
        <div class="col-md-3 col-sm-3 border border-1 d-flex justify-content-center align-items-center ">
        <h5 class="d-inline-block productPrice me-3">${product.price}</h5>
        <i class="bi bi-x-square-fill fs-2"></i>
        </div>
        `
    })

    // i etiketi içindeki X butonuna basınca ürün silme
    const removeButtons = document.querySelectorAll(".cartRow i");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", function () {
            cartRow.remove(cartRow.parentElement.parentElement);

            sepettekiUrunler.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(sepettekiUrunler));
            window.location.reload();
        });
    });

    const artıButton = document.querySelectorAll(".cartRow button:nth-child(1)");
    const eksiButton = document.querySelectorAll(".cartRow button:nth-child(3)");
    const quantity = document.querySelectorAll(".cartRow .tane");
    const productPrice = document.querySelectorAll(".cartRow .productPrice");

    // + butonu işlemleri
    artıButton.forEach((plusButton, index) => {
        plusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantity[index].textContent);

            currentQuantity++;

            quantity[index].textContent = currentQuantity;

            let currentProductPrice = parseFloat(sepettekiUrunler[index].price);

            let newTotalPrice = currentQuantity * currentProductPrice;

            productPrice[index].textContent = newTotalPrice.toFixed(2);
        });
    });

    // - butonu işlemleri
    eksiButton.forEach((minusButton, index) => {
        minusButton.addEventListener("click", function () {
            let currentQuantity = parseInt(quantity[index].textContent);

            if (currentQuantity > 1) {
                currentQuantity--;

                quantity[index].textContent = currentQuantity;

                let currentProductPrice = parseFloat(sepettekiUrunler[index].price);

                let newTotalPrice = currentQuantity * currentProductPrice;

                productPrice[index].textContent = newTotalPrice.toFixed(2);
            }
        });
    });

    // Sepetteki ürün adeti
    const cart = document.querySelector(".cart-box")
    const totalItemsInCart = sepettekiUrunler.length;
    cart.innerHTML = totalItemsInCart;

}