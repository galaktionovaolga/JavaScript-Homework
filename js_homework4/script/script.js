let myInput= document.querySelector("input")
let btn = document.querySelector(".buttonId")
// btn.addEventListener("click", function () {
       
// })

function getProductById (id, callback) {
    fetch(`https://dummyjson.com/products/${id} `)

    .then((response) => {
        return response.json()
     })
     .then((data) => {
        callback(data)
     })
     .catch((error) => {
        console.log(error);        
     })
}

const mainBlock = document.querySelector("main")
getProductById(4, (product) => {
   
mainBlock.innerHTML = `
<div class="product_block">    
    <div class="buttons">
        <input type="number" placeholder="Введите id продукта">
        <button class="buttonId">Показать</button>
    </div>

    <div class="product_card">
        <img src="${product.images}" alt="avatar">
        <h2>TITLE</h2>

        <div class="info">
            <p>Stock: ${product.stock}</p>
            <p>Price: ${product.price}</p>
            <p>Rating AVG: ${product.rating}</p>
            <p>Category: ${product.category}</p>
        </div>
    </div>
    </div> 
`
})















// fetch("https://dummyjson.com/products")
// .then(function(response){
//     return response.json()
// })
// .then(function(payload){
//     console.log(payload.products)    
// })
// .catch(function(error){
//     console.log(error)    
// })


// function getUserById2 (userId, callback){
//    fetch('https://dummyjson.com/users/'+ userId )
//    .then(function(responce){
//    return responce.json();
//    })
//    .then(function(data){
//        callback(data);
//    })
//    .catch(function(error){
//        console.log('Error')        
//    })
// }
// getUserById2(14, function(data) {console.log("firstName: " + data.firstName, "lasrName: " + data.lastName, "email: " + data.email);})

// fetch("https://dummyjson.com/products")
// .then(function(response){
//     return response.json()
// })
// .then(function(payload){
//    payload.products.forEach(product =>{
//       console.log("PRICE: " + product.price)  
//    })       
// })
// .catch(function(error){
//     console.log(error)    
// })




