
//for loop
for(let i = 0; i<10; i++){
    console.log(i);

}

// while loop

let j = 0;

while(j<=10){

    console.log(j);
    j++;
}


// do while loop

let k =0;
do{
 console.log(k);
 k++;
}while(k<=10);


// conditionals

let age =15;

if(age>=18){
    console.log("eligible for voting");
}
else{
    console.log("not eleigible to vote");
}


//person,kid,old

let ag = 20;

if(ag<=18){
    console.log("kid");
}
else if(age >=60){
    console.log("old");
}

else{
    console.log("young");
}


// logical and &&

let a ="Rohit";
let b = "";
let c = a&&b;
console.log(c);  // mohit


// logical or ||

console.log(0||5);

// not !=

console.log(2!=6 , 2!=2);