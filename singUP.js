export class SingUP {
    static creat () {
       return fetch('/SingUP.json', {
            method: 'POST', 
            body: JSON.stringify(),
            headers: {
                'Content-type' : 'application/json'
            }
        })
        .then(Response => Response.json())
        .then(Response => {console.log(Response)})
    }
} 
