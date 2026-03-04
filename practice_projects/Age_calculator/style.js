 const calculate =document.querySelector(".btn");
 const input = document.querySelector(".inp");
 const ans = document.querySelector(".ans");
 calculate.addEventListener('click',()=>{

    let birthdate = new Date(input.value);
    let today = new Date();
    let y1=birthdate.getFullYear();
    let d1=birthdate.getDate();
    let m1 = birthdate.getMonth() +1;

    let y2=today.getFullYear();
    let d2=today.getDate();
    let m2=today.getMonth()+1;

    let y3;
    let d3;
    let m3;

    y3 = y2-y1;

    if(m2>=m1){
        m3 =m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 -m1;
    }

        if(d2>=d1){
        d3 =d2-d1;
    }else{
        m3--;
        d3 = getdays(y1,m1) + d2 -d1;
    }
 
    ans.innerHTML=`You are ${y3} years ,${m3} months and  ${d3} days old`;

    function getdays(year,month){
        return new Date(year,month,0).getDate();
    }
 })