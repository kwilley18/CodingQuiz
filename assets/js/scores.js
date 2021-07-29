/*$(function(){
    $("#submit").load("/index.html"); 
    $("#initials").load("/index.html"); 

  });*/ 
window.onload = function(){

    document.getElementById("submit").onclick = function() {
    var text = document.getElementById("initials").value; 
    console.log(text); 
    alert('had trouble adding the name to the high score list');
       //Now construct a quick list element
       var li = "<li>" + text + "</li>";
console.log(li); 
       //Now use appendChild and add it to the list!
       document.getElementById("highscores").appendChild(li);
}
}