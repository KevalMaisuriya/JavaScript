// console.log('Hello World');


//Values and Variables

// var myName = 'Keval Maisuriya'; 
// console.log(myName);


//*****Data Types in JS*****

// var myName = 'Keval Maisuriya'; 
// console.log(myName);

// var myAge = 26;
// console.log(myAge);

// var iAmKeval = true;
// console.log(iAmKeval);

//*****typeof operator*****
// console.log(typeof(myName));
// console.log(typeof(myAge));
// console.log(typeof(iAmKeval));

//*****Practise*****
// console.log(10 + "20");
// var a = "9a";
// var b = 5;
// var c = a - b;
// console.log(a - b); //Bug
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(" " +  0);
// console.log("Keval" - "Maisuriya");
// console.log(true + true);
//console.log(true + false);
//console.log(false + true);
//  console.log(false - true); 


//*****Expression & Operator *****/
//Assignment Operator

// var  x = 5;
// var y = 5;
// console.log("Is both the x and y are equal" + x == y);

//Arithmetic operator
// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log("Remainder operator " + 81 % 8);

//Increment & Decrement operator
// var num = 15;
// var newNum = ++num + 5; 
// console.log(num);
// console.log(newNum);

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);

  
//Comparision operator

//  var a = 30;
//  var b = 10;

//  console.log(a == b);
//  console.log(a != b);
// console.log(a > b);
// console.log(a >= b);
// console.log(a < b);
// console.log(a <= b);

//Logical Operator

// var a = 30;
// var b = -20;
// console.log(a >b && b > -50 && b < 0); //Logincal AND
// console.log((a > b) || (b > 0) || (b < 0)); //Logical OR
// console.log(!((a > 0) || (b < 0))); //Logical NOT
// console.log(!false); //Logical NOT


// //String operator
// console.log("Hello world!");
// console.log("Hello" + "World"); //Concate

// var myName = "Keval";
// console.log(myName + "Maisuriya"); 


//Example
// console.log(3**3); // 3*3*3

//Swapping two number
// var a = 5;
// var b = 10;
// var c = b; // c = 10
// b = a; // b = 5
// a = c;

// console.log("The value of a is " + a);
// console.log("The value of a is " + b);


//Swapping two variable without using third variable
// var a = 5;
// var b = 10;

// a = a + b; // a = 15
// b = a - b; // b = 5
// a = a - b; // a = 10  

// console.log("The value of a is " + a);
// console.log("The value of a is " + b);

//Example
// var num1 = 10;
// var num2 = '10';

// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1 === num2);

//Control statements and loops
//if...else     
// var tomorrow = 'sunny';
// if(tomorrow == 'rain')
// {
//     console.log("Take Raincoat");
// }
// else
// {    
//     console.log("No need to take Raincoat");
// }


//Leap Year or not using if...else
// var year = 2020;
// debugger;
// if(year % 4 == 0)
// {
//     if(year % 100 == 0)
//     {
//         if(year % 400 == 0)
//         {
//             console.log("The Year " + year + " is a leap year"); 
//         }
//         else
//         {
//             console.log("The Year " + year + " is not a leap year");     
//         }
//     }
//     else
//     {
//     console.log("The Year " + year + " is a leap year");    
//     }
// }
// else
// {
//     console.log("The Year " + year + " is not a leap year");    
// }


//Conditonla (ternary) operator
// var age = 17;
// if(age >= 18){
//     console.log("You can vote");
// }
// else{
//     console.log("You can't vote");
// }

// var age = 17;
// console.log((age >=18) ? "You can vote" : "You can't vote");


//Switch statement
//1st without break statement
//Find the Area of circle, triangle and  rectangle
// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;
// if(area == "circle"){
//     console.log("The area of circle is : " + PI*r**2);  
// }else if(area == "triangle"){
//     console.log("The area of triangle is : " + (l*b)/2);  
// }else if(area == "rectangle"){
//     console.log("The area of rectangle is : " + (l*b));  
// }else{
//     console.log("Please enter  valid data")
// }

