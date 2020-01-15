import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import styled from '@emotion/styled';

export const StyledSpinner = styled(Spinner)`
  display: block;
  margin: 0px auto;
`;

const withSpinner = (Component) => {
  const Wrapped = ({ isFetching, ...props }) => (
    isFetching ? <StyledSpinner type="grow" color="primary" /> : <Component {...props} />
  );

  Wrapped.propTypes = {
    isFetching: PropTypes.bool.isRequired,
  };

  return Wrapped;
};

export default withSpinner;
