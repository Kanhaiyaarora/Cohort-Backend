// 4 digit OTP generator

// let otp = Math.trunc(Math.random() * 9000 + 1000); // 1000-9999 // trunc is used for removing decimal part
// console.log(otp);

function swapNumbers(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

swapNumbers(5, 10);
