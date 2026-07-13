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

// function reverseNumber(n) {
//   let rev = 0

//   while(n>0){
//     rev = (rev * 10) + ( n % 10 )
//     n = Math.floor(n/10);
//   }
//   return rev
// }

// console.log(reverseNumber(123))

// ------------------------> <-----------------------

// ISBN number is a 10 digit number which is used to identify books. The last digit of the ISBN number is a check digit which is calculated using the first 9 digits of the ISBN number. The check digit is calculated using the following formula:

// function isValidISBN(isbn) {
//   let count = 0;
//   while (isbn > 0) {
//     isbn = Math.floor(isbn / 10);
//     count++;
//   }
//   if (count != 10) {
//     console.log("Invalid ISBN number");
//   } else {
//     let sum = 0;
//     for (i = 10; i >= 1; i--) {
//       sum += (isbn % 10) * i;
//       isbn = Math.floor(isbn / 10);
//     }
//     if (sum % 11 == 0) {
//       console.log("yes");
//     } else console.log("No");
//   }
// }

// isValidISBN(8175257660);

// ------------------------> <-----------------------

// Automorphic number is a number whose square ends with the same digits as the number itself. For example, 5 is an automorphic number because 5^2 = 25, which ends with 5. Similarly, 6 is an automorphic number because 6^2 = 36, which ends with 6.


// function isAutomorphic(n){
//   let copy = n
//   let count = 0;
//   while(n>0){
//     n= Math.floor(n/10)
//     count++
//   }
// let square = copy*copy
// if(square % Math.pow(10, count) == copy){
//   console.log("Automorphic number");
// } else console.log('not automorphic no.');
// }

// isAutomorphic(76)


// ------------------------> <-----------------------

//  Linked List

class Node {
    constructor(val){
    this.data = val;
    this.next = null;
  }
}

class LL{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(val){
    this.size++
    let newNode = new Node(val)
    if(this.head == null){
      this.head = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
  }



  insertAtLast(val){
    this.size++;
    let newNode = new Node(val)
    if(this.head == null){
      this.head = newNode
      return
    }
    let temp = this.head
    while(temp.next != null){
      temp = temp.next
    }
    temp.next = newNode
  }

  insertAtPosition(val,pos){
    if(pos<=0 || pos > this.size+1){
      console.log("nhi ho skta")
      return
    }
    this.size++
    let temp = this.head
    let newNode = new Node(val)
    for(let i =1;i<=pos-2;i++){
        temp = temp.next
    }
    newNode.next = temp.next
    temp.next = newNode
  }

  deleteAtFirst(){
      if(this.head == null){
        console.log("can't be deleted")
        return
      }
      this.size--
      this.head = this.head.next
  }

  deleteAtLast(){
    if(this.head == null){
      console.log("Can not be deleted because LL is empty.")
      return
    }
    let temp = this.head
    this.size--
    while(temp.next.next != null){
      temp = temp.next
    }
    temp.next = null
  }

  middleOfLL(){
    if(this.head==null){
      console.log("empty LL")
      return
    }
    let temp = this.head;
    for(let i=1;i<=Math.floor(this.size/2);i++){
      temp = temp.next
    }
    while(temp != null){
      process.stdout.write(temp.data+ " ")
      temp = temp.next
    }
  }
// Slow & Fast Algorithm -- 1st pointer runs 1 step & 2nd pointer run 2 step
  middleOfLLSFA(){
    let slow = this.head,fast = this.head
    while(fast != null && fast.next!= null){
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }

  printLL(head){
      if(head == null){
        return console.log("Empty Linked List")
      }
      let temp = head;
      while(temp!= null){
        process.stdout.write(temp.data+ " ")
        temp = temp.next
      }
      console.log("null")
}

}

let obj = new LL()
obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtFirst(40)
obj.insertAtFirst(50) 
// obj.printLL(obj.head)
// obj.deleteAtLast()
// obj.printLL(obj.head) 
// obj.insertAtLast(60)
// obj.printLL(obj.head) 
// obj.deleteAtFirst() 
// obj.printLL(obj.head)
obj.insertAtPosition(69,5) 
obj.printLL(obj.head) 
// obj.middleOfLL() 
obj.middleOfLLSFA()







