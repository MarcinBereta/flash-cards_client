export const fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    fetch('http://127.0.0.1:3001/users/all', {
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.error('Błąd pobierania danych!');
        }
      })
      .then(data => {
        console.log(data);
        resolve(data);
      });
  });
};

export const registerUsers = (setAlert,state,props) => {
  return new Promise((resolve, reject) => {
  fetch("http://127.0.0.1:3001/users/register",{
    method:"POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: state.username.trim(),
        password: state.password.trim(),
        email: state.email.trim()
    })
})
    .then(res =>{
        if(res.ok){
            return res.json()
        }else{
            setAlert("Błąd serwera!")
        }
    })
    .then(data =>{
        if(!data.succes){
            setAlert(data.message)
        }else{
            setAlert("")
            props.history.push("/code")
        }
    })
  })
};
