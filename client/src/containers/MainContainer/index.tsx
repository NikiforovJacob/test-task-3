import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrainingsTable from './containers/trainingsTable';
import ModalCRUDTraining from './containers/modalCRUDTraining';
import ViewsDataContainer from './containers/viewsDataContainer';
import FetchAlertContainer from './containers/fetchAlert';
import * as actionsDomainData from './redux/actions';
import StyledMainContainer from './styled';

class MainContainer extends Component {
  componentDidMount() {
    const { fetchTrainings } = this.props;
    fetchTrainings();
  }

  render() {
    return (
      <>
        <FetchAlertContainer />
        <ModalCRUDTraining />
        <StyledMainContainer>
          <ViewsDataContainer />
          <TrainingsTable />
        </StyledMainContainer>
      </>
    );
  }
}

const actionCreators = {
  fetchTrainings: actionsDomainData.fetchTrainings,
};

export default connect(() => ({}), actionCreators)(MainContainer);
