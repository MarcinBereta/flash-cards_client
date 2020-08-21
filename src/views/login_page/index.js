import React, { useState } from 'react';
import styled from 'styled-components';
import UserApi from '../../utils/usersApi';
import Background from '../../components/background';
import Form from '../../components/form/';
import Input from '../../components/input/';
import Button from '../../components/button/';
import Spinner from 'react-bootstrap/Spinner';
import AlertComponent from '../../components/alert/';
import Auth from '../../utils/auth'
import {connect} from 'react-redux'
import {useDispatch} from 'react-redux'
import {setUserLogged, setUserData, setUserIsAdmin} from '../../redux/actions/session'

const Label = styled.label`
  display: inline-block;
  width: 50%;
  text-align: end;
  color: white;
  font-size: 30px;
  justify-content: center;
  margin-right: 2vw;
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  margin-top: 3vh;
  width: 90%;
`;

const LoginView = props => {
  const [state, setState] = useState({
    username: '',
    password: '',
    spinner: false,
  });

  const [alert, setAlert] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault();

    if (state.username.trim() === '' || state.password.trim() === '') {
      setAlert('Proszę wypełnić wszystkie pola!!!');
      return;
    }

    const { username, password } = state;
    UserApi
      .loginUser(username, password)
      .then(data => {
      if (data.succes) {
        setState({
          ...state,
          spinner: true,
        });

        const {token, user} = data
        console.log(data)
        
        setTimeout(() => {
         if(Auth.isTokenActive()){
           console.log('token juz jest')
          props.history.push('/home');
          return
         }else{
           console.log('tworzenie tokena')
           Auth.setToken(token)
          dispatch(setUserData(user))
          dispatch(setUserIsAdmin(user.isAdmin))
          dispatch(setUserLogged())
          props.history.push('/home');
         }
          
        }, 3000);
      } else {
        setAlert(data.message);
      }
    });
  };
  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <Background width="100%">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>name</Label>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={state.username}
            placeholder="name"
          />
        </InputGroup>
        <InputGroup>
          <Label>password</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={state.password}
            placeholder="password"
          />
        </InputGroup>
        <Button text={'Login'} />
        {alert !== '' ? (
          <AlertComponent
            text={alert}
            onClose={() => setAlert('')}
          ></AlertComponent>
        ) : null}
        {state.spinner == true && (
          <Spinner animation="border" variant="primary" />
        )}
      </Form>
    </Background>
  );
};

const mapDispatchToProps = dispatch =>({
  setUser: user => {dispatch(setUserData(user))},
  setUserIsAdmin: () => {dispatch(setUserIsAdmin())},
  setUserLogged: () => {dispatch(setUserLogged())}
})

export default connect(()=>({}), mapDispatchToProps)(LoginView);