//2nd without break statement
//Find the Area of circle, triangle and  rectangle
// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// switch(area){
//     case 'circle' :
//         console.log("The area of circle is : " + PI*r**2);  

//     case 'triangle' :
//         console.log("The area of triangle is : " + (l*b)/2);

//     case 'rectangle' :
//         console.log("The area of rectangle is : " + (l*b));  

//     default :
//         console.log("Please enter a vlid data");
// }


//3rd with break statement
//Find the Area of circle, triangle and  rectangle
// var area = "circle";
// var PI = 3.142, l = 5, b = 4, r = 3;

// switch(area){
//     case 'circle' :
//         console.log("The area of circle is : " + PI*r**2);  
//         break;

//     case 'triangle' :
//         console.log("The area of triangle is : " + (l*b)/2);
//         break;

//     case 'rectangle' :
//         console.log("The area of rectangle is : " + (l*b));  
//         break;

//     default :
//         console.log("Please enter a vlid data");
//         break;
// }


//While loop
// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }


//do...while loop
// var num = 0;
// do{
//     debugger;
//     console.log(num);
//     num++;
// }while(num <= 10);


//for loop
// for(var num = 0; num <= 10; num++){
//     console.log(num);
// }


//Table 
// for(var num = 1; num <= 10; num++){
//     var tableOf = 10;
//     console.log(tableOf + " * " +  num + " = " + tableOf * num);
// }


//Function in JS
// function sum(a,b){
//     return total = a + b;
// }
// var funExp =  sum(10,40); //Calling Function
// console.log(funExp);


//let and const
//let allow to change the value, const can't
// var myName = "Keval Maisuriya";
// console.log(myName);

// myName = "Keval";
// console.log(myName);

// let myName = "Keval Maisuriya";
// console.log(myName);

// myName = "Keval";
// console.log(myName);

// const myName = "Keval Maisuriya";
// console.log(myName);

// myName = "Keval";
// console.log(myName);


// function biodata(){
//     var myFirstName = "Keval";
//     console.log(myFirstName);

//     if(true){
//         var myLastName = "Maisuriya";
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstName);
//     }
//     console.log('innerOuter ' + myLastName);
// }
// biodata();


// //Template literals
// for(var num = 1; num <= 10; num++){
//     var tableOf = 10;
//     // console.log(tableOf + " * " +  num + " = " + tableOf * num);
//     console.log(`${tableOf} * ${num} = ${tableOf * num}`); //Template literals
// } 


//Default parameter
// function mul(a,b = 6){
//     return a * b; 
// }
// console.log(mul(2))


//Array In JS
//Traversal in Array

// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// console.log(myFriends[myFriends.length -2]); //Find the particular value
// console.log(myFriends.length); //Checking for length in Array


// //Use for loop to nevigate
// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// for(var i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }


//for...in loop
// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// for(let elements in myFriends){
//     console.log(elements);
// }


// //for...of loop 
// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// for(let elements of myFriends){
//     console.log(elements);
// }


//foreach loop
// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// myFriends.forEach(function(element, index, array){
//     console.log(element + " index : " + index + " " + array);
// });


// //Searching and filter in array
// var myFriends = ['Raj', 'Jubin', 'Karan', 'Krunal'];
// console.log(myFriends.indexOf('Jubin'));


// //Perform CRUD using Array(Push)
// const animals =['pig', 'dog', 'cow'];
// //const count = animals.push('chicken') //Add data at the end of the Array  
// // console.log(count);
// animals.push('chcicken', 'cats', 'monkey'); //Add data at the end of Array
// console.log(animals);


// //Array.prototype.unshift
// const animals =['pig', 'dog', 'cow'];
// // const count = animals.unshift('monkey'); //Add the data at Begginig of the Array
// // // console.log(count);
// // // console.log(animals);

// animals.unshift('chicken', 'cats', 'donkey');
// console.log(animals);

//Exmple
// const myNumbers = [1, 2, 3, 5];
// myNumbers.unshift(4, 6);
// console.log(myNumbers);


//pop() => Remove data
// const plants = ['broccoli', 'cabbage', 'kale', 'tomato']
// console.log(plants);
// console.log(plants.pop()); //Remove the last element from Array
// console.log(plants);


