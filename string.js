
const str = "rohit";
const str2 = 'rohit';
const str3 = `surgical strike
    having a nice day
             once a while in ayear`; //modern way (backtick)

console.log(str,str2,str3);

//formated string
let day = 26;
let str5 =`strike is coming on ${day}`;

let s1 = `${5} x ${1} = ${5}`;

console.log(str5);
console.log(s1);

//some functions in string
const s =`Hello coder army coder`;  // 1 based indexing acc.(length mean how many elemnt is there)
console.log(s.length);
console.log(s[4]);  // acc to one based indexing
s[4]="r";
console.log(s);  // no change
console.log(s.toUpperCase());
console.log(s.toLowerCase());

// finding substring
console.log(s.indexOf('cod')); //6
console.log(s.indexOf('hbjb'));  // -1
console.log(s.lastIndexOf('cod'));//17
console.log(s.includes('z')); // false 

//slicing 
console.log(s.slice(4,8));
console.log(s.slice(6));
//can pass -ve index
console.log(s.slice(-5));
console.log(s.slice(-5,-2));

//another way 
console.log(s.substring(2,6));

//concatenation
const x ="rohit";
const y ="negi";
console.log(x+" "+y);

//other function

console.log(s.replace("coder","palak"));
console.log(s.replaceAll("coder","palak"));

const user ="   rohit negi  "
console.log(user.trim());

const names ="rohit,mohit,sohit,anjali";
console.log(names.split(","));


