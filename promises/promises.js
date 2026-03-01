//  console.log("hello world " );
//  let p1= fetch("https://api.github.com/users");
//  //console.log(p1);
//  //jab server respond kardega matlab hame data de dega tab hum usko read karenge
// const p2 = p1.then((response)=>{
//     return response.json();
//  })
// //console.log(p2);
//  p2.then((data)=>{
//     console.log(data);
//  }) 
// console.log("world end");

//same code using chaining

// fetch("https://api.github.com/users")
// .then((response)=>{ 
//     return response.json()
// })
// .then((data)=>{
    
//  //console.log(data)
// const select = document.getElementById("parent");

// for(let i =0; i<data.length;i++){
// const element = document.createElement('img');
// element.style.height="100px";
// element.style.width="100px";
// element.src=data[i].avatar_url;
// select.append(element);
// }

// });

// //creating json format 

// const jasonFormat = `{
// "name": "palak",
// "age": 21,
// "address": "dwarka"

// }`;

// //convert jasonformat into js obj
// console.log(JSON.parse(jasonFormat));

// //create js object
// const jsObj ={
//     name:"palak",
//     age:43,
//     address:"delhi",
//     c:undefined
// }

// console.log(JSON.stringify(jsObj));

//handling the errors(no internet connection , wrong url)

// fetch("https://api.github.com/users")
// .then((response)=>{ 
//     if(!response.ok){
//  throw new Error("Data is not present in Server");
//     }
//     return response.json()
// })
// .then((data)=>{
    
//  //console.log(data)
// const select = document.getElementById("parent");

// for(let i =0; i<data.length;i++){
// const element = document.createElement('img');
// element.style.height="100px";
// element.style.width="100px";
// element.src=data[i].avatar_url;
// select.append(element);
// }

// })
// .catch((error)=>{
//     const select = document.getElementById("parent");
//     select.textContent=error.message;
// })

//how can we create promise
// const p1 = new Promise((resolve,reject)=>{
//    return resolve(
//     //"Hello"
//         {
//             name:"palak",
//             age:19
//         }
//     );
//     //agar reject ko bhi ase hi likhenge to error ayega 
//   //reject("hello");
// })

// p1.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })


// resolving the code which we implement by callback hell

const orderdetails ={
    orderid:233233,
    food:["pizza","biryani","coke"],
    cost:234,
    customer_name : "palak",
    customer_location: "dwarka",
    restraurant_location:"delhi"

}

function placeorder(orderdetails){
    console.log(`${orderdetails.cost} payement is in progress`);

    return new Promise((resolve,reject)=>{
          setTimeout(()=>{
            if(Math.random()>0.9){
        console.log("payement is received and order get placed");
        orderdetails.status = true;
         resolve (orderdetails);}
         else{
            reject("Payement failed");
         }
    },5000)
    })

}

function preparingfood(orderdetails){
    console.log(`Your food preparation started of ${orderdetails.food}`);
return new Promise((resolve,reject)=>{
  setTimeout(()=>{

    if(Math.random()>0.05){

    
        console.log("Your order is now prepared");
        orderdetails.token =123;
        resolve(orderdetails);}
        else{
            reject("Food is not available");
        }
    },5000)
})
  
}

function  pickuporder (orderdetails){
    console.log(`Delivery boy is on way to pick up the order from ${orderdetails.restraurant_location}`);
return new  Promise((resolve,reject)=>{
   setTimeout(()=>{

    if(Math.random()>0.05){
console.log("I have picked up the order");
orderdetails.received =true;
resolve(orderdetails);}
else{
    reject("unable to reach");
}
    },5000)
})
 
}

function deliveryorder(orderdetails){
    console.log(`I am on my way to deliver order at ${orderdetails.customer_location}`);
return new Promise((resolve,reject)=>{

    setTimeout(() => {
        if(Math.random()>0.06){

        
        console.log("Order delevired succesfully");
        orderdetails.delivery = true;
        resolve(orderdetails);}
        else{
            reject("deleviery failed");
        }
    }, 5000);
})
}


placeorder(orderdetails)
.then((orderdetails)=>preparingfood(orderdetails))
.then((orderdetails)=>pickuporder(orderdetails))
.then((orderdetails)=>deliveryorder(orderdetails))
.then((orderdetails)=>{
    console.log(orderdetails);
})
.catch((error)=>{
  console.log(error);
})

.finally(()=>{
    console.log("hel");
})