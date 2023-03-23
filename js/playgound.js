// var temp = "Hello"
// temp = "Google"

// let temp2 = 100
// temp2 = 50

// temp4 = "Dog"
// temp4 = "Cat"


// const a = 10
// const b = 20
// let c = 3 
// c = "ABC"
// const d = a + b
// console.log(d + c);

// function myFunc(){
//     console.log("Hi");
// }
// myFunc()


// const number = [1,2,3,4,5,]
// number.push(6)
// number.forEach(element => console.log(element));
// console.log("Insert 6 to Array",number)
// console.log(number[0])


// const test = (num,name) => {
//     console.log(`Number is: ${num} by ${name}`)
// }

// test(100,"Arthit")

// const FilterTemp = number.filter(element => element >=3) //แบบ Argument
// console.log("Filter Num > 3",FilterTemp)

// const obj = {CPU:"Intel Core i9 12700K", //OBJ ต้นแบบ JSON
//              RAM:"HyperX",
//              GPU:"RTX 4090",
//              Extend:{
//                 PSU:"Corsair",
//                 Monitor:"IPASON"
//              }}
// obj.GPU = "RTX 3090"
// console.log(obj.Extend['PSU']);


///Function Return

// const firstName = "Arthit"
// const lastName = "LungYa"
//const margeName = (firstName,lastName) => {
    //return firstName + "" + lastName //Method 1
    //const fullName = firstName + "" + lastName //Method 2
    //return fullName 

//     return `${firstName} ${lastName}` 
// }
// const fullName = margeName(firstName,lastName)
// console.log(fullName)
// const fullName = mergeName(fristName, lastName)
// console.log(mergeName(fristName, lastName));

// const num_1 = 40
// if(num_1 >= 40){
//     console.log("True")
// }


// IF,ELSE IF,ELSE

// if(num_1 >= 40){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// if(num_1 < 50){
//     console.log("True")
// }
// else if (num_1 > 20){
//     console.log("True")
// }
// else if (num_1 > 10){
//     console.log("True")
// }
// else{
//     console.log("False")
// }


//Switch Case
// const num_1 = 40
// switch(num_1){
//     case 10 :
//         console.log("10")
//         break;
//     case 30 :
//         console.log("30")
//         break;
//     case 40 :
//         console.log("มี")
//         break;
//     default:
//         console.log("ไม่มีเลขนี้")
// }

//Loop For


// const obj = {CPU:"Intel Core i9 12700K", //OBJ ต้นแบบ JSON
//               RAM:"HyperX",
//               GPU:"RTX 4090",
//               Extend:{
//                  PSU:"Corsair",
//                  Monitor:"IPASON"
//               }}
// for (let index = 0; index < obj.length; index++){
//     text += obj[index] + "<br>";
// }


// for (const key in obj){
//     if(Object.hasOwnProperty.call(obj,key)){
//         const element = obj[key]
//     }
// }
// for (const item of obj){
//     console.log(item);
// }


//ShortIF
// number1 < 30
// ? console.log("<30")
// ? console.log(">30")

//Loop While

// let i = 0;
// while (i == 10){
//     console.log("index = ", + i)
// }