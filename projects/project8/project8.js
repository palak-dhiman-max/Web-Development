 //selecting body kuki vahi click karenge to event listner bhi vahi lagega
 const body = document.querySelector('body');

 body.addEventListener('click',(e)=>{
 
    //creating circle
 const circle = document.createElement('div');

 //css me jo circle class ki property define ki thi vo circle me aa jayegi
 circle.classList.add('circle');
 circle.textContent="HI";

const color =["pink ", "green" , "grey" ," red "," blue" ," yellow ", "skyblue ", "aqua", "aquamarine" , "brown"];
circle.style.backgroundColor =color[Math.floor(Math.random()*10)];

//body me circle ko dall do
body.append(circle);

//circle ki position set kar rahe hai ki x coordinate kitna hoga or y coordinate kitna hoga
circle.style.top=`${e.clientY-25}px`;
circle.style.left=`${e.clientX-25}px`;

//to remove the circle

setTimeout(()=>{
    circle.remove();
},5000);

 })


