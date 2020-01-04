import React from 'react';
import { connect } from 'react-redux';
import TrainingsTable from './containers/trainingsTable';
import ModalCRUDTraining from './containers/modalCRUDTraining/index';
import * as actions from './containers/modalCRUDTraining/redux/actions';

import { StyledMainContainer } from './styled';

const actionCreators = {
  openAddTrainingModal: actions.openAddTrainingModal,
};

const mapStateToProps = (
  { mainContainerData: { uiState: { modalCRUDTraining: { openedModal } } } },
) => ({
  openedModal,
});

const MainContainer = () => (
  <>
    <ModalCRUDTraining />
    <StyledMainContainer>
      <TrainingsTable />
    </StyledMainContainer>
  </>
);

export default connect(mapStateToProps, actionCreators)(MainContainer);
