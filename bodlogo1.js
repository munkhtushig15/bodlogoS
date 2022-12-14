// let Array = [7, 2, 12, 13];
// let x = 0;

// // for (let i = 0; i < Array.length; i++) {
// //     for (let j = 0; j < i; j++) {

// //     }
// // }

// let sum = 0;
// const sumOfEven = (array) => {
// for (let i = 0; i < array.length; i++) {
//     if(array[i] % 2 === 0) {
//         sum = sum + array[i];
//     }
// }
// console.log(sum);
//   array.map((el) => {
//     if (el % 2 === 0) {
//       sum = sum + el;
//     }
//   });
//   console.log(sum);
// };

// sumOfEven([12,44,33,13]);

// const devhtssanEl = (array) => {
//     array.map((el) => {
//         array.includes((el2) => {
//             if(el==el2) {
//                 array.splice(el,el2);
//             }
//         })
//     })
//     console.log(array);
// }

// devhtssanEl([1,3,3,4,5,6,7,8,9,10,10,10])

// let chars = [1,2,3,4,1,2,3,4,5,56];

// let uniqueChars = chars.filter((c, index) => {
//     return chars.indexOf(c) === index;
// });

// console.log(uniqueChars);

// const duplicates = (array) => {
//   array.filter((el, i) => {
//     return array.indexOf(el) === i;
//   })
// };

// duplicates([1, 2, 3, 4, 5, 1, 2]);

// function Palindrome(number) {
//   let rem,
//     temp,
//     final = 0;

//   temp = number;
//   while (number > 0) {
//     rem = number % 10;
//     number = parseInt(number / 10);
//     final = final * 10 + rem;
//   }
//   if (final == temp) {
//     console.log("The inputed number is Palindrome");
//   } else {
//     console.log("The inputted number is not palindrome");
//   }
// }

// Palindrome(101);

// function checkPalindrome(string) {
//   const len = string.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (string[i] !== string[len - 1 - i]) {
//       console.log("It is not a palindrome");
//     }
//   }
//   console.log("It is a palindrome");
// }

// checkPalindrome("boob");

// =-12=3-1=2-3=1-2=3-1=23=-12=3-=12-3=1-2=3-1=23-=1-23=-1=2-3=1-23=1-2=3-1=2-3=1-2=3-1=2-3

const mySort = (array) => {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let target = array[i];
    for (var j = i - 1; j >= 0 && array[j] > target; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = target;
  }
  console.log(array);
};

mySort([12, 23, 53, 1, 14, 16, 90]);

// var numArray = [140000, 104, 99];
// for (var i = 0; i < numArray.length; i++) {
//     var target = numArray[i];
//     for (var j = i - 1; j >= 0 && (numArray[j] > target); j--) {
//         numArray[j+1] = numArray[j];
//     }
//     numArray[j+1] = target
// }
// console.log(numArray);
