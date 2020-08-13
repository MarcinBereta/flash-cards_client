export default class UsersApi{
  static fetchAllUsers() {
    return new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:3001/users/all', {
        method: 'GET',
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            reject({message:'Błąd - status: ' + res.status})
          }
        })
        .then(data => {
          resolve(data);
        })
        .catch(error =>{
          reject({message: error.toString()})
        })
    });
  }

  static registerUser(username, password,email) {
    return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3001/users/register",{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
          email: email.trim()
      })
  })
      .then(res =>{
          if(res.ok){
              return res.json()
          }else{
            reject({message:'Błąd - status: ' + res.status})
          }
      })
      .then(data =>{
        resolve(data)
      })
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
  static loginUser(username, password) {
    return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3001/users/login",{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username.trim(),
          password: password.trim()
      })
  })
      .then(res =>{
          if(res.ok){
              return res.json()
          }else{
            reject({message:'Błąd - status: ' + res.status})
          }
      })
      .then(data =>{
        resolve(data)
      })
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
}