//Array.prototype.shift()
// const plants = ['broccoli', 'cabbage', 'kale', 'tomato']
// console.log(plants);
// console.log(plants.shift()); //Remove First last element from Array
// console.log(plants);


//Array.prototype.splice()
// Adds and/or removes Elements from an array

//1: Add dec at the end of an array
//2: What is the return value of splice method?
//3: update march to March(update)
//4: Delete june from an array.

// const months = ['Jan', 'march', 'April', 'Jun', 'July'];
 
//Sol:1
//const newMonth = months.splice(5, 0, "Dec");
// console.log(months);


//Sol:2
// console.log(newMonth)


//Sol:3
// const indexOfMonth = months.indexOf('march')
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1, 'March');
//     console.log(months);
// }else{
//     console.log('No such data found');
// }


//Sol:4
//  const indexOfMonth = months.indexOf('march')
// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth, 1);
//     console.log(months);
// }else{
//     console.log('No such data found');
// }


//map()
// const array1 = [1, 4, 9, 16, 25];
// // //num > 9
// // let newArr = array1.map((curElem,index,arr) => {
// //     return curElem > 9;
// // })
// // console.log(array1);
// // console.log(newArr);

// let newArr = array1.map((curElem, index, arr)=>{
//     return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
// })
// console.log(newArr);  


//1. Find the square root of each element in an array
//2. Multiply each element by 2 and return only those elements which are greater than 10

//sol:1
// let arr = [25, 36, 49, 64, 81]
// let arrSqr = arr.map((curElem)=> Math.sqrt(curElem));
// console.log(arrSqr);

//Sol:2
// let arr = [2, 3, 4, 6, 8]
// let arr2 = arr.map((curElem)=>{
//     return curElem * 2;
// }).filter((curElem)=>{
//     return curElem > 10;
// })
// console.log(arr2);


//Reduce method
//Convert 2d/3d array into single dimensional array
// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curElem, index, arr)=>{
//     return accumulator += curElem;
// }) 
// console.log(sum);


//How to fatten array
// const arr = [
//     ['zone_1', 'zone_2'],
//     ['zone_3', 'zone_4'], 
//     ['zone_5', 'zone_6'], 
//     ['zone_7', 'zone_8'] 
// ];

// let flatArr =  arr.reduce((accum, currval)=>{
//     return accum.concat(currval);
// })
// console.log(flatArr);



//Strings in JavaScript
// let myName = "Keval Maisuriya";
// let myChannel = 'keval'

// let ytName = new String("MkOfficial"); //String constructor
// console.log(myName);
// console.log(ytName);


//Find the "length" of the string
// let myName = "Keval Maisuriya";
// console.log(myName.length);


//Escape character
// let anySentence = "Hello i am from \"Dot Net\" team";
// console.log(anySentence);


//Finding a String in a String
// const myBio = "Hello i am Keval";
// console.log(myBio.indexOf("am")); //Return index position


//lastindexOf() method
// const myBio = "Hello i am keval";
// console.log(myBio.lastIndexOf("i",6));


//Searching for a string in a string
//Search() method 
// const myBio = "I am from Dot Net team";
// let sData = myBio.search("from"); //Retrun the position which is matched
// console.log(sData);


//There are 3 months for extracting a part of a string
// slice(start, end)
// substring(start, end)
// substr(start,length )

//Slice() method
// var str = "Apple, Mango, Kiwi, Orange";
// let res = str.slice(6,-3);
// console.log(res);


//Example
//Display 280 character of string
// let myTweet = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
// let myActualTweet = myTweet.slice(0,280);
// console.log(myActualTweet);
// console.log(myActualTweet.length);


//Substring() method
// var str = "Apple, Orange, Kiwi";
// // var subStr = str.substring(0,4);
// let res = str.substr(-4);
// console.log(res);


//Replace() method <Replace the string>
// let myData = `I am keval Maisuriya`;
// let replaceData = myData.replace("keval","KEVAL");
// console.log(replaceData);


