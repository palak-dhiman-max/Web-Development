  const select = document.getElementById("parent");
  const body1 = document.getElementById("gp");
  select.addEventListener('click',(e)=>{
      const sel = e.target;
      body1.style.backgroundColor = sel.id;
  })