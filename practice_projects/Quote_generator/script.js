 const newquote =document.querySelector(".btn1");
 const tweet = document.querySelector(".twit");
 const quote =document.querySelector(".quote");
 const author = document.querySelector(".author");
 

 
  async function getquote(){

    const response = await fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random");
    const data = await response.json();
    const parsedata=JSON.parse(data.contents);
        console.log(parsedata);
    quote.innerHTML=parsedata[0].q;
    author.innerHTML=parsedata[0].a;

  }

  newquote.addEventListener('click',()=>{
  getquote();
 })

 tweet.addEventListener('click',()=>{

  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML +"......by" + author.innerHTML );
 })