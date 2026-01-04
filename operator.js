
//airthmetic operator

console.log(2+4,2-4,2*5,6/2,6%2);
console.log(5*6);

// assignment operator
let a = 2;
let b = 5;
let x = a+b;
console.log(x);

//shortcut
x+=b;
console.log(x);

//comparison operator

let s = 4;
let d = 5;

console.log(s>d);
console.log(s<d);
console.log(s>=d);
console.log(s<=d);
console.log(s==d);
console.log(s===d);

// difference between === and ==

let p = 20;
let t= "20";
console.log(p==t , p===t);

//type casting

//string to number
let num = "45";
let num2 = Number(num);
console.log(num2);
console.log(typeof num2);

//case 
let n = "45abc";
console.log(Number(n));   //NaN
console.log(typeof Number(n)); 

// number to string
let num3 = 1234;
let num4 = String(num3);
console.log(num4);
console.log(typeof num4);

//boolean to number

console.log(Number(true),Number(false),typeof Number(true),typeof Number(false));

// boolean to string

console.log(String(true),String(false),typeof String(true),typeof String(false));

// boolean to undefined

console.log(Boolean(undefined));


// other type conversion to boolean 

console.log(Boolean(10));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));
console.log(Boolean(null));


//javscript rules

console.log(null ==undefined); // true
console.log(null ===undefined); //f
console.log(null ==0);          //f
console.log(null =="");          //f
console.log(null ==false);      //f
console.log(null ==true);       //f

//>,<,>=,<=  (null->convert into -> number and undefined->NaN)

console.log("second rule");
console.log(null >=0); // true
console.log(null <=0); //
console.log(null >0);          //
console.log(null <0);          //
console.log(null >=undefined);      
console.log(undefined>=0); 

console.log("Rohit">="Mohit");