//Extracting string characters
//charAt(Position)
//charCodeAt(Position)
//property access[]

//charAt() method
// let str = "Hello i am Keval Maisuriya";
// console.log(str.charAt(11));


//charCodeAt() method
// let str = "Keval Maisuriya";
// console.log(str.charCodeAt(0));


//Example
//Find the last character charAtCode
// let str = "Hello World";
// let lastStr = str.length -1;
// console.log(str.charCodeAt(lastStr));


//Property Access
// var str = "Hello world";
// console.log(str[0]);

//Uppercase & Lowecase
// let myName = "kEval MaisuRiya";
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());


//Concat() method <Use to join two strigs>
// let fName = "Keval ";
// let lName = "Maisuriya";
// console.log(fName.concat(lName));


//trim() <User to remove the whitespace from the string>
// var str = "         Hello World!              "
// console.log(str.trim());


//Convert string to array
// var txt = "a, b, c, d, e";
// console.log(txt.split(","));


//Date & Time in JavaScript
//new Date()
// let currDate = new Date();
// console.log(currDate);
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());


//Date.now()
// console.log(Date.now()); //Return milisecond since 1 january 1970


//new Date(year, month, ...)
//7 number specify (year, month, day, hour, minute, second, and milisecond)
// var d = new Date(2022, 2, 12, 10, 33, 30, 0);
// console.log(d.toLocaleString());


//Dates method
// const curDate = new Date()
// console.log(curDate.toLocaleString()); //DateTime
// console.log(curDate.getFullYear()); //Year
// console.log(curDate.getMonth()); //Month(0-11)
// console.log(curDate.getDate()); //Date
// console.log(curDate.getDay()); //Day(1-7)


//JavaScript Math object
//Math.PI()
// console.log(Math.PI);


//Math.round()
// let num = 8.4985;
// console.log(Math.round(num));


//Math.pow()
// console.log(Math.pow(2,3)); // same as 2*2*2


//Math.sqrt()
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));


//Math.abs()
//Return the positive values
// console.log(Math.abs(-55));
// console.log(Math.abs(-25.255));
// console.log(Math.abs(-499));


//Math.ceil()
// console.log(Math.ceil(5.1));
// console.log(Math.ceil(99.1));


//Math.floor()
// console.log(Math.floor(4.9));
// console.log(Math.floor(5.6));


//Math.min()
// console.log(Math.min(10,20,6,1,-1));


//Math.max()
// console.log(Math.max(2,6,8,78,9));


//Math.random()
// console.log(Math.floor(Math.random()*10)); // 0 to 9


//Math.trunc()
//Returns integer part of a number
// console.log(Math.trunc(4.20));
// console.log(Math.trunc(-89.10));


//OOP in JavaScript

//How to create an object
//1st way
// let bioData = {
//     myName : "Keval",
//     myAge : 22,
//     getData : function(){
//         console.log(`My Name is ${bioData.myName} and My Age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();


//2nd way => No need to write function as well after es6
// let bioData = {
//     myName : "Keval",
//     myAge : 22,
//     getData(){
//         console.log(`My Name is ${bioData.myName} and My Age is ${bioData.myAge}`);
//     }
// }
// bioData.getData();


//What if we want object as a value inside an object
//Decalre object inside the object
// let bioData = {
//     myName : {
//         firstName : "Keval",
//         lastName : "Maisuriya"
//     },
//     myAge : 22,
//     getData(){
//         console.log(`My Name is ${bioData.myName} and My Age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myName.firstName);


//"this" object
//"this" object is conatains the current context
//Example1
// console.log(this);


//Example2
// function myName(){
//     console.log(this);
// }
// myName();


//Exmaple3
// var myNames = 'Keval';
// function myName(){
//     console.log(this.myNames);
// }
// myName();


//Exmaple4
// const obj = {
//     myAge : 22,
//     myName() {
//         console.log(this);
//     }
// }
// obj.myName();


//Example5
// const obj = {
//     myFName : "Keval",
//     myName : () => {
//         console.log(this);
//     }
// }
// obj.myName();


