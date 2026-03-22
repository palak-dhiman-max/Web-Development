 
 let add = document.querySelector(".btn");
 let search =document.querySelector(".search-box");
 let ullist =document.querySelector(".list");

 function addtask(){

       if(search.value===''){
              alert("You must have to write something");
       }

       else{

       
      let list = document.createElement('li');
       let dot = document.createElement('button');
       let cross = document.createElement('button');
let div =document.createElement("div");
div.classList.add("row1");
       ullist.append(div);
       list.style.fontSize="19px"


div.append(dot ,list , cross);
       list.innerHTML=search.value ;
cross.innerHTML="x";
cross.style.color="black";
cross.style.fontSize="20px";
cross.style.border="1px solid grey";


       dot.addEventListener('click',()=>{
            dot.classList.toggle("active");
            list.classList.toggle("text");
            savedata();
       })

       cross.addEventListener('click',()=>{
             div.remove();
             savedata();
       })



}

search.value ="";
savedata();
 }

  


