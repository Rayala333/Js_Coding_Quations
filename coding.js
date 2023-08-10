//find the duplacate
// let arr = [1,2,8,2,9,8,9]

// console.log([...new Set(arr)])

// let newarray = arr.filter((e,i)=>arr.indexOf(e)!==i)
// console.log(newarray)



//max and min values

// let arr = [10,3,4,7,2,9]

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// let temp=arr[0]
// for(i=0;i<=arr.length-1;i++){
//     if(arr[i]<temp){
//         temp=arr[i];
//     }
    
// }console.log(temp)



//find second largest value

// let arr = [10,3,4,7,2,9]

// let newarray = arr.sort((n1,n2)=>{
//     return n2-n1
// })
// console.log(newarray)

//find the messing numbers in array


// let arr = [9,4,2,5,8]

// let max = Math.max(...arr)
// let min = Math.min(...arr)
// let missingNumbers=[]
// Ex-1
// for(i=min;i<=max;i++){
//     if (!arr.includes(i)) {
//         missingNumbers.push(i);
//       }
      
// }
// console.log(missingNumbers)
//Ex-2
// for(i=min;i<=max;i++){
//     let found = true
//     for(j=0;j<=arr.length;j++){
//         if(arr[j]===i){
//             found=false
//             break
//         }
//     }
//     if(found){
//         missingNumbers+=i
//         // console.log(found,"found")
//         }
        
// }

// console.log(missingNumbers)



// //JavaScript Program to Find the Factorial of a Number

// function myfun(num){
//     if(num==1,num===1){
//         return 1
//     }else{
//         return num*myfun(num-1)
//     }
// }
// console.log(myfun(5))


//fing arr numbers repated in array

// let arr = [2,1,4,3,5,5,6,7,6,8,9,2]

// let newarray = [...new Set(arr)]
// // console.log(newarray)
// for(i=0;i<newarray.length;i++){
//     count = 0
//     for(j=0;j<=arr.length;j++){
//         if(arr[j]===newarray[i]){
//                 count++
//         }
//     }
//     console.log(`${newarray[i]}--${count}`)
// }


// 08045248470--tanishka--Job


//is palindrome or Not

// function myfun(num){
//     let myname = String(num).toUpperCase()
//     let revrseString = myname.split('').reverse().join('').toUpperCase()
//     if(myname===revrseString){
//         console.log(`palindrom`)    
//     }else{
//         console.log(`not Palindrom`)
//     }
// }
// myfun("Aviva")


//find the serise of numbers

// let arr=[1,2,3,5,6,7,9,10,11,12,15,16]

// function findConsecutiveSequence(arr) {
//     const sequences = [];
//     let sequence = [arr[0]];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] === arr[i - 1] + 1) {
//         sequence.push(arr[i]);
//       } else {
//         if (sequence.length > 1) {
//           sequences.push(sequence);
//         }
//         sequence = [arr[i]];
//       }
//     }
  
//     if (sequence.length > 1) {
//       sequences.push(sequence);
//     }
  
//     return sequences;
//   }
  
// //   const numbers = [1, 2, 3, 6, 7, 8, 10, 11];
//   const consecutiveSequences = findConsecutiveSequence(arr);
  
//   console.log(consecutiveSequences);

// Ex-2
let arr=[1,2,3,5,6,7,9,10,11,12,15,16, 20]

let newarray = []

let sequence =[]

for(i=0;i<=arr.length-1;i++){
    if(arr[i]===arr[i+1]-1){
        // newarray.push(arr[i])
        newarray[newarray.length]=arr[i]
    }else{
        newarray.push(arr[i])
        if(newarray.length>1){
            // sequence.push(newarray)
            sequence[sequence.length]=newarray
        }
        newarray=[]
    }
}

console.log(sequence)