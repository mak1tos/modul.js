
// const productName = "Droid"
// console.log(productName);

// const pricePerItem = 2000
// console.log(pricePerItem);


// let productName = 'Droid';
// productName = 'Repair droid'
// console. log(productName);
// let username = "Mango";
// username = "Poly";
// console.log(username);
// let pricePerItem = 2000;
// pricePerItem = 2000 + 1500
// console. log(pricePerItem);

// const productName = "Droid";
// const pricePerItem = 3500;
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message); 
const pricePerDroid = 800
const orderedQuantity = 6
const deliveryFee = 50
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
console.log(message);

function sayHi() {
  console.log('Hello, this is my first function!')
}
sayHi();