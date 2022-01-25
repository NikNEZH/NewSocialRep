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
//^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$
let reglog = /[a-zA-Z]/
let regpass = /[0-9]/;

const form = document.getElementById('form')
const log = form.querySelector('#logemail')
const pas = form.querySelector('#logpass')
const button = form.querySelector('#btn') 
let validation = (reglog, log) => {
    return reglog.test(log)
    }

form.addEventListener('submit', chekLoginAndPasword) 
form.addEventListener('input', () => {
    button.disabled = !isValdSix(pas.value) || !isValdThrii(log.value)
})

function isValdSix (value) {
    return value.length >= 6
} 
function isValdThrii (value) {
    return value.length >= 3
}

function chekLoginAndPasword (event) {
event.preventDefault()
if(!validation(reglog, log.value)) {
    alert('Некоректен логин')
} else login = {
    text: log.value,
    date: new Date().toJSON()
} 

if(!validation(regpass, +pas.value)) {
    alert('Некоректен пароль')
} else  password = {
    text: pas.value,
    date: new Date().toJSON()
} 

LoginUP.creat(login).then( () => {
    log.value = ''
})
LoginUP.creat(password).then( () => {
    pas.value = ''
})

} 
