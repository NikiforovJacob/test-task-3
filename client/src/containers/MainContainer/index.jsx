import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from 'reactstrap';
import MainTable from './containers/mainTable';
import ModalCRUDTraining from './containers/modalCRUDTraining/index';
import * as actions from './containers/modalCRUDTraining/redux/actions';

const actionCreators = {
  openAddTrainingModal: actions.openAddTrainingModal,
};

const mapStateToProps = (
  { mainContainerData: { uiState: { modalCRUDTraining: { openedModal } } } },
) => ({
  openedModal,
});

const MainContainer = (props) => {
  const handleOpenAddTrainingModal = () => {
    const { openAddTrainingModal } = props;
    openAddTrainingModal();
  };

  return (
    <div>
      <Button color="danger" onClick={handleOpenAddTrainingModal}>New</Button>
      <ModalCRUDTraining />
      <MainTable />
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(MainContainer);
