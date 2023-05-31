// ITERATION 1

function updateSubtotal(product) {
  let price= product.querySelector(".price span").textContent
  let quantity= product.querySelector(".quantity input").value
  let subtotal = product.querySelector(".subtotal span");
  subtotal.textContent = price*quantity
  return subtotal.textContent
}

function calculateAll() {
let products = document.querySelectorAll(".product")
products = [...products]
let total = document.querySelector("#total-value span")
totalValue = 0
products.forEach((product) => {
  updateSubtotal(product);
  totalValue += parseInt(updateSubtotal(product))
});
total.textContent = totalValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
