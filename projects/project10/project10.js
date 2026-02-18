 const form = document.querySelector('form');
 const result = document.getElementById("result");
 const gp = document.getElementById("gp");
 let answer={
    q1:"Sachin Tendulkar",
    q2:"West Indies",
    q3:"Sachin Tendulkar",
    q4:"264",
    q5:"Muttiah Muralitharan"
 }

 form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //form me jitna bhi data hai vo data me aa jayega
    const data = new FormData(form);
  let score =0;
    //data.entries se hame vo value mmil jayegi jo hamne input me di hai
    for(let [name,value] of data.entries()){
        if(answer[name]==value){
            score++;
        }
      } 

      result.textContent=`Your Score is : ${score} out of 5`;
      result.style.backgroundColor="aqua";
      result.style.height= "70px";
      gp.style.height="1000px";
      form.reset();
 })