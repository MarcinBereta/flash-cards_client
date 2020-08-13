import React, { useState } from 'react';
import styled from 'styled-components';
import UserApi from '../../utils/usersApi';
import Background from '../../components/background';
import Form from '../../components/form/';
import Input from '../../components/input/';
import Button from '../../components/button/';
import Spinner from 'react-bootstrap/Spinner';
import AlertComponent from '../../components/alert/';

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

  const handleSubmit = event => {
    event.preventDefault();

    if (state.username.trim() === '' || state.password.trim() === '') {
      setAlert('Please add all data!!!');
      return;
    }

    const { username, password } = state;
    UserApi.loginUser(username, password).then(data => {
      console.log(data);
      if (data.succes) {
        setState({
          ...state,
          spinner: true,
        });
        setTimeout(() => {
          props.history.push('/');
        }, 3000);
      } else {
        setAlert('Błąd serwera!');
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

export default LoginView;
