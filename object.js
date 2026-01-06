 //create object

 const user = {
    name : "palak",
    age :20,
    account :5000,
    emailId:"palak@gmail.com"

 }

 console.log(user)

 //access individual value through key
  console.log(user.name , user.emailId);

  //update value 
   user.account = 2000;
   user.name = "silky"
   console.log(user)

   //inert value 

   user.address = 24245252
    console.log(user)

    //delete
   delete user.emailId
    console.log(user)

    //another way to create objects
    const user1 ={
        "name":"pratham",
        "age" :20,
        "home address":"dwarika"  
      }

       console.log(user1)
       console.log(user1["name"],user1["age"],user1["home address"],user1.name)


//printing only keys
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))   // all i get in form of array

//traversing object through for in loop

for(let keys in user){
    console.log(keys,user[keys] ,user.keys)
}

//destructuring objects in order to access individual values

const {name, age,address}=user  
   console.log(name,age,address)

   //can give name to keys
   //const {name:userName, age :userAge}=user
     // console.log(userName,userAge)


//destructruing array as well
const arr =[12,43,54,65,23]
const [first , second,third]=arr
   console.log(first , second , third)

//traversing objects using for of loop

console.log("print keys")

for(let keys of Object.keys(user1)){
       console.log(keys)
}

console.log("print values")

for(let keys of Object.values(user1)){
       console.log(keys)
}

console.log("print enteries")

for(let keys of Object.entries(user1)){
       console.log(keys)
}  // but i get array instead of individual items so i destructure it

for(let [keys,values] of Object.entries(user1)){
       console.log(keys,values)
}

//create function inside objects 

const login ={
    name :"palak",
    email:"palak@gmail.com",
    signup:function(){
        //console.log(`successfully sign in ${login.name}`)
         console.log(`successfully sign in ${this.name}`) //prefer this

        return 1
    }
}

const x=login.signup()
console.log(x)

//now understand why we prefer (this)instead of object name

const login1 ={
    name1 :"palak",
    email1:"palak@gmail.com",
    signup1:function(){
        
         //console.log(`successfully sign in ${login1.name1}`) 
         
         console.log(`successfully sign in ${this.name1}`) //use this

        return 1
    }
}

const login2 ={
    name1:"pratham",
    age:24

}

//i copied the function from above object
login2.greeting=login1.signup1
console.log(login2)
console.log(login2.greeting())  //i get palak instead of pratham so i use this

//nested objects


const signup= {

    name:"palak",
    age :2344,
    account :22424,


    //nested object
    adress:{
    
        city:"tokio",
        state:"sintu"
    }

}

console.log(signup)

//shallow copy
//make independent copy of objects
const sign ={...signup}
sign.name ='shinchan'
sign.adress.city="dwarika"
console.log(sign)
console.log(signup)

//deep copy

const us = structuredClone(signup)
us.adress.city ="goa"
us.name ="silky"
console.log(us)
console.log(signup)

//we can make key using number as well 

const hungama={

    name :"shinchan",
    0:"hello",
    1:5
}

console.log(hungama[0],hungama["0"])

//making symbol key 
const sym =Symbol("id")

const user6 ={
    name:"pratham",
    age :20,
    [sym]:"hello"
}

console.log(user6[sym])