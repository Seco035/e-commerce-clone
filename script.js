const url = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", function(){
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        data.forEach(function(resim){
            ekranaYazdir(resim)
        })
    })
})