import React from 'react';
import { Field } from 'redux-form';
import {
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import * as renderFields from '../../../../../shared/redux-form-components/renderFields';

const FormTraining = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} id="trainingForm">
      <Field
        name="date"
        label="Date"
        type="date"
        component={renderFields.text}
      />
      <Field name="activityType" label="Type of activity" type="select" component={renderFields.select}>
        <option value="">-</option>
        <option value="Running">Running</option>
        <option value="Swimming">Swimming</option>
        <option value="Cycling">Cycling</option>
        <option value="Skiing">Skiing</option>
      </Field>
      <Field
        name="distance"
        label="Distance, km"
        type="number"
        component={renderFields.text}
      />
      <FormGroup>
        <Label htmlFor="about">Comment</Label>
        <Input
          tag={Field}
          id="about"
          name="comment"
          placeholder="Comment"
          component="textarea"
        />
      </FormGroup>
    </form>
  );
};

export default FormTraining;
