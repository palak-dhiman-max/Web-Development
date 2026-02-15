 const form = document.querySelector('form');
 const result = document.getElementById("result");
 const input = document.getElementById("input");
 const end = document.getElementById("end");
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
  
    const task = document.createElement('div');
    task.style.margin="20px"

    const div = document.createElement('span');
    div.textContent=input.value;
    div.style.fontSize="20px";
    div.style.marginLeft="10px";

    const deletebutton = document.createElement('button');
    deletebutton.textContent="Delete";
    deletebutton.style.marginLeft="10px";
    deletebutton.style.padding="5px"

    const donebutton = document.createElement('button');
    donebutton.textContent="Done";
    donebutton.style.marginLeft="10px";
    donebutton.style.padding="5px"

    task.append(div,donebutton,deletebutton);
    result.append(task);

    deletebutton.addEventListener('click',()=>{
        task.remove();
    })

        donebutton.addEventListener('click',()=>{
        div.style.textDecoration="line-through";
         div.style.color="grey";
    })

 
 end.style.height="700px";
    form.reset();

 })