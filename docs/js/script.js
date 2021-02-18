"use strict";

var bodyTag = document.getElementById('body');
var burgerBtn = document.getElementById('burgerBtn');
var toggle = document.getElementById('toggleMenu');
var logo = document.getElementById('logo');
var logoDesktop = document.getElementById('logo-desk');

var toggleMenu = function toggleMenu() {
  toggle.classList.toggle('menu__active');
  burgerBtn.classList.toggle('open');
  bodyTag.classList.toggle('hiddenScroll');
  logo.classList.toggle('filter-white');
  logoDesktop.classList.toggle('visibility');
};

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
  tabQuestion = document.getElementsByClassName("tabQuestion");

  if (document.getElementById(question).style.display == "block") {
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
};

var inputEmail = document.getElementById('email');
var error = document.getElementById('error');
inputEmail.oninvalid = invalid;

function invalid(event) {
  error.removeAttribute('hidden');
  inputEmail.classList = 'error';
  inputEmail.style.backgroundImage = 'url(/img/contactSection/icon-error.svg)';
  event.preventDefault();
}

;