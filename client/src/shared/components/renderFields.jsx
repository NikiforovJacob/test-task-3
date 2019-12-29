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
      invalid={touched && error}
      id={input.name}
      placeholder={label}
      {...custom}
    />
    {touched && ((error && <FormFeedback invalid={touched && error}>{error}</FormFeedback>))}
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
    <Input type="select" invalid={touched && error} {...input} {...custom}>
      {children}
    </Input>
    {touched && ((error && <FormFeedback invalid={touched && error}>{error}</FormFeedback>))}
  </FormGroup>
);

export const date = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormGroup>
    <Label htmlFor={input.name}>{label}</Label>
    <Input
      invalid={touched && error}
      id={input.name}
      placeholder={label}
      {...input}
      {...custom}
    />
    {touched && ((error && <FormFeedback invalid={touched && error}>{error}</FormFeedback>))}
  </FormGroup>
);
