 const time = document.getElementById('h2');

 setInterval(()=>{
    const currentTime = Date.now();
    //give me current time in milliseconds

    const olympicTime = new Date(2028,6,14).getTime();
    //olympic kab hai uska time mil jayega millisecond me
    let milli = olympicTime-currentTime;
    const day = Math.floor((milli)/(1000*60*60*24));
    milli%=1000*60*60*24;
    const hour= Math.floor((milli)/(1000*60*60));
    milli%=1000*60*60;
    
    const minutes= Math.floor((milli)/(1000*60));
     milli%=1000*60;
    const seconds=Math.floor((milli)/(1000));
    milli%=1000;
    
 time.textContent=`${day}:day  ${hour}:hour ${minutes}:minuts ${seconds}:seconds`;
 },1000)