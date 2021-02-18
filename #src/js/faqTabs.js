const openQuestion = (evt, question) => {
    let i, tabAnswer, tabQuestion;
    tabAnswer = document.getElementsByClassName("tabAnswer");
    tabQuestion = document.getElementsByClassName("tabQuestion");

    if(document.getElementById(question).style.display == "block") {
      document.getElementById(question).style.display = "none";
 
    } else {
        for (i = 0; i < tabAnswer.length; i++) {
            tabAnswer[i].style.display = "none";
          }

          for (i = 0; i < tabQuestion.length; i++) {
            tabQuestion[i].className = tabQuestion[i].className.replace(" active", "");
          }
           document.getElementById(question).style.display = "block";
           evt.currentTarget.className += " active";
    }
    
}