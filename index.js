//1. ways to print in javaScript
console.log("hello world");
alert("hi");
document.write("this is document write");
//2. java script console API
console.log("hello world ");
console.warn("warning");
console.error("satyam is back..to track");
// 3. javaScript variables
// what are variables ? conatainers to store data values
var number1 =10;
var number2 = 14;
console.log(number1+number2); 
// 4 . Data types in javaScript
//number
var num1 =455;
var num2 =457;
// string 
var sta1 ="this is a string";
//object
var marks={
    ravi: 34,
    shubhum : 78,
    satyam:99

}
console.log (marks);
//booleans
var a = true;
var b = false;
console.log(a,b);
//undefined
var und ;
console.log(und);
//null
var n = null;
console.log(n);

/*
At a very level , thee are two types of data types in java Script 
1 . primative data type : null , number ,string,boolean,Symbol
2.reference data types:Arrays , objects

*/
var arr =[1,35,6677,78];
console.log(arr);
//function in javascript 
// DRY = do not reapeat yourself
function avg (a,b){
    c=(a+b)/2;
    return c;
}
c1 = avg(45,45);
c2 = avg (58,25);
console.log(c1 , c2);
// //if else condition is 
// var age1 = 5;
// var age2 = 10;
// if(age1>age2){
//     console.log('age2 small than the age1 ');
// }
// else{
//     console.log('age1 small then the age2');              
// }
// //for loop 
// var arr1 =[12,85,65,84,65,45];
// console.log(arr1);
// for(var i = 0 ;i<arr1.length;i++){
//     console.log(arr1[i]);
// }
// console.log('------------------------'); 
// //for each loop
// arr1.forEach(function(elememt){
//     console.log(elememt);
// })
// // while loop
// console.log('------------------------'); 
// let j=0;
// while(j<arr1.length){
//     console.log(arr1[j]);
//     j++;
// }
// // do while 
// console.log('------------------------'); 
// do{
//     console.log(arr1[j]);
//     j++
// }
// while(j<arr1.length);
// console.log('------------------------'); 
//opration of array 
// let myarray =['fan','camara',45,null,true];
// console.log(myarray.length);
// myarray.pop();
// myarray.push(89);
// myarray.shift();
//  const newleng = myarray.unshift('satyam');
//  console.log(newleng)
//  myarray.sort();

// console.log(myarray);
// string methods in javaScript 
let myString = "satyam is a good men men men boy men ";
console.log(myString.length);
console.log(myString.indexOf("good"));
console.log(myString.lastIndexOf("men"));
console.log(myString.slice(0,5));
let d = myString.replace('good','bad');
console.log(d, " " , myString);
console.log("---------------------");
//data and time 
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.toDateString());
//DOM manipulation 
let eleclass = document.getElementsByClassName("container");
console.log(eleclass);
eleclass[0].style.background = "yellow";
function clicked(){
    console.log("the button was clicked");
}
//javascript local storage
localStorage.setItem('name','satyam');
localStorage
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();

//json
//this is object
let json ={
    name:"satyam",
    collage: " jabalpur engineering college",
    branch: "information technology"

}
console.log(json);
let myJson = JSON.stringify(json);
console.log(myJson);
myJson = myJson.replace('satyam','satya');
console.log(myJson);
newJsonobj = JSON.parse(myJson);
console.log(newJsonobj);