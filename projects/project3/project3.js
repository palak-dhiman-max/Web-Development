//submit sirf form pe hi kaam karega

const select = document.querySelector('form');
 console.log(select);
 select.addEventListener('submit' , (e)=>{
    e.preventDefault();
    //prevent default isliye use kiya kuki jab form submit hota hai to by default sara data gayab ho jata hai,kuki form submit ho jata hai isliye use kiya
    const boy = document.getElementById("boy");

    const girl = document.getElementById("girl");
   const b= boy.value.length;
   const g= girl.value.length;
 const result=  Math.pow(b+g,3)%101;
 document.querySelector('h2').textContent=`Result ${result}%`;
 //reset likhne se jo value input me di thi vo hat jayegi answer aane ke baad
 select.reset();
 })