console.log("this is working");
shownotes();
document.getElementById("addBtn").addEventListener("click",function(e){
let txt=document.getElementById("floatingTextarea2");
let title=document.getElementById("title");
console.log(txt.value);
let notes=localStorage.getItem("notes");
var notesObj=[];


if (notes == null) {
    notesObj = [];
}

  else {
     notesObj = JSON.parse(notes);
   }
   myobj={
      addtext: txt.value,
      addtitle: title.value
   }
   notesObj.push(myobj);

  
localStorage.setItem("notes",JSON.stringify(notesObj));
txt.value="";
shownotes();
})
 function shownotes(){
    let notes=localStorage.getItem("notes");
    var notesObj=[];
    
    let html="";
    if (notes == null) {
        notesObj = [];
    }
    
      else {
         notesObj = JSON.parse(notes);
       }
       notesObj.forEach((element,index) => {
          
       
       html+=`<div class="card note-card " style="width: 18rem;">
           
       <div class="card-body">
         <h5 class="card-title">Note ${element.addtitle}</h5>
         <p class="card-text">${element.addtext}</p>
         <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)" >Delete note</button>
       </div>
     </div>`;
   });
     if(notesObj.length!=0)
     {
        document.getElementById("notes").innerHTML=html;
     }
     else
     {
        document.getElementById("notes").innerHTML=`<h2>nothing to show! please add a note first</h2>`;
     }

}
function deleteNote(index)
{
   let notes=localStorage.getItem("notes");
   var notesObj=[];
   if (notes == null) {
       notesObj = [];
      }
   
     else {
        notesObj = JSON.parse(notes);
      }
      notesObj.splice(index,1);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      shownotes();
}

let search=document.getElementById("search-value");
search.addEventListener("input",()=>
{
   let value=search.value;
let notes=document.getElementsByClassName("note-card ")
Array.from(notes).forEach((element)=>
{
   let cardtxt=element.getElementsByTagName("p")[0].innerText;
if(cardtxt.includes(value))
{
   element.style.display="block";
}
else
{
   element.style.display="none";
}
})
});
