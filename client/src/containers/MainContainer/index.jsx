import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrainingsTable from './containers/trainingsTable';
import ModalCRUDTraining from './containers/modalCRUDTraining';
import ViewsDataContainer from './containers/veiwsDataContainer';
import FetchAlert from './components/FetchAlert';
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
        <FetchAlert />
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
