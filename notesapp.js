"use strict";
const btnadd=document.querySelector(".btnadd");

const notes=JSON.parse(localStorage.getItem("notes"));
if(notes)
{
    notes.forEach((notetext)=>addnote(notetext));
}

btnadd.addEventListener("click",()=> addnote());

function addnote( text="")
{
const note=document.createElement("div");
note.classList.add("notewrapper");
note.innerHTML=`<div class="operation">
<button class="edit"><i class="fa-solid fa-pen"></i></button>
<button class="delete"><i class="fa-solid fa-trash"></i></button>
</div>
<div class="main ${text ? "":"hidden"}"></div>
<textarea class="${text ? "hidden":""}"></textarea>`;

const editbtn=note.querySelector(".edit");
const deletebtn=note.querySelector(".delete");
const mainele=note.querySelector(".main");
const textareaele= note.querySelector("textarea") ;

textareaele.value=text;
mainele.innerHTML=text;

deletebtn.addEventListener("click",()=>{
  note.remove();
  update();
});

editbtn.addEventListener("click",()=>{
    mainele.classList.toggle("hidden");
    textareaele.classList.toggle("hidden");
})

textareaele.addEventListener("input",(e)=>{
const {value}=e.target;
mainele.innerHTML=value;
update();
});

document.body.appendChild(note);

}

function update()
{
    const notetext=document.querySelectorAll("textarea");
    const notes =[];
    notetext.forEach((note)=>notes.push(note.value));
    localStorage.setItem("notes",JSON.stringify(notes));
}