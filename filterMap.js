//  //for each loop

//  const arr =[12,43,64,23,54];
//  arr.forEach((number ,index ,arr)=>{
//         console.log(number,index,arr);
//  })

//  //find sum using for each loop
// let sum =0;
//  arr.forEach((number)=>{
//     sum+=number;
//  })
//  console.log(sum);

//  const a= arr.filter((num)=>num>40)
//  console.log(a);

// //create our own method
// arr.filtering = function (compare){
//    const ans=[];
//   for(let num of this){
//       if(compare(num)){
//         ans.push(num);
//       }
//   }
//   return ans;
// }

// const p = arr.filtering((num)=>num>40);
// console.log(p);

//implement sort logic 
// let arr=[36,87,12,8,34,75,23,97,34] ;
// let arr2=[2,4,1,6,8,2,4,6,6];

// Array.prototype.sorting=function (arr,compare){
  

// for(let i=0 ; i<8; i++){
     
//   for(let j=0; j<8-i; j++){
     
//     if(compare(arr[j],arr[j+1])>0){
//           let temp;
//           temp = arr[j];
//           arr[j] = arr[j+1];
//           arr[j+1]=temp;
//     }
//   }

  
// }

// }

// arr.sorting(arr,(a,b)=>a-b);
// arr2.sorting(arr2,(a,b)=>a-b);
// console.log(arr);
// console.log(arr2);


const arr=[23,53,12,65,75,34];
const t=arr.map((num)=>num*3);
console.log(t);


//real world usecase of filter,map
//here i have a data which there is a array which consist of objects

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

//we have to filter price i want the products whose price is greater than 50

const r =products.filter((num)=>num.price>50);
//console.log(r);

//now sort them as well

  const e =r.sort((a,b)=>b.price-a.price);
  console.log(e);

  //i want only price and name in sorted decresing and greater than 50 as well
  const q= e.map((num)=>({name:num.name , price:num.price}))
  console.log(q);

  //understanding reducer
  //find total price
  const i=products.reduce((accumulator,currentValue)=>{
            return accumulator + currentValue.price;
  },0)

console.log(i);

//aab jo product stock me hai , price 50 se bada hai  sirf unka total batana hai
const y = e.filter((num)=> num.inStock==true);
console.log(y);

const d = y.reduce((acumulator,currentVlue)=>{
  return acumulator + currentVlue.price;
},0)
console.log(d);

//all the prodcts which are in stock total price batao
const pa=products.filter((num)=>num.inStock==true);
console.log(pa);

const dh = pa.reduce((a,b)=>{
      return a + b.price;
},0);

console.log(dh);

//another approach
const rt = products.reduce((p,t)=>{
    
  if(t.inStock){
    return p+t.price;
  }
  else{
    return p;
  }
},0
)

console.log(rt);


//DataStructures 
//Set

//convert array to set

const mat = [13,53,64,1,1,53,23];
const s = new Set(mat);
console.log(s,typeof s);

//create set 
  const st =new Set();
  console.log(st);
  st.add(67);
  st.add(78);
  console.log(st);
  console.log(s.has(64));
  st.delete(78);
  console.log(st);
  console.log(s.size);
  st.clear();
  console.log(st);

  //i have given an array of email which consist duplicate email as well i want to get unique 
  //emails and for that i use set and then convert set back to array

  const email =["ro@gmail","ra@gmail","ri@gmail","ro@gmail","ro@gmail"];

  const yu = new Set(email);
  const s3 = yu;
  console.log(...yu);

  //iterating on sets
 
  for(let num of yu){
    console.log(num);
  }


  //Map datastructure

  const m1 = new Map(
    [
    
      ["ROHIT",40],
      [2, "rohit"],
      [true , 7888],
      [[12,34,23], "you"]

      
    ]
  );

  console.log(m1,typeof m1);

m1.set({name:"palak",age:23},false);
console.log(m1.has("ROHIT"));
console.log(m1.get("ROHIT"))
console.log(m1.size)

//iterating over map

for(let [num,indx] of m1){
  console.log(num,indx);
}
