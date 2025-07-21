//selecting popup box overlay button
var overlay=document.querySelector(".popup-overlay")
var popupbox =document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("popup-button")

addpopupbutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="block"
    popupbox.style.display="block"
})

var canclebutton = document.getElementById("cancle-book")
canclebutton.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display= "none"
    popupbox.style.display= "none"
})

//select container, add-book, book-title-input,book-author-input,book-decription
 var container= document.querySelector(".container")
 var bookcontainer =document.querySelector(".book-container")
 var addbook= document.getElementById("add-book")
 var booktitleinput= document.getElementById("book-title-input")
 var bookauthorinput= document.getElementById("book-author-input")
 var bookdescinput= document.getElementById("book-desc-input")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div =document.createElement("divc")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="block"
    popupbox.style.display="block"

    booktitleinput.value="";
    bookauthorinput.value="";
    bookdescinput.value="";
 })
 function deletebook(event){
    event.target.parentElement.remove()
 }