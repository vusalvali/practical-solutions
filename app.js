// User 2 eded daxil edir. Yoxlanilmalidirki 1ci eded 2ci ededin kvadratina bolunur ya yox. Eger bolunurse hemin ededi 16 say sisteminde gosterin
// const num1 = prompt("Enter number");
// const num2 = prompt("Enter number");

// if (num1>num2 ** 2) {
// let result = num1 / (num2 ** 2);
// hexString = result.toString(16);
// console.log(hexString);
// };

// User istenilen soz ve ya reqem daxil edir. Hemin ededin Polindrom olub olmadigini yoxlayaraq neticeni Alertde bildirmek lazimdir. Eger Palindromdursa "Eded polindromdur" deyilse "Polindrom deyil" yazdirin.;


// function checkPalindrome(userInput) {

//     const len = userInput.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (userInput[i] !== userInput[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const userInput = prompt('Enter a word: ');
// const value = checkPalindrome(userInput);

// console.log(value);



// // a,e,u herflerini * simvolu ile evez edin;

// let str = prompt("Enter a word");
// let res = str.replace(/[aeu]/g, "*");
// console.log(res);

// // EKOB EBOB
// EKOB
// const num1 = prompt('Enter a first positive integer: ');
// const num2 = prompt('Enter a second positive integer: ');

// let min = (num1 > num2) ? num1 : num2;

// while (true) {
//     if (min % num1 == 0 && min % num2 == 0) {
//         console.log(`${num1} ve ${num2} -nin EKOB-u ${min}`);
//         break;
//     }
//     min++;
// }

// EBOB
// function ebob(a, b) {
//     while(a != b){
//         if(a > b) {
//             a -= b;
//         }
//         else {
//             b -= a;
//         }
//     }
//     return a;
// }

// var result = ebob(20, 30);
// console.log(result);


// Tempratur


// let input = prompt("Enter templrature");
// function myFunction(){
//     return (input*9/5) + 32;
    
// }
// function myFunction2(){
//     return (+input + 273.15);
// }

// console.log(myFunction());
// console.log(myFunction2());
