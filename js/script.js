
const modalAuth = document.querySelector('.modal-auth');
const buttonAuth = document.querySelector('.button-auth');
const logInForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');

buttonAuth.addEventListener('click', () => {
 modalAuth.classList.toggle('active');
});

logInForm.addEventListener('submit', logIn);

function logIn(event){
 event.preventDefault();
 const login = loginInput.value;
 userName.textContent = login;
 userName.style.display = 'inline';
 buttonAuth.style.display = 'none';
 modalAuth.classList.remove('active');
 localStorage.setItem('nameParametr', login);
 logInForm.reset();
}

const savedUser = localStorage.getItem('nameParametr');
if(savedUser){
 userName.textContent = savedUser;
 userName.style.display = 'inline';
 buttonAuth.style.display = 'none';
}
