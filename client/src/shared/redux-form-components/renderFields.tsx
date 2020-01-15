import React from 'react';
import {
  Input,
  Label,
  FormGroup,
  FormFeedback,
} from 'reactstrap';

export const text = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input
      {...input}
      invalid={error && touched}
      id={input.name}
      placeholder={label}
      {...custom}
    />
    {error && ((touched && <FormFeedback>{error}</FormFeedback>))}
  </FormGroup>
);

export const select = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input type="select" invalid={error && touched} {...input} {...custom}>
      {children}
    </Input>
    {error && ((touched && <FormFeedback>{error}</FormFeedback>))}
  </FormGroup>
);