//Destructuring in ES6
//Array Destructuring
// const myBioData = ['Keval', 'Maisuriya', 22];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myAge);


//Object Destructuring
// const myBioData = {
//     myFName : 'Keval',
//     myLName : 'Maisuriya',
//     myAge : 22
// }
// // let age = myBioData.age;
// // console.log(age);

// let {myFName, myLName, myAge, myDegree = "MCA"} = myBioData;
// console.log(myDegree);


//Object properties
//we can use Dynamic properties
// let myName = "Keval";
// const myBio = {
//     [myName] : "hello how are you?",
//     26 : "is my age"
// }
// console.log(myBio);


//no need to wirte key and value, if both are same
// let myName = "keval";
// let myAge = 22;

// const myBio = { myName, myAge }
// console.log(myBio);


//Spread Operator  
// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

// const myFavColors = [...colors, 'yellow','black'];
// console.log(myFavColors);


//ES7 feature
//1st : Array include
// const colors = ['red', 'green', 'blue', 'white'];
// const isPresent = colors.includes('red');
// console.log(isPresent);


//2nd : **
// console.log(2**3); // 2*2*2 


//ES8 feature
// const message = "I am from dot net team!"
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { Name : "Keval", age : 22};
// console.log(Object.values(person));
// console.log(Object.entries(person));


//ES2018
// const person = {Name:'keval', age:22};
// const sPerson = {...person}

// console.log(person);
// console.log(sPerson);


//flat()
// const arr = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', ['zone7','zone8']],
// ];

// console.log(arr.flat(Infinity));


//ES2020
//1st : BigInt
// let oldNumber = Number.MAX_SAFE_INTEGER;
// const newNum = 9007199254740991n + 12n;
// console.log(newNum);
// console.log(typeof newNum);


// "use strict";
// x = 3.14;
// console.log(x);


//Advanced JavaScript
//Callback function
//Create a calculator
// const  add = (a, b) => {
//     return a + b;
// }

// const sub = (a, b) => {
//     return Math.abs(a - b);
// }

// const mul = (a, b) => {
//     return a * b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }
// calculator(5,2,add); //Higher order function
// console.log(calculator(5,2,mul)); //Callback function


//Lexical Scoping
//Example
// let a = "Hello guys"; //Global Scope

// const first = () => {
//     let b = "How are you? ";

//     const second = () => {
//         let c = "i am from dot net team";
//         console.log(a+b+c);
//     }
//     second();
//     // console.log(a+b+c); //I can't use c
// }
// first();


//Closure in JS
//Example
// const outerFun = (a) => {
//     let b = 10;

//     const innerFun = () => {
//         let sum =  a+b;
//         console.log(`The sum is ${sum}`);
//     }
//     return innerFun;
// }
// let checkClousure = outerFun(5);
// console.dir(checkClousure);


//Synchronus JavaScript
//One work at a time
// const fun2 = () => {
//     console.log(`Function 2 is Called`);
// }

// const fun1 = () => {
//     console.log(`Function 1 is Called`);
//     fun2();
//     console.log(`Function 1 is Called Again`);
// }
// fun1();


//Asnchronus JavaScript
//Work simultaneously
// const fun2 = () => {
//     setTimeout(() => {
//         console.log(`Function 2 is Called`);
//     },2000)
// }

// const fun1 = () => {
//     console.log(`Function 1 is Called`);
//     fun2();
//     console.log(`Function 1 is Called Again`);
// }
// fun1();


//Currying
//sum(5)(3)(8)
// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// sum(5)(3)(8);


//Another way to currying
// const sum = (num1) => (num2) => (num3) => (console.log(num1+num2+num3));
// sum(5)(3)(8);


//Callback Hell
setTimeout(() => {
    console.log(`1 work is done`);
    setTimeout(() => {
        console.log(`2 work is done`);
        setTimeout(() => {
            console.log(`3 work is done`);
            setTimeout(() => {
                console.log(`4 work is done`);
                setTimeout(() => {
                    console.log(`5 work is done`);
                    setTimeout(() => {
                        console.log(`6 work is done`);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);    
}, 1000);