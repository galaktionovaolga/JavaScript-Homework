console.log("HW_06_02_25");

let product = {
    title: "Велосипед", 
    img: "https://i.pinimg.com/550x/98/88/53/9888537e197cf298871d3cafb31cfd5a.jpg", 
    count: 10,
    favorite: false
}

const btnPlus = document.querySelector(".plus")
const btnMinus = document.querySelector(".minus")
const counterElem = document.querySelector("span")
let counterValue = 10

if(localStorage.getItem("count") !== null) {
    counterValue = +localStorage.getItem("count")
}
counterElem.innerText = counterValue

btnPlus.addEventListener("click", function () {
product.count++
counterValue++
counterElem.innerText = counterValue
localStorage.setItem("count", counterValue);

})

btnMinus.addEventListener("click", function () {
    if (product.count > 0) {
product.count--
counterValue--
counterElem.innerText = counterValue
localStorage.setItem("count", counterValue);
    }
})

localStorage.setItem("product", JSON.stringify(product))

let btn = document.querySelector(".star")
btn.addEventListener("click", function () {
let jsonSettings = JSON.parse(localStorage.getItem("product"))
jsonSettings.favorite = !jsonSettings.favorite
localStorage.setItem("product", JSON.stringify(jsonSettings))

})

