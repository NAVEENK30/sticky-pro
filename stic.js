var parent=document.querySelector(".parent")
var overlay=document.querySelector(".overlay")

add.addEventListener("click",function(){

parent.style.display="block"
overlay.style.display="block"

})
var main=document.querySelector(".main")
var book=document.getElementById("inputbook")
var author=document.getElementById("inputauthor")
var note=document.getElementById("inputabout")

select.addEventListener("click",function(event){
event.preventDefault()
parent.style.display="none"
overlay.style.display="none"

var div=document.createElement("div")
div.setAttribute("class","section")

div.innerHTML=`<h2>${book.value}</h2>
        <h3>${author.value}</h3>
        <p>${note.value}</p>
         <button onclick='deLe(event)'>remove</button>`
main.append(div)

})

reject.addEventListener("class",function(){
    parent.style.display="none"
    overlay.style.display="none"  
})

function deLe(event){
event.target.parentElement.remove()
}