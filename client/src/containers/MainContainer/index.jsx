import React from 'react';
import { connect } from 'react-redux';
import {
  Button,
} from 'reactstrap';
import MainTable from './containers/mainTable';
import ModalCRUDTraining from './components/ModalCRUDTraining';
import modalsTypes from '../../shared/dispatchers/modalsTypes';
import * as actions from './Redux/actions';

const actionCreators = {
  openModal: actions.openModal,
};

const mapStateToProps = (
  {
    mainContainerData: {
      uiState: { modalState: { openedModal } },
    },
  },
) => ({
  openedModal,
});

const MainContainer = (props) => {
  const handleOpenModal = (modalTitle) => () => {
    const { openModal } = props;
    openModal({ modalTitle });
  };

  return (
    <div>
      <Button color="danger" onClick={handleOpenModal(modalsTypes.addTraining)}>New</Button>
      <ModalCRUDTraining />
      <MainTable />
    </div>
  );
};

export default connect(mapStateToProps, actionCreators)(MainContainer);
