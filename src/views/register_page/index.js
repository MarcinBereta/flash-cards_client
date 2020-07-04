import React, {useState} from 'react'

const RegisterView = () =>{

    const[state, setState] = useState({
        username:"",
        password:"",
        reppassword:""
    })

    const [alert, setAlert] = useState("")

    const handleSubmit = event =>{
        event.preventDefault()

        if(
            state.username.trim() === ""
            || state.password.trim() === ""
            || state.reppassword.trim() === ""
        ){
            setAlert("Podaj wszystkie dane!")
            return
        }

        if(state.password !== state.reppassword){
            setAlert("Hasła nie są zgodne!")
            return
        }

        fetch("http://127.0.0.1:3001/users/register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.username.trim(),
                password: state.password.trim()
            })
            .then(res =>{
                if(res.ok){
                    return res.json()
                }else{
                    setAlert("Błąd serwera!")
                }
            })
            .then(data =>{

            })

        })

    }
    const handleChange = event =>{
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return(
        <h2>wszystko tutaj dziala</h2>
        // <>
        //     <form onSubmit={handleSubmit}>
        //         <input type="text" name="username" onChange={handleChange} value={state.username}/>
        //         <input type="password" name="password" onChange={handleChange} value={state.password}/>
        //         <input type="password" name="reppassword"  onChange={handleChange} value={state.reppassword}/>
        //         <button>Zarejestuj</button>
        //         {
        //             alert != ""?
        //             <div class="alert">
        //                 {alert}
        //             </div>
        //             :
        //             null
        //         }
        //     </form>
        // </>
    )
}

export default RegisterView