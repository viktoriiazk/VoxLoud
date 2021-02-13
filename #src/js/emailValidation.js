const inputEmail = document.getElementById('email');
const error = document.getElementById('error');
inputEmail.oninvalid = invalid;
function invalid(event) {
    error.removeAttribute('hidden');
    inputEmail.classList ='error';
    event.preventDefault();
  }