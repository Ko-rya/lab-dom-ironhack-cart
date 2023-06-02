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

const removeButtons = document.querySelectorAll(".btn-remove");
let removeButtonsArray = [...removeButtons];
removeButtonsArray.forEach(button => {
  button.addEventListener("click", removeProduct);
});
function removeProduct(event) {
  const target = event.currentTarget;
  const parentRow = target.parentNode.parentNode
  table = parentRow.parentNode
  table.removeChild(parentRow)
  calculateAll()
}


// ITERATION 5
const createButton = document.querySelector("#create");
createButton.addEventListener("click", createProduct);

function createProduct() {
  const newProductNameInput = document.querySelector('.newProduct');
  const newPriceInput = document.querySelector('.newPrice');

  const newProductName = newProductNameInput.value;
  const newPrice = parseFloat(newPriceInput.value).toFixed(2);

  const tableBody = document.querySelector('tbody');

  if (newProductName=== "" || newPrice=== "") {
    return; // Stop the function execution
  }
  const newRow = document.createElement('tr');
  newRow.className = 'product';

 
  const nameCell = document.createElement('td');
  nameCell.className = 'name';
  const nameSpan = document.createElement('span');
  nameSpan.textContent = newProductName;
  nameCell.appendChild(nameSpan);
  newRow.appendChild(nameCell);


  const priceCell = document.createElement('td');
  priceCell.className = 'price';
  priceCell.innerHTML = `$<span>${newPrice}</span>`;
  newRow.appendChild(priceCell);

  
  const quantityCell = document.createElement('td');
  quantityCell.className = 'quantity';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.value = 0;
  quantityInput.min = 0;
  quantityInput.placeholder = 'Quantity';
  quantityCell.appendChild(quantityInput);
  newRow.appendChild(quantityCell);


  const subtotalCell = document.createElement('td');
  subtotalCell.className = 'subtotal';
  subtotalCell.innerHTML = '$<span>0</span>';
  newRow.appendChild(subtotalCell);


  const removeCell = document.createElement('td');
  removeCell.className = 'action';
  const removeButton = document.createElement('button');
  removeButton.className = 'btn btn-remove';
  removeButton.textContent = 'Remove';
  removeCell.appendChild(removeButton);
  newRow.appendChild(removeCell);


  tableBody.appendChild(newRow);

  
  newProductNameInput.value = '';
  newPriceInput.value = '';
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
