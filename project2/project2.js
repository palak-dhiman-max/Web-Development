 const select = document.getElementById("first");

 async function github(){

 const info = await fetch("https://api.github.com/users");
 const response = await info.json();
 //console.log(response);

 
 for(let i=0; i<response.length;i++){
 const div = document.createElement('div');
 const image = document.createElement('img');
 div.classList.add("users");
 image.src = response[i].avatar_url;

const h2 =document.createElement('h2');
h2.textContent= `${response[i].login}`;
const a = document.createElement('a');
a.href=response[i].html_url;
a.textContent="View profile";
div.append(image , h2,a);
select.append(div);

div.addEventListener('click', function(){
    
         window.location.href=`p2.html?index=${i}`;
})

 }

}

 github();

 
// const orderdetails ={
//     orderid:233233,
//     food:["pizza","biryani","coke"],
//     cost:234,
//     customer_name : "palak",
//     customer_location: "dwarka",
//     restraurant_location:"delhi"

// }

// function placeorder(orderdetails){
//     console.log(`${orderdetails.cost} payement is in progress`);

//     return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             if(Math.random()>0.1){
//         console.log("payement is received and order get placed");
//         orderdetails.status = true;
//          resolve (orderdetails);}
//          else{
//             reject("Payement failed");
//          }
//     },5000)
//     })

// }

// function preparingfood(orderdetails){
//     console.log(`Your food preparation started of ${orderdetails.food}`);
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{

//     if(Math.random()>0.05){

    
//         console.log("Your order is now prepared");
//         orderdetails.token =123;
//         resolve(orderdetails);}
//         else{
//             reject("Food is not available");
//         }
//     },5000)
// })
  
// }

// function  pickuporder (orderdetails){
//     console.log(`Delivery boy is on way to pick up the order from ${orderdetails.restraurant_location}`);
// return new  Promise((resolve,reject)=>{
//    setTimeout(()=>{

//     if(Math.random()>0.05){
// console.log("I have picked up the order");
// orderdetails.received =true;
// resolve(orderdetails);}
// else{
//     reject("unable to reach");
// }
//     },5000)
// })
 
// }

// function deliveryorder(orderdetails){
//     console.log(`I am on my way to deliver order at ${orderdetails.customer_location}`);
// return new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         if(Math.random()>0.06){

        
//         console.log("Order delevired succesfully");
//         orderdetails.delivery = true;
//         resolve(orderdetails);}
//         else{
//             reject("deleviery failed");
//         }
//     }, 5000);
// })
// }


// async function order(){
//     try{
//     const p1 = await placeorder(orderdetails);
//     const p2 = await preparingfood(p1);
//     const p3 = await pickuporder(p2);
//     const p4 = await deliveryorder(p3);
//     console.log(p4);}
//     catch(error){
//         console.log(error);
//     }
// }

// order();