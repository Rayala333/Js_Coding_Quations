//even or odd 
// function myfun(number){
//         if(number%2===0){
//             console.log("is even")
//         }else{
//             console.log("odd")
//         }
// }
// myfun(21)

//isPalindrome or not 
//ex-1

// function isPalindrome(number) {
//     var str = String(number);
//     var reversedStr = str.split('').reverse().join('');
    
//     return str === reversedStr;
//   }
  
//   // Example usage
//   var num = 1231;
//   if (isPalindrome(num)) {
//     console.log(num + " is a palindrome.");
//   } else {
//     console.log(num + " is not a palindrome.");
//   }

//ex-2

// function isPalindrome(number){
//   let num = String(number)
//   let newnum=[]
//   for(i=num.length-1;i>=0;i--){
//     // console.log(num[i])
//     newnum += num[i]
//   }
//   // console.log(newnum)
//   if(num===newnum){
//     console.log("isPalindrome")
//   }else{
//     console.log('not a Palindrome')
//   }

// }
// isPalindrome(121)


  //fibonacci serice
  //ex-1

// function fibonacci(n) {
//   const sequence = [0,1];

//   for(i=2;i<n;i++){
//     const nextnumber = sequence[i-1] + sequence[i-2]
//     sequence.push(nextnumber)
//   }
//   return sequence
// }

// // // Example usage:
// const fibonacciSequence = fibonacci(10);
// console.log('Ex-1',fibonacciSequence);


//ex-2

// function myfun(num){
//   const newfib = [0,1]
//   for(i=2;i<num;i++){
//     // const newvalue = newfib[i-1]+newfib[i-2]
//     newfib[i]=newfib[i-1]+newfib[i-2]
//   }
//   console.log('Ex-2',newfib)
// }
// myfun(10)



// compare the two arrys

// let a=[1,2,3]
// let b=[1,2,3]

// function myfun(v1,v2){
//         if(v1.length!==v2.length){
//           return false
//         }
//         for(i=0;i<=v1.length;i++){
//           if(v1[i]!==v2[i]){
//             return false
//           }
//           return true
//         }
// }
// console.log(myfun(a,b))


//JavaScript Program To Perform Intersection Between Two Arrays

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8,1];

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


//reverse string

// let name = 'prasad'

//write using methode reverse string
// let newarray = name.split('').reverse().join('')

// console.log(newarray)

// write using loop
// let newname = []
// for(i=name.length;i>0;i--){
  
//   console.log(name[i])
//   newname.push(name[i-1])
// }
// console.log(newname.join(''))

let array = ['prasad','rayala','Nani']
// Ex-1

for(i=array.length-1;i>=0;i--){
  console.log(array[i]) 
}
let mydata = []
for(i=0;i<=array.length-1;i++){
  // console.log(array[i])
  let newarray=[]
  for(j=array[i].length-1;j>=0;j--){
    newarray += array[i][j]
  } 
  console.log(newarray)
  mydata[i] = newarray 
}
console.log(mydata)



