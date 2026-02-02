const time = document.getElementById("time");
 
 setInterval(()=>{

    const t = new Date();
    time.textContent=t.toLocaleTimeString();

 },1000)