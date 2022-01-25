class LoginUP {
  static creat (singup) {
     return fetch('/', {
          method: 'POST', 
          body: JSON.stringify(singup),
          headers: {
              'Content-type' : 'application/json'
          }
      })
      .then(Response => Response.json())
      .then(Response => {console.log(Response)})
  }
} 

let reglog = /[a-zA-Z]/
let regpass = /[0-9]/;

const form = document.getElementById('form')
const login = form.querySelector('#login')
const email = form.querySelector('#email')
const pas = form.querySelector('#password')
const button = form.querySelector('#btn') 
let validation = (reglog, log) => {
  return reglog.test(log)
  }

  form.addEventListener('submit', chekFormRegistration) 
  form.addEventListener('input', () => {
      button.disabled = !isValdSix(pas.value) || !isValdThrii(login.value)
  })

  function isValdSix (value) {
    return value.length >= 6
} 
  function isValdThrii (value) {
    return value.length >= 3
}


function chekFormRegistration(event) {
event.preventDefault()
if(!validation(reglog, login.value)) {
  alert('Некоректен логин')
} else loginSreg = {
  text: login.value,
  date: new Date().toJSON()
} 

if(!validation(regpass, pas.value)) {
  alert('Некоректен пароль')
} else  password = {
  text: pas.value,
  date: new Date().toJSON()
} 

if(email.value === ''){
  alert('Введите емаил для регистрации')
} else emailFromReg = {
text: email.value,
date:new Date().toJSON()
}

LoginUP.creat(loginSreg).then( () => {
  login.value = ''
})
LoginUP.creat(password).then( () => {
  pas.value = ''
})
LoginUP.creat(emailFromReg).then( () => {
  email.value = ''
})
} 