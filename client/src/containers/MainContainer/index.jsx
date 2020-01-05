import React from 'react';
import TrainingsTable from './containers/trainingsTable';
import ModalCRUDTraining from './containers/modalCRUDTraining/index';

import { StyledMainContainer } from './styled';


const MainContainer = () => (
  <>
    <ModalCRUDTraining />
    <StyledMainContainer>
      <TrainingsTable />
    </StyledMainContainer>
  </>
);


export default MainContainer;
