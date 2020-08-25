import React from 'react';
import styled from 'styled-components';
// import { Form,Col } from 'react-bootstrap';
import Button from '../button/index'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  height: 60vh;
  width: 40vw;
  border: 4px solid #ffd600;
  border-radius: 15px;
  margin: auto;
  margin-top: 20vh;
  /* padding: 20px; */
  box-sizing: border-box;
`;

const Form_Component = ({ children, ...props }) => {
  return (
    <Form {...props}>{children}</Form>
    // <Form>
    //     <Form.Row>
    //         <Col xs={4}>
    //             <Form.Group controlId="formBasicEmail">
    //                 <Form.Label>Email address</Form.Label>
    //                 <Form.Control type="email" placeholder="Enter email" />
    //                 <Form.Text className="text-muted">
    //                 We'll never share your email with anyone else.
    //                 </Form.Text>
    //             </Form.Group>
    //         </Col>
    //     </Form.Row>
    //     <Form.Row>
    //         <Col xs={4}>
    //             <Form.Group controlId="formBasicPassword">
    //                 <Form.Label>Password</Form.Label>
    //                 <Form.Control type="password" placeholder="Password" />
    //             </Form.Group>
    //             <Form.Group controlId="formBasicCheckbox">
    //                 <Form.Check type="checkbox" label="Check me out" />
    //             </Form.Group>
    //         </Col>
    //   </Form.Row>
    // </Form>
  );
};

export default Form_Component;
