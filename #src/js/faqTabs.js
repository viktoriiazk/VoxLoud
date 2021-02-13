const openQuestion = (evt, question) => {
    let i, tabAnswer, tabQuestion;
    tabAnswer = document.getElementsByClassName("tabAnswer");
    for (i = 0; i < tabAnswer.length; i++) {
      tabAnswer[i].style.display = "none";
    }
    tabQuestion = document.getElementsByClassName("tabQuestion");
    for (i = 0; i < tabQuestion.length; i++) {
      tabQuestion[i].className = tabQuestion[i].className.replace(" active", "");
    }
    document.getElementById(question).style.display = "block";
    evt.currentTarget.className += " active";

}

