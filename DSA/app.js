// 4 digit OTP generator

// let otp = Math.trunc(Math.random() * 9000 + 1000); // 1000-9999  trunc is used for removing decimal part
// console.log(otp);

// ------------------------> <-----------------------

// function swapNumbers(a, b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;
//   return [a, b];
// }

// swapNumbers(5, 10);

// ------------------------> <-----------------------

//  if amount 0-5000 => 0% discount
//  if amount 5001-7000 => 5% discount
//  if amount 7001-9000 => 10% discount
//  if amount > 9000 => 20% discount


// function amountPayable(amount){
//   if(amount > 0 && amount <= 5000){
//     return amount * 1// 0% discount
//   } else if(amount > 5000 && amount <= 7000){
//     return amount * 0.95// 5% discount    
//   }else if(amount > 7000 && amount <= 9000){
//     return amount * 0.90// 10% discount
//   }else if(amount > 9000){
//     return amount * 0.80 // 20% discount
//   }
// }

// console.log(amountPayable(10000));

// ------------------------> <-----------------------

// bottomUp approach for calculating bill amount for electricity consumption

// let amount = 0;

// function bijlikabill(units){
//   if(units > 400){
//     amount = (units - 400) * 13
//     units = 400
//   }
//   if(units > 200 && units <= 400){
//     amount = amount + (units - 200) * 8
//     units = 200
//   }
//   if(units > 100 && units <= 200){
//     amount = amount + (units - 100) * 6
//     units = 100
//   }
  
//   amount = amount + units * 4.2
//   return amount;
// }

// console.log(bijlikabill(900));

// ------------------------> <-----------------------

// let i = 10;
// while (i % 3 !== 0) {
//     console.log(i);
//     i--;
// }

// ------------------------> <-----------------------

// Strong number is a number whose sum of factorial of digits is equal to the number itself.

// function isStrongNumber(n) {
//     function getFactorial(a){
//         let factorial = 1;
//         for(let i= 1; i<=a; i++){
//             factorial *= i
//         }
//         return factorial
//     }

// let temp = n;
// let sum = 0;
// while(temp > 0){
//     let digit = temp % 10
//     sum += getFactorial(digit)
//     temp = Math.floor(temp/10)
// }

// return sum === n ? "Yes": "No"

// }

// console.log(isStrongNumber(145));



// ------------------------> <-----------------------

// reverse a number 


function reverseNumber(n) {
  let rev = 0

  while(n>0){
    rev = (rev * 10) + ( n % 10 )
    n = Math.floor(n/10);
  }
  return rev
}

console.log(reverseNumber(123))


// ------------------------> <-----------------------
