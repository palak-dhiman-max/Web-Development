 const element = document.getElementById("grandparent")
 element.addEventListener('click',(e)=>{
    console.log("grandparent is clicked");
    console.log(e.target);
    
 } )

  const element2 = document.getElementById("parent")
 element2.addEventListener('click',(e)=>{
    console.log("parent is clicked");
    // console.log(e);
    
 })
  const element3 = document.getElementById("child")
 element3.addEventListener('click',(er)=>{
    console.log("child is clicked");
    // console.log(er);
    // er.stopPropagation();
    
 } )