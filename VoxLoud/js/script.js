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

var openTab = function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabItem");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
};