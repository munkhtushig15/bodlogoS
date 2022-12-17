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

// const mySort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let target = array[i];
//     for (var j = i - 1; j >= 0 && array[j] > target; j--) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = target;
//   }
//   console.log(array);
// };

// mySort([12, 23, 53, 1, 14, 16, 90])

// const nums = [1, 2, 6, 2, 5];
// const target = 3;

// const sum = () => {
//   nums.map((el, i) => {
//     nums.map((el2, j) => {
//       if (el + el2 ===   target) {
//         console.log(`${el} + ${el2} = ${target}`);
//       }
//     });
//   });
// };

// sum();

// const target = 16;

// const sum = (array) => {
//   array.filter ((el) => {
//     console.log( el === target);
//   })
// };

// sum([1, 23, 123, 12, 432, 4]);

// 1217nii bodlogos

const array = [1, 5, 7, 3, 1, 9, 6, 12];
let sum = 0;
let target = 10;
let notDavhtsah = 0;
//1. array dahi element-uudin niilber olooroi
// array.map((el) => {
//   sum += el;
// })
// console.log(sum);

//2. array dahi 5-s ih elementud olooroi
// array.map((el) => {
//   if( el > 5) {
//     console.log(`5-aas ih toonuud : ${el}`);
//   }
// })

//3. array-g ihees bagaruu sort hiigeerei
// array.sort(function(a, b){return b - a});
// console.log(array);

//4, array-s niilber 10 baih 2 toog ol
// for (let i = 0; i < array.length; i++) {
  
// }

//5. array dahi sondgoi toonuudig ustga
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[j] % 2 === 1) {
      array.splice(j, 1);
    }
  }
}
console.log(array);
