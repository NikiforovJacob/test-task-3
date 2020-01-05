import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';
import { StyledSummary, StyledFilterCheckGroup, StyledDetails } from '../styled';
import iconFilter from '../../../../../shared/icons/funnel.svg';

const FilterDropdownMenu = (props) => {
  const {
    filterByTypesConfig,
    handleSetFilterByType,
    filterAttributes,
  } = props;

  const isFilterActive = !Object.keys(filterByTypesConfig).reduce(
    (acc, type) => (acc && filterByTypesConfig[type]), true,
  );
  return (
    <StyledDetails>
      <StyledSummary active={isFilterActive}>
        <img
          src={iconFilter}
          alt="filter icon"
          height="17px"
          width="17px"
        />
      </StyledSummary>
      <StyledFilterCheckGroup>
        {filterAttributes.map((type) => (
          <FormGroup check key={type}>
            <Label htmlFor={type} check>
              <Input onChange={handleSetFilterByType} checked={filterByTypesConfig[type]} name={type} id={type} type="checkbox" />
              {type}
            </Label>
          </FormGroup>
        ))}
      </StyledFilterCheckGroup>
    </StyledDetails>
  );
};

FilterDropdownMenu.propTypes = {
  filterByTypesConfig: PropTypes.objectOf(PropTypes.bool).isRequired,
  handleSetFilterByType: PropTypes.func.isRequired,
  filterAttributes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterDropdownMenu;
