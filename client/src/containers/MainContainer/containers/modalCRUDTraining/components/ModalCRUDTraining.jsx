import React from 'react';
import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from 'reactstrap';
import FormTraining from './FormTraining';

const ModalCRUDTraining = (props) => {
  const {
    isOpened,
    isFetching,
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
      { isFetching ? <Spinner size="sm" color="primary" /> : null}
      {' '}
      <Button disabled={isFetching} type="submit" color="primary" form="trainingForm">Edit</Button>
      <Button disabled={isFetching} type="submit" color="danger" onClick={handleDeledeTrainingR}>Delete</Button>
    </>
  );
  const footerOfAdder = (
    <>
      { isFetching ? <Spinner size="sm" color="primary" /> : null}
      {' '}
      <Button disabled={isFetching} type="submit" color="primary" form="trainingForm">Add</Button>
    </>
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
    none: {
      header: null,
      footer: null,
      formSubmitter: handleAddTrainingR,
    },
  };

  return (
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
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.date) {
    errors.date = 'Required';
  }
  if (!values.trainingType) {
    errors.trainingType = 'Required';
  }
  if (!values.distance) {
    errors.distance = 'Required';
  } else if (values.distance <= 0) {
    errors.distance = 'Must be over then zero';
  }
  return errors;
};

ModalCRUDTraining.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
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
