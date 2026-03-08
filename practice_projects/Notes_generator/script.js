const createnotes=document.querySelector(".createnotes");
const notes = document.querySelector(".notes");
const notesbox =document.querySelector(".notesbox");

function updateStorage(){

     localStorage.setItem("notes" , notesbox.innerHTML );
     

}

function shownotes(){

    notesbox.innerHTML=localStorage.getItem("notes");
}
shownotes();

createnotes.addEventListener('click',()=>{

    const p = document.createElement("p");
    const img = document.createElement("img");
    p.classList.add("notes");
    p.setAttribute("contenteditable" ,"true");
    notesbox.append(p);
    p.append(img);
})

notesbox.addEventListener('click',(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        const notes = document.querySelectorALL(".notes");
        notes.forEach((nt)=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})





