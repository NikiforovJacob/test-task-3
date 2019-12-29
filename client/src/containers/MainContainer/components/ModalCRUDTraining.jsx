import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import * as actions from '../Redux/actions';
import * as renderFields from '../../../shared/components/renderFields';

const actionCreators = {
  addTraining: actions.addTraining,
  editTraining: actions.editTraining,
  deleteTraining: actions.deleteTraining,
  openModal: actions.openModal,
  closeModal: actions.closeModal,
};

const mapStateToProps = ({
  mainContainerData: {
    uiState: { modalState: { openedModal } },
    domainData: { trainings: { allIds } },
  },
}) => ({
  openedModal,
  trainingsIds: allIds,
});


const validate = (values) => {
  const errors = {};
  const isEmptyValidate = (fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Required';
    }
  };
  isEmptyValidate('date');
  isEmptyValidate('activityType');
  isEmptyValidate('distance');
  return errors;
};

const SettingsUserAdderEditor = (props) => {
  const handleAddTraining = ({
    date,
    activityType,
    distance,
    comment = '',
  }) => {
    const { addTraining, trainingsIds, reset } = props;
    const newTraining = {
      id: trainingsIds.length === 0 ? 1 : (trainingsIds[0] + 1),
      date,
      activityType,
      distance,
      comment,
    };
    addTraining({ newTraining });
    reset();
  };

  // const handleEditTraining = ({
  //   date,
  //   activityType,
  //   distance,
  //   comment,
  // }) => {
  //   const { editTraining, initialValues } = props;
  //   const editedTraining = {
  //     ...initialValues,
  //     date,
  //     activityType,
  //     distance,
  //     comment,
  //   };
  //   editTraining({ editedTraining });
  // };

  const handleCloseModal = () => {
    const { closeModal } = props;
    closeModal();
  };

  const { handleSubmit, openedModal } = props;

  const headerOfEditor = <div>Edit training</div>;
  const headerOfAdder = <div>Add new training</div>;
  const closeBtn = <button type="button" className="close" onClick={handleCloseModal}>&times;</button>;

  return (
    <>
      <Modal isOpen={openedModal !== null} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal} close={closeBtn}>
          {openedModal === 'addTraining' ? headerOfAdder : headerOfEditor}
        </ModalHeader>
        <ModalBody>
          <div>
            <form onSubmit={handleSubmit(handleAddTraining)} id="trainingForm">
              <Field
                name="date"
                label="Date"
                type="date"
                component={renderFields.date}
              />
              <div>
                <Field name="activityType" label="Type of activity" type="select" component={renderFields.select}>
                  <option value="">-</option>
                  <option value="Running">Running</option>
                  <option value="Swimming">Swimming</option>
                  <option value="Cycling">Cycling</option>
                  <option value="Skiing">Skiing</option>
                </Field>
              </div>
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
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary" form="trainingForm">
            {openedModal === 'addTraining' ? 'Add' : 'Edit'}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default connect(mapStateToProps, actionCreators)(
  reduxForm({
    form: 'add/editTraining',
    validate,
    enableReinitialize: true,
  })(SettingsUserAdderEditor),
);
