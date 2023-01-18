// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector("input").value
 
  let sum = price * quantity
  
  let subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = sum
  return sum


}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // ITERATION 2
  let products = document.querySelectorAll(".product")
  let total =0
  products.forEach(function(product){
    total += updateSubtotal(product)
  })
  // ITERATION 3
  let totalPrice = document.querySelector("h2 span") 
  totalPrice.innerText=total

 
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
