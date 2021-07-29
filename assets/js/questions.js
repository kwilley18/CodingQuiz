var quizQuestions = [
    new Question("1. Hyper Text Markup Language Stand For?", ["JavaScript", "XHTML","CSS", "HTML"], "HTML"),
    new Question("2. Which language is used for styling web pages?", ["HTML1", "JQuery", "CSS", "XML"], "CSS"),
    new Question("3. Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("4. Which is used for Connect To Database?", ["PHP", "HTML2", "JS", "All"], "PHP"),
    new Question("5. Webdevtrick.com is about..", ["Web Design", "Graphic Design", "SEO & Development", "All"], "All")
    ]; 
   
    function Question(text, choices, correctAnswer){
        this.text = text; 
        this.choices = choices; 
        this.correctAnswer = correctAnswer; 
    }