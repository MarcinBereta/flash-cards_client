import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

let Alert_component = ({ text, ...props }) => {
  return (
    <Alert variant="danger" {...props} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{text}</p>
    </Alert>
  );
};

export default Alert_component;
