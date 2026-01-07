 //create  function
  
 function hello(){
    console.log("hello ji");
 }

 hello();


 //create s function add tow number
 function add(num1 , num2){
    return num1+num2;
   
 }

 console.log(add(2,6));

 //create a function which can sum tow,three , four , five number

 function sum(num1,num2,num3=0,num4 =0,num5 =0){

    return num1+num2+num3+num4+num5;
 }
 console.log(sum(2,7));
 console.log(sum(12,50,24));
 console.log(sum(12,34,54,12));
 console.log(sum(10,23,43,22,43));
 console.log(sum(10,10,10,10,10,10))  //it will sum only five elements

 //if dont intitialise with zero and you not pass its value so it took garbage value and sum become nan

 //create a function which give you sum upto any number like 100,30,20 etc.

 function addsum(...num){

     //... is a rest operator which will create array when elemnts pass to function

     let  sum =0;

     for(let i of num){
        sum +=i;
     }
     console.log(sum);
 }
 
 addsum(2,3,4,5,5,6,7,8,9,5,3,5,6,4,4,5,5,);

 //using rest operator while destructuring array
 const arr =[10,203,304,959,656];

 const [first , second ,...num]=arr;
 console.log(first,second ,num);

 //another way to create functions (function stored in variable)

 const a = function (num1 , num2){
    console.log(num1+num2);
 }

  a(4,7); 
 console.log(a)

//another way to create function (arrow function )
const hello2 =()=>{
    console.log('hello');
}

hello2();

//sub tow num

const sub =  (num1,num2)=>{

    return(num1-num2);
}

console.log(sub(17,8));

//simple syntax 

const square= num=>num*num;
console.log(square(8));

//create a arrow function which return object

const obj = ()=>{

    const user ={
        name : "palak",
        age:20,
        account:19238
    }

    return user;

}

console.log(obj());

//another syntax

const obj1 = ()=>{

    return {
        name : "palak",
        age:20,
        account:19238
    }

   

}

console.log(obj1());

//another syntax

const obj2 = ()=>({ name : "palak",  age:20, account:19238});
console.log(obj2());

//another function (immediately invoked function)
(function greeting (){
    console.log("namaste ");

})  ();

const n = (()=>{
    console.log('sayonara');
})();

//callback function
function dance(){
     console.log("i am dancing");
}

function greet (){
    console.log("bonjaur");
}

function meet(call){
     console.log("nice to meet you");
     call();
      console.log("good having a nice day");
}

meet(greet);
meet(dance);


//real world usecase of callback
function blinkitplaceorder(){
     console.log("placed order from blinkit succesfully");
}

function zomatoplaceorder (){
 console.log("placed order from zomato suceesfully")
}

function payment(amount , callback){

     console.log(`${amount} has succesfully initialised`);
     callback();
      console.log("gst");
}

payment(900,zomatoplaceorder);
payment(500,blinkitplaceorder);
