import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import FormTraining from './FormTraining';

const ModalCRUDTraining = (props) => {
  const {
    isOpened,
    openedModal,
    handleCloseModal,
    handleSubmit,
    handleAddTraining,
    handleEditTraining,
    handleDeledeTraining,
    reset,
  } = props;

  const handleAddTrainingR = (data) => {
    handleAddTraining(data);
    reset();
  };

  const handleDeledeTrainingR = (data) => {
    handleDeledeTraining(data);
    reset();
  };

  const headerOfEditor = <div>Edit training</div>;
  const headerOfAdder = <div>Add new training</div>;
  const footerOfEditor = (
    <>
      <Button type="submit" color="primary" form="trainingForm">Edit</Button>
      <Button type="submit" color="danger" onClick={handleDeledeTrainingR}>Delete</Button>
    </>
  );
  const footerOfAdder = (
    <Button type="submit" color="primary" form="trainingForm">Add</Button>
  );
  const closeBtn = <button type="button" className="close" onClick={handleCloseModal}>&times;</button>;

  const getModalType = {
    addTraining: {
      header: headerOfAdder,
      footer: footerOfAdder,
      formSubmitter: handleAddTrainingR,
    },
    editTraining: {
      header: headerOfEditor,
      footer: footerOfEditor,
      formSubmitter: handleEditTraining,
    },
  };

  return (
    <>
      <Modal isOpen={isOpened} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal} close={closeBtn}>
          {getModalType[openedModal].header}
        </ModalHeader>
        <ModalBody>
          <FormTraining handleSubmit={handleSubmit(getModalType[openedModal].formSubmitter)} />
        </ModalBody>
        <ModalFooter>
          {getModalType[openedModal].footer}
        </ModalFooter>
      </Modal>
    </>
  );
};

const validate = (values) => {
  const errors = {};
  const isEmpty = (fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Required';
    }
  };
  const distanceValidate = (fieldName) => {
    if (!values[fieldName]) {
      errors[fieldName] = 'Required';
    }
    if (values[fieldName] <= 0) {
      errors[fieldName] = 'Must be over then zero';
    }
  };
  isEmpty('date');
  isEmpty('activityType');
  distanceValidate('distance');
  return errors;
};

ModalCRUDTraining.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  openedModal: PropTypes.string.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleAddTraining: PropTypes.func.isRequired,
  handleEditTraining: PropTypes.func.isRequired,
  handleDeledeTraining: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'CRUDTraining',
  validate,
  enableReinitialize: true,
})(ModalCRUDTraining);
