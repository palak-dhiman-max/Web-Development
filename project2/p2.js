 const first = document.getElementById("first");


 async function github (){
const params = new URLSearchParams(window.location.search);
const i = Number(params.get("index"));
console.log(i);
 const info = await fetch("https://api.github.com/users");
 const response = await info.json();
const image = document.createElement('img');
 image.style.height="230px";
 image.style.width="210px";
 image.style.marginTop="60px";
  image.style.marginLeft="50px";

 image.src=response[i].avatar_url;

 const h3 = document.createElement('h1');
 
 const result = await fetch(response[i].url);
 const response2 = await result.json();

 h3.textContent=` Name:  ${response2.name}`;
 h3.style.marginLeft="50px";

 const h = document.createElement('h1');
 h.textContent=`Followers:  ${response2.followers}`;
 h.style.marginLeft="50px";
 
 const h4 = document.createElement('h1');
 h4.textContent=`Following:  ${response2.following}`;
 h4.style.marginLeft="50px";
 first.append(image,h3,h,h4);


 }

 github();