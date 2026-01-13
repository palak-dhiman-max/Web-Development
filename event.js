 //event ->hovering mouse on screen,click ,double click ,scrool ,keyboard se input dalna ,ye sab event hai
 //event listner -> listening the event (click)
 //event action -> strike is coming 
 

 //but we dont prefer this method because we write js code in html as well
//  function handle(){
//     const select = document.getElementById("first");
//     select.textContent="Strike is coming";
//     select.style.color="pink";
//  }

 //another way

//  const select = document.getElementById("first");
//  select.onclick = function handleclick(){
//    // select.textContent="Palak Dhiman";
//    select.style.backgroundColor="pink";
//  }

//  //we also dont prefer this method kuki hame ek hi barr me kai function perform karne hai 
//  //to agar mai dobara yahi likhugi to uper wala function ovveride ho jayega mai dono kaam ek saath nahi 
//  //kar paugi

//  select.onclick = function handleclick(){
//     select.textContent="i am the bestest"
//    // select.style.backgroundColor="grey";
//  }


//another way and best way

// const element = document.getElementById("first");
// element.addEventListener('click',()=>{
//        element.textContent="i am the bestest"
// })

// element.addEventListener('click',()=>{
//        element.style.backgroundColor="grey";
// })

//one more event is double click jab hum double click karenge tab change hoga
//const element = document.getElementById("first");
// element.addEventListener('dblclick',()=>{
//        element.textContent="i am the bestest"
// })


//jaise hi mouse hello coder army pe ayega automatically change ho jayega
// element.addEventListener('mouseenter',()=>{
//        element.textContent="i am the bestest"
// })

//jab mouse text pe jake leave karega to change hojayega
// element.addEventListener('mouseleave',()=>{
//        element.textContent="i am the bestest"
// })


//now lets manipluale div containers
//its a manual way
// const select = document.getElementById("first");
// select.addEventListener('click',()=>{
//        select.textContent="i am clicked";
// })

//we select the parent
const parent = document.getElementById("parent");
// console.log(parent.children);
// for(let child of parent.children){

//     child.addEventListener('click',()=>{
//         child.textContent="i am clicked";
//     })
// }

//lets optimise the code using bubbling

// parent.addEventListener('click',(e)=>{
//     e.target.textContent="i am clicked";
//     
// })


//remove event listner
function handle(e){
 e.target.textContent="i am clicked";
 parent.removeEventListener('click',handle);
}
parent.addEventListener('click',handle);
