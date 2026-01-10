
// let  global =39;

// function hello(){
//     let global = 50;
//     console.log(global);
// }

// hello();

let global =49;
function greet(){
    let global =90;

    function meet (){
        let global = 56;
        console.log(global);
    }

    meet();
}

greet();

//we can write a function inside function and return its refernence

 function createcounter(){
     
    function increment(){
        console.log("hello i am increment");
        return 45;
    }

    return increment;
}

    let a = createcounter();
    console.log(a); //reference of increment function
    console.log(a());


    //understanding closure
     function createcounter1(){

     let count =0;

            function increment1(){
                count++;
                return count;
    }

    return increment1;
}

const a1 = createcounter1();
//console.log(count);  give error
console.log(a1());
console.log(a1());
console.log(a1());
console.log(a1());

//usecase of closure

function createbankaccount(){
       let balance = 560;

        return{
    
        deposit:function  (amount){
            if(typeof amount==="number"&& amount >0 ){
                balance+=amount;
               
            }

           
        }
             ,
             withdraw :function  (amount){
            if(typeof amount==="number"&& amount >0&& amount<=balance ){
                balance-=amount;
               
            }
            
        },

        getbalance :function(){
            return balance;
        }

       }
}

const customer = createbankaccount();
customer.withdraw(6);
customer.deposit(456);
console.log(customer.getbalance());


//higher order function

function double (){
    return function execute(){
        console.log("by");
    }
}

const s = double();
s();

//with taking argument

function does (value){

    return function mix(num){

        return num*value;
    }
}

// const n = does(50);
// console.log(n(20));

//another syntax to write this

const n = does(20)(50);
console.log(n);