// zomato application just a simulation
const orderdetails ={
    orderid:233233,
    food:["pizza","biryani","coke"],
    cost:234,
    customer_name : "palak",
    customer_location: "dwarka",
    restraurant_location:"delhi"

}

function placeorder(orderdetails,callback){
    console.log(`${orderdetails.cost} payement is in progress`);

    setTimeout(()=>{

        console.log("payement is received and order get placed");
        orderdetails.status = true;
        callback(orderdetails);
    },5000)

}

function preparingfood(orderdetails,callback){
    console.log(`Your food preparation started of ${orderdetails.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderdetails.token =123;
        callback(orderdetails);
    },5000)
}

function  pickuporder (orderdetails,callback){
    console.log(`Delivery boy is on way to pick up the order from ${orderdetails.restraurant_location}`);

    setTimeout(()=>{
console.log("I have picked up the order");
orderdetails.received =true;
callback(orderdetails);
    },5000)
}

function deliveryorder(orderdetails){
    console.log(`I am on my way to deliver order at ${orderdetails.customer_location}`);

    setTimeout(() => {
        console.log("Order delevired succesfully");
        orderdetails.delivery = true;
    }, 5000);
}


placeorder(orderdetails,(orderdetails)=>{
    preparingfood(orderdetails,(orderdetails)=>{
        pickuporder(orderdetails,(orderdetails)=>{
            deliveryorder(orderdetails);
        })
    })
})