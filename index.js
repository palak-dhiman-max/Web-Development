
// creating variables

//using let keyword

let a =10;
a =34;
let b =10.34;
console.log(a,b);

//agar semicolon nahi bhi lagaoge tab bhi chalega


// creating variables
//using const keyword

const c = 1234;
console.log(c);

//using var keyword

var f = 345;
var f = 3;
var name ="palak";
console.log(f,name);

//we can acces variable from if block if it is declare inside it

if(true){
    var num =89;

}
console.log(num);

//but cant access through function
function hello(){
    console.log("hello");
    var palak = "ki";
}
hello();
// console.log(palak);     //give me error


//datatypes in javascript

//primitive datatype

//number
let ab = 45;
let bc = 123.98;
console.log(ab , bc);
console.log(typeof ab,typeof bc);

//string
let name1 = "silky";
console.log(name1);
console.log(typeof name1);

//boolean 
let weather = true;
let w1 = false ;
console.log(weather,w1,typeof weather, typeof w1);

//undefined
let user;
console.log(user,typeof user);


//bigint
let bigint1 = 123647483838383n;
console.log(bigint1 ,typeof bigint1);

//null
let q = null;
console.log(q,typeof q);

//symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1,typeof id1);
console.log(id1==id2);

//non primitive datatype

//array
let arr = [1,2,3,"hello",10.34,true,false];
console.log(arr,typeof arr);

//object 

let obj ={
    name3:"palak", age:19
}

console.log(obj);

//function

function add(){
    console.log(2+4);
}

add();

// we can store function in variable as well

let fun = function add1(){
    console.log("hello");
}

fun();
console.log(fun,typeof fun , typeof add);


//non primitive datatypes are mutable

let arr1 = [10,20,30,40,50];
arr1.push(56);
console.log(arr1);
arr1[4]=90;
console.log(arr1);

let obj4 ={
    name6 :"lak" , age :23
}

console.log(obj4.name6);
obj4.name6 = "rohan";
obj4.age = 89;
console.log(obj4);

//tell output

let l ={

    nam :"silkyt", value:24
}

let p = l;

p.value = 45;
p.nam = "rita";
console.log(l);