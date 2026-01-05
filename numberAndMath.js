

//print upto tow decimal place
let  a = 45;
let b = 234.98765;
console.log(b.toFixed(2),typeof b.toFixed(2));
console.log(b);
console.log(b.toPrecision(6) ,typeof b.toPrecision(6));
console.log(b.toString(),typeof b.toString());

//another way to create number (note that dont use this to create number because faltu tarika)

let a1 = new Number(20);
console.log(a1, typeof a1);
let b1= new Number(20);
console.log(a1==b1);  //false
b1= a1;
console.log(a1==b1);  //true

// ajeeb behaviour with type conversion to boolean

console.log(Boolean(new Number({})));  //true
console.log(Boolean(new Number(0)));   //true
console.log(Boolean(new Number(10)));  //true
console.log(Boolean(new Number(null))); //true


//introduction to math object
console.log(Math.abs(-7));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.ceil(2.4));
console.log(Math.floor(9.1));

//most interesting

console.log(Math.random());

//generate random no between 0 to 9
console.log(Math.floor(Math.random()*10));

//generate no 1 t0 6
console.log(Math.floor(Math.random()*6)+1);

//generate otp (but not a secure way) 1000-9999

console.log(Math.floor(Math.random()*(9999-1000 +1))+1000);