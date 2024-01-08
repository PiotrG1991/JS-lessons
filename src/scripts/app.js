// Variables

// Redeclaration
// var x = 42;
// var x = 666;
// console.log(x);
// var ok (quirks mode)

// strict mode
// "use strict"
// var x = 42;
// var x = 666;
// console.log(x);
// var ok (strict mode)

// let x = 42;
// let x = 666;
// console.log(x);
// let not ok


// const x = 42;
// const x = 666;
// console.log(x);
// const not ok

//reinitialization, re-assignment
//var x = 10;
//x= 20;
//console.log(x);

//let x = 10;
//x = 20;
//console.log(x);

//const x = 10;
//x = 20;
//console.log(x);

// Hoisting
//console.log(x);
//var x = 42;

// powyższy kod jest uruchamiany przez js, tak jak poniższy
// var x;
//console.log(x);
//x = 42;

// let i const są hoistowane ale trafiają do Temporary Dead Zone
//console.log(x);
//let x = 42;


// Scope
// block scope - dowolna para klamerek
//if (true) {
//    var x = 10;
 //   let y = 10;
 ///   const z = 10;
//}

//console.log(x);
//console.log(y);
//console.log(z);

//function magic () {
//    var x = 10;
//    let y = 10;
//    const z = 10;
//}

//magic();
//console.log(x);
//console.log(y);
//console.log(z);


//var x = 42;

//function magic(){
//    var x = 666;
//    console.log(x);
//}

//magic();
//console.log(x);

//let x = 42;

//function magic(){
//    let x = 666;
//    console.log(x);
//}

//magic();
//console.log(x);

//const x = 42;

//function magic(){
//    const x = 666;
//    console.log(x);
//}

//magic();
//console.log(x);

// functions

// is palindrome
//function isPalindrome(text){
//    return text
//        .toLowerCase() === text
//        .toLowerCase()
//       .split('')
//        .reverse()
//        .join('');
//}
//console.log(isPalindrome('kajak'))
//console.log(isPalindrome('Ryszard'))

// myMax
function myMax(digits){
     let max = digits[0];

     for (const digit of digits){
         if (max < digit){
             max = digit;
         }
     }
     return max;
}

//console.log(myMax([1, 2, 3, 4, -3, 2]));

function multiply2(digits,multipler){
    const temp = []

    for (const digit of digits){
        temp.push(digit * multipler);
    }
    return temp
}

const multiply = (digits, multiplier) => digits
    .map((digit) => digit * multiplier);


console.log(multiply([1, 2, 3, 4], 2));

