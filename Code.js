//is palindrome or Not

// function myfun(name){

// let myname = String(name).toUpperCase()

// let revresed = myname.split('').reverse().join('').toUpperCase()

//     if(revresed===myname){
//         console.log("is Palindrome")
//     }else{
//         console.log("Not a Palindrem")
//     }

// }
// myfun("Aviva")



//reverse string

// let name = 'prasad'

// Ex-1
// console.log(name.split('').reverse().join(''))

//Ex-2
// let newarray = []

// for(i=name.length-1;i>=0;i--){

//     newarray+=name[i]
 
// }
// console.log(newarray)

//reverse array of strings

// let newarray = ["prasad","nani","rayala"]

//Ex-1
// let array = newarray.map((e,i)=>e.split('').reverse().join(''))
// console.log(array)

//Ex-2

// let Data = []
// for(i=0;i<=newarray.length-1;i++){

// let newdata =''
//     for(j=newarray[i].length-1;j>=0;j--){
//         // console.log(j)
//         newdata+=newarray[i][j]
//     }
//     Data[i]=newdata 
// }

// console.log(Data)


//print stares

// let n=5;

// for(i=5;i>=0;i--){
//     let arr=''
//     for(j=n;j>=i;j--){
//         arr+="*"
//     }

//     console.log(arr)
// }

// let n = 5

// for(i=0;i<=n;i++){
//     let list=''
//     for(j=0;j<=i;j++){
//             list+='* '
//     }
//     console.log(list)
// }

// for(i=0;i<=n;i++){
//     let list=''
//     for(j=i;j<=n;j++){
//         list+="* "
//     }
//     console.log(list)
// }

// let arr =[1,2,3,4,5]

// let sum  = arr.reduce((f,n)=>{
//     return f+n
// })

// console.log(sum)

//print the norepeated char or number
// let arr = 'abcab'
// let b =''
// Ex-1
// for (let i = 0; i < arr.length; i++) {
//     let isRepeated = false;
//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j && arr[i] === arr[j]) {
//         isRepeated = true;
//         break;
//       }
//     }
//     if (!isRepeated) {
//       b += arr[i];
//     }
//   }
//   console.log(b);
// Ex-2
// arr.split('').map((e,i)=>{
//     if(arr.indexOf(e)===arr.lastIndexOf(e)){
//         console.log(arr[i])
//     }
// })

//union of numbers

// let arr=[1,2,3,4]
// let arr2=[1,3,4,6]

// for(i=0;i<=arr.length-1;i++){
//     for(j=0;j<=arr2.length-1;j++){
//         if(arr[i]===arr2[j]){
//             console.log(arr[i])
//         }
//     }
// }

//count number of repated elements

// let arr = [4,5,6,4,7,3,6,7,8,6,9]

// let fit = [...new Set(arr)]
// // console.log(fit)
// let b=[]
// fit.map((e,i)=>{
//     let count=0
//     for(i=0;i<=arr.length;i++){ 
//         if(e===arr[i]){
//             count=count+1
//         }
//     }
//     b.push(`${e}_Number:${count}_print`)
// })
// let c=[]
// for(i=0;i<=arr.length-1;i++){
//     count=0
//     for(j=0;j<=arr.length-1;j++){
//         if(arr[i]===arr[j]){
//             count=count+1
//         }
//     }
//     c[i]=`${arr[i]}Number_:${count}`
// }
// console.log(b,'map')
// console.log(c,"for")

//repated elementes in sub array

// let arr = [4,5,6,4,7,3,6,7,8,6,9]

// let fit = [...new Set(arr)]
// // console.log(fit)
// let b=[]
// fit.map((e,i)=>{
//     let subarray=[]
//     for(i=0;i<=arr.length;i++){ 
//         if(e===arr[i]){
//             subarray.push(arr[i])
//         }
//     }
//     b.push(subarray)
// })
// console.log(b)


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

// console.log("1")
// setTimeout(()=>{
//     console.log("2")
// },100)
// setTimeout(()=>{
//     console.log("3")
// },0)
// console.log("4")

// function x(){
//     setTimeout(()=>{
//         console.log(name)
//     },1000)
//     console.log(name)
//     var name="prasad"
// }
// x()

//chick ovles are in name or not

// let name = "prasad"
// let ovel=['a','e','i','o','u']
// let count=0;
// let latter=''
// for(i=0;i<name.length;i++){
//     // console.log(name[i])
//     for(j=0;j<ovel.length;j++){
//         // console.log(ovel[j])
//         if(name[i]===ovel[j]){
//             count=count+1
//             latter+=name[i]
//         }
//     }  
// }
// console.log(count,latter)

// let arr =[
//     {product:"milk", quantity:3,price:1.50},
//     {product:"Burger", quantity:2,price:2.50},
//     {product:"Burger", quantity:3,price:3.50}
// ]
// // Ex-1
// let newarray = arr.map((e,i)=>e.quantity*e.price)
// console.log(newarray)

// console.log(newarray.reduce((f,s)=>f+s))


// Ex-2
// sum=0
// for(i=0;i<arr.length;i++){
//     sum+=arr[i].quantity*arr[i].price
// }
// console.log(sum)

// let arr = [4,2,6,3,7,1,9]

// let newarray = arr.sort((n1,n2)=>{
//     return n1-n2
// })
// console.log(newarray)

// const numbers = [5, 2, 8, 3, 1, 7];

// Bubble Sort - Ascending Order
// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = 0; j < numbers.length- 1; j++) {
//     if (numbers[j] > numbers[j + 1]) {
//       // Swap elements
//       const temp = numbers[j];

//       numbers[j] = numbers[j + 1];
      
//       numbers[j + 1] = temp;
    
//     }
//   }
// }

// console.log(numbers,'my')


//Max and Min number
// Ex-1
// console.log(Math.min(...arr))
// // Ex-2
// let newarray=arr[0]
// for(i=0;i<=arr.length;i++){
//     if(arr[i]<newarray){
//             newarray=arr[i]
//     }
// }
// console.log(newarray)






