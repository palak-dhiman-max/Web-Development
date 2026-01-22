 //create array
 let marks =[10,20,30,40,50,60];
 console.log(marks);

 //to find length of array
 console.log(marks.length);

 //array consist of multiple type of element
 let arr = [12,34.897,true,"silky","rohit"];
 console.log(arr);


 //type of array
 console.log(typeof arr);

 //acess array element
 console.log(arr[3],arr[0]);

 //updation(mutable)
 arr[3]="palak";
 console.log(arr);

 //insertion in array at end
arr.push(67);
console.log(arr);

//deletion from end
arr.pop();
console.log(arr);

//insertion /deletion from start

//insert
arr.unshift("ben ten");
arr.unshift(6789);
console.log(arr);

//delete 
arr.shift();
console.log(arr);

//traversing array using for loop
for (let i =0; i<arr.length; i++){

    console.log(arr[i]);
}

//travesrsing array uing for of loop
for(let num of arr){
    console.log(num);
}

//tell output

let arr1 = [10,30,54,93,3];
let arr2 = arr1;
arr2[3]="palak dhiman"
console.log(arr1);

//tell output

// const arr3 =[45,98,23,11,34,23];
// arr3= [10,20,30];
// console.log(arr3); //cant do this

//slicing in array

const x =[10,34,23,54,65];
console.log(x.slice(1,4)); //return new array
console.log(x);

//trim out part from original array (agar hum chhte hai ki jis part ko hum
//slice karte hai vo paret original array se bhi trim ho jaye to splice use karte hai)

// console.log(x.splice(1,3));
console.log(x.splice(1,3,"silku",12));//isse original array change ho jayega (ist index ke 
//ke bad dono elemnt insert ho jayege original array me)
console.log(x);

//merging array
const a=[45,12,65,34];
const a1 =["hello",324,true ,"cat"];
const a2 =[6,1,2,3,4];
//a.push(a1);  //it just push array not merge it
console.log(a);

console.log(a.concat(a1));

//concat multiple array
console.log(a.concat(a1,a2));

//easy operation to perform merging // spread operator

const a5=[...a,...a1,...a2];
console.log(a5)

//array conversion to string 
console.log(a5.toString())

//another function
console.log(a5.join(":"))

//searching
console.log(a5.indexOf("cat"));

//sorting
const names=["alice","t", "k","pratham","palak","rohit"];
names.sort();
console.log(names)
names.reverse();
console.log(names)

const p =[10,45,2,4,32,67,35,654]
p.sort()
console.log(p)

//multiple type of data
const v = [12,34.897,true,"silky","rohit"]
v.sort()
console.log(v)

//but i want number by number sorting

const d =[45,12,32,98,11,23,1]
//ascending
d.sort((a,b)=>a-b)
console.log(d)
//decending
d.sort((a,b)=>b-a)
console.log(d)

//flattening the array

//2d array
const z =[10,20,30,[43,12,54]]
console.log(z)
console.log(z[3][1])

//3d array
const y =[12,43,65,87,[12,43,65,[12,65,34,76],65,34],9,54]
console.log(y[4][3][2])
console.log(y.flat(2))

