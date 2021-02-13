"use strict";

var burgerBtn = document.getElementById('burgerBtn');
var toggle = document.getElementById('toggleMenu');

var toggleMenu = function toggleMenu() {
  if (toggle.style.display == 'block') {
    toggle.style.display = 'none';
    burgerBtn.classList.remove('open');
  } else {
    toggle.style.display = 'block';
    burgerBtn.classList.add('open');
  }
};

;

var openTab = function openTab(evt, tabs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabItem");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabs).style.display = "flex";
  evt.currentTarget.className += " active";
};

var openQuestion = function openQuestion(evt, question) {
  var i, tabAnswer, tabQuestion;
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
};