import styled from '@emotion/styled';

const StyledMainContainer = styled.div`
  display: flex;
  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  padding: 10px 10px;
`;

export default StyledMainContainer;
