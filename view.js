// is prime or not
// let isPrime = true
// function myfun(num){
//     if(num===1){
//         console.log("1 is neither prime nor composite number")
//     }else if(num>1){
//         for( let i=2; i<num; i++){
//                 if(num%i==0){
//                     isPrime = false
//                     break;
//                 }
//         }
//         if(isPrime){
//             console.log(`${num} is prime number`)
//         }else{
//             console.log(`${num} is a not prime number`)
//         }
//     }else{
//         console.log("The number is not a prime number")
//     }

// }
// myfun(10)

//find b/w 1 to 100 prime numbers
// let arr = []
// function newfun(Number){
//     for(let i=1;i<Number+1;i++){
//      let flag = 0
//      for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag = 1;
//             break
//         }
//      }
//      if(i>1 && flag==0){
//         arr.push(i)
//         // console.log(i)
//      }   
//     }
// }
// newfun(50)
// console.log(arr)

let arr = [10,20,40,60]
let arr1 = [10,30,50,40]
// console.log(
// arr.reduce((f1,f2)=>{
//     return f1+f2
// }))

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr1.length;j++){
//         if(arr[i]==arr1[j]){
//             console.log(i,j)
//         }
//     }
// }
// let obj={a:10,b:20,c:40}
// let obj1={b:30,a:10,c:40}

// for(let i in obj){
//     if(obj[i]===obj1[i]){
//         console.log(obj[i])
//     }
// }

// for(i=1;i<=10;i++){
//     for(j=1;j<=i;j++){
//         if(i<=(10/2)){
//       document.write('*')}
//     }
//     document.write('<br>')
// }

// for(i=5;i>=1;i--){
    
//     for(k=1;k<=i;k++){
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for(i=1;i<=5;i++){
//     for(k=1;k<=i;k++){
//         document.write(k)
//     }
//     document.write('<br>')
// }

// let n =5
// for(let i=1; i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write('*')
//     }
//     document.write('<br>')
// }


// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write('')
//     }
//     document.write('<br>')
//     for(let j=1;j<=i;j++){
//         document.write('*')
//     }
// }

// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write(i)
//     }
//     document.write('<br>')
// }
// let n=5;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write('8')
//     }
//     document.write('<br>')
//     for(let k=n;k>=1n;k--){
//         document.write('*')
//     }
// }
// let n=4
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=i;j++){
//         document.write(i)
//     }
//     document.write('<br>')
// }

// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write(i)
//     }
//     document.write('<br>')
// }


// for(let i=1;i<=n;i++){
//    for(let j=1;j<=i;j++){
//     document.write(i)
//    }
//    document.write('<br>')   
// }

// for(let i=1;i<=n;i++){
//     for(let j=i;j<=n-1;j++){
//      document.write(i)
//     }
//     document.write('<br>')   
//  }

// for(var i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// for(let i=0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

//  let n=5

//  for(let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         document.write('&nbsp; ')
//     }
//     for(k=1;k<=i;k++){
//         document.write('*')
//     }
//     document.write('<br>')
//  }

// for(let i=1;i<n;i++){
//     for(let j=1;j<=i;j++){
//         document.write('&nbsp;')
//     }
//     for(k=i;k<=i;k++){
//         document.write('*')
//     }
//     for(let j=i;j<=n-2;j++){
//         document.write('&nbsp; ')
//     }
//     for(k=i;k<=i;k++){
//         document.write('*')
//     }
    
//     document.write('<br>')
// }

// let name1 = 'prasad'

// console.log(name1.split('').reverse().join(''))

// const user = Array.from(name1).map((e,i)=>e)

// console.log(user)


// let obj ={

// }
// obj['key-1']='hello'
// obj['key-2']='hello-1';
// let key3 = 'hello-2' 
// obj['key-3']=key3
  
// console.log(obj)

// let map = new Map();
// console.log(map)
// console.dir(map)


//JavaScript Program To Perform Intersection Between Two Arrays

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];

// function intersection(arr1, arr2) {
//     const finalArray = [];
//     for (let i = 0; i < arr1.length; i++) {
//       for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             finalArray.push(arr1[i]);
//           break; 
//         }
//       }
//     } 
//     return finalArray;
//   }

//   console.log(intersection(array1,array2))


// //JavaScript Program to Insert Item in an Array

// const myarray = [1,2,3,4,5,6,7]

// myarray.splice(2,3,10,20)

// console.log(myarray)


// //JavaScript Program to Find the Factorial of a Number

// function Factorial(number){
//     if(number==0 || number===1){
//         return 1
//     }else{
//         return number*Factorial(number-1)
//     }
// }
// console.log(Factorial(3))

// //JavaScript Program to Check Vowel or Consonant

// function Vowel(arg){
//       const lower =   arg.toLowerCase()

//       if(lower=='a' || lower=='e' || lower=='i' || lower=='u'){
//         console.log(`${arg} is Vowel`)
//       }
//       else{
//         console.log(`${arg} isConsonant`)
//       }

// }

// Vowel('B')

// //JavaScript Program to Check if a Number is Float or Integer

// function number(value){
//     if(Number.isInteger(value)){
//         console.log("is Intger")
//     }else if(Number.isFinite(value)){
//         console.log("is isFinite")
//     }else{
//         console.log("not a number")
//     }
// }
// number(5.8)

// //JavaScript Program to Format the Date With Expected Output

// const date = new Date()

// //Format: DD/MM/YYYY

// const formatedDate1 = date.toLocaleDateString('en-GB',{day:'2-digit',month:'2-digit',year:'numeric'})

// console.log(formatedDate1)

// //Format: MM/DD/YYYY

// const formatedDate2 = date.toLocaleDateString('en-US',{month:'2-digit',day:'2-digit',year:'numeric'})

// console.log(formatedDate2)

// //Format: DD-MM-YYYY

// const formatedDate3 = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`

// console.log(formatedDate3)

// //Format: MM-DD-YY

// const formatedDate4 = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

// console.log(formatedDate4)


//Javascript Program to Check Two Arrays equal or not?

// let arry1=[3,4,5]
// let arry2=[3,4,5]
// function check(arg1,arg2){
//   if (arg1.length !== arg2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arg1[i] !== arg2[i]) {
//       return false;
//     }
//   }
//   return 'is equal' ;
// }

// console.log(check(arry1,arry2))

// //How to split a sentence into array in javascript?
// const sentence = "Hello, how are you today?";
// const wordsArray = sentence.split(" ");
// console.log(wordsArray);


// //How can you uppercase the first character in a string array?

const stringArray = ["apple", "banana", "cherry"];

// const capitalizedArray = stringArray.map(str => {
//   const firstChar = str.charAt(0).toUpperCase();
//   const restOfString = str.slice(1);
//   return firstChar + restOfString;
// });

// console.log(capitalizedArray);

 


// //How to find max and min value in a given array in java script?

// const numbers = [5, 3, 9, 1, 7];

// const max = Math.max(...numbers);
// const min = Math.min(...numbers);


//How to merge two arrays and sort them in javacsript?
// const array1 = [5, 3, 9];
// const array2 = [1, 7, 2];

// const mergedArray = array1.concat(array2);
// const sortedArray = mergedArray.sort((a, b) => a - b);

// console.log(sortedArray)

// const data = [...array1,...array2]

// console.log(data.sort((a,b)=>a-b))

function isPalindrome(number) {
  var str = String(number);
  var reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;
}

// Example usage
var num = 1231;
if (isPalindrome(num)) {
  console.log(num + " is a palindrome.");
} else {
  console.log(num + " is not a palindrome.");
}


//fibonacci serice

function fibonacci(n) {
  const sequence = [0,1];

  // for (let i = 2; i < n; i++) {
  //   const nextNumber = sequence[i - 1] + sequence[i - 2];
  //   sequence.push(nextNumber);
  // }

  // return sequence;
  for(i=2;i<n;i++){
    const nextnumber = sequence[i-1] + sequence[i-2]
    sequence.push(nextnumber)
  }
  return sequence
}

// Example usage:
const fibonacciSequence = fibonacci(10);
console.log(fibonacciSequence);



