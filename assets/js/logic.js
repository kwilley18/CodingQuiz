Quiz(); 

$(document).ready(function(){
    $("#start").click(function(){
        $("#questions").show(); 
        $("#start-screen").hide(); 
        var seconds = document.getElementById("time").textContent;

        //timer(seconds); 
        //var questionIndex = 0; 
        //var timer = document.getElementById("time"); 
       
        //timer.innerHTML = seconds; 

        
        //console.log(countdown); 
        //timer(seconds); 
        var countdown = setInterval(function() {
            seconds--;
            document.getElementById("time").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);

        chooseAnswer(questionIndex,seconds); 

       
    }); 
}); 

function Quiz(){
    this.questionIndex = 0; 
}

/*function populate(choices, correctAnswer){
    chooseAnswer(choices, correctAnswer); 

}*/ 
function timer(seconds){
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    }, 1000);
}
function chooseAnswer(questionIndex,seconds){

    var newSeconds; 

 // console.log(seconds); 
  //console.log(countdown); 
    //console.log(questionIndex) ;


    if(questionIndex === quizQuestions.length){
        //console.log("Q in"+questionIndex);
       // console.log("L"+quizQuestions.length); 
        $("#end-screen").show(); 
        $("#questions").hide(); 
        progress.innerHTML=""; //$("#progess").hide(); 
    }
    else{
     
       // console.log("before"+questionIndex); 
      //questionIndex--; 
      //console.log("after"+questionIndex); 
      var questionTitle = document.getElementById("question-title"); 
      questionTitle.innerHTML = quizQuestions[questionIndex].text; 
      var choice = quizQuestions[questionIndex].choices; 
      var correct= quizQuestions[questionIndex].correctAnswer; 
 
      //console.log("Question: " + questionIndex);
      // console.log("Clicked: " + this.innerHTML); 
  

    for( var index = 0; index < choice.length; index++){
        var questionAnswers = document.getElementById("choice" + index); 
        questionAnswers.innerHTML = choice[index]; 
       // console.log(questionAnswers.onclick); 
       //var answer = document.getElementById("")
       //questionAnswers.onclick
       //console.log("Clicked: " + this.innerHTML); 
    
      questionAnswers.onclick = function(){
       /* console.log("Question: " + questionIndex);
        console.log("Correct Answer: " + correct); 
        console.log("Clicked: " + this.innerHTML); */ 
 
        var progress = document.getElementById("progress"); 
        if(this.innerHTML === correct){
            progress.innerHTML = "correct"; 
           // console.log("correct");
            chooseAnswer(questionIndex+1,seconds); 
            //questionIndex++;
        }
        else{
           progress.innerText = "incorrect"; 
           //console.log("incorrect");
           // seconds = seconds-10; 
          //  newSeconds = seconds; 
           // console.log(seconds-10); 
           // timer(seconds-10); 
           //seconds.innerHTML = newSeconds; 
           //return newSeconds; 
           seconds.innerHTML = seconds-10;
           console.log(timer(seconds-10)); 
           chooseAnswer(questionIndex+1, seconds-10); 
          // score.innerHTML = seconds; 

           
        }
        var finalScore = document.getElementById("final-score"); 
        finalScore.innerHTML = seconds; 
    }       
        var name = document.getElementById("initials"); 
        console.log( "N"+name.innerHTML);

        finalScoreList(name);
        function finalScoreList(name){
            var list = []; 
        
            list.push(name); 
            console.log(list);
        }

    }
  }
}
var n = document.getElementById("highscores");
console.log(n); 

/*function checkAnswer(correct, countdown){
    var progress = document.getElementById("progress"); 
    if(this.innerHTML === correct){
        progress.innerText = "correct"; 
        console.log("correct");
    }
    else{
       progress.innerText = "incorrect"; 
       console.log("incorrect");

        countdown = countdown -10; 
    }
}*/ 
