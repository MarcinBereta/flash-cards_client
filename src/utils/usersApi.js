import Auth from './auth'

const token = Auth.getToken()

export default class UsersApi{
  static fetchAllUsers() {
    return new Promise((resolve, reject) => {
      fetch('http://127.0.0.1:3001/users/all', {
        method: 'GET',
        headers:{
          "authorization":"Bearer " + token
        }
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
  static fetchOneUser(userId) {
    return new Promise((resolve, reject) => {
      fetch(`http://127.0.0.1:3001/users/one/${userId}`, {
        method:"GET",
        headers: {
          "authorization":"Bearer " + token
        }
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
  static codeUser(code) {
    return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3001/users/code",{
      method:"POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          code: code.trim()
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
  static deleteDataBase() {
    return new Promise((resolve, reject) => {
    fetch("http://127.0.0.1:3001/users/deleteDataBase",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
  })
  .then(res =>{
    if(res.ok){
      console.log(res)
        return res.json()
    }else{
      reject({message:'Błąd - status: ' + res.status})
    }
})
      .catch(error =>{
        reject({message: error.toString()})
      })
    })
  }
}