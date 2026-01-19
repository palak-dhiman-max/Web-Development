 const now = new Date();
 console.log(now);  //utc time
 console.log(now.toString()); // current time of my device

 //some more functions
 console.log(now.toISOString()); //utc
 console.log(now.toLocaleString()); //current time of device
 console.log(now.getDay());
 console.log(now.getMonth());
 console.log(now.getHours());
 console.log(now.getFullYear());
 console.log(now.getSeconds());
 console.log(now.getTime());
 console.log(now.getDate());

//create your own date
const now2 = new Date(2025,1,18,12,17,20,123);
console.log(now2);
console.log(now2.toString());

//another way to create
const now3 = Date.now();
const now4 = new Date (now3)
const now5 = new Date (0)
console.log(now4.toString());

console.log(now5.toString());
console.log(now5)

const dates = new Date (-23264264);
console.log(dates.toString())
