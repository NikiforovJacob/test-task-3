import React from 'react';
import {
  Table,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import trainingTypes from '../../../../../shared/data';
import {
  StyledHeader,
  StyledTablePlug,
  StyledTable,
  StyledSortButton,
  StyledSummary,
  StyledFilterCheckGroup,
  StyledDetails,
} from '../styled';
import iconFilter from '../../../../../shared/icons/funnel.svg';

const TrainingsTable = (props) => {
  const {
    trainingsById,
    trainingsIds,
    filterByTypesConfig,
    sortBy,
    sortDerrection,
    handleOpenEditTrainingModal,
    handleSetFilterByType,
    handleSetSortBy,
  } = props;

  const renderTableBody = (tById, tIds) => tIds.map((tId) => (
    <tbody key={`${tId}`} onClick={handleOpenEditTrainingModal(tId)} onKeyDown={handleOpenEditTrainingModal(tId)}>
      <tr>
        {Object.keys(tById[tId]).map(
          (key) => (key === 'id' ? null : (<td key={`${tId}-${key}`}>{tById[tId][key]}</td>)),
        )}
      </tr>
    </tbody>
  ));

  const renderPlug = <StyledTablePlug>List is empty</StyledTablePlug>;

  const renderSortBtn = (currentSortBy) => {
    const derrectionIcon = currentSortBy === sortBy && sortDerrection === 'toLower' ? <>&#9660;</> : <>&#9650;</>;
    return (
      <StyledSortButton
        active={currentSortBy === sortBy}
        onClick={handleSetSortBy(currentSortBy)}
      >
        {derrectionIcon}
      </StyledSortButton>
    );
  };

  const renderFilterForm = (attributes) => {
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
          {attributes.map((type) => (
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

  return (
    <StyledTable>
      <StyledHeader>Trainings log</StyledHeader>
      <Table hover size="sm">
        <thead>
          <tr>
            <th>
              Date
              {renderSortBtn('date')}
            </th>
            <th>
              Type of activity
              {renderFilterForm(trainingTypes)}
            </th>
            <th>
              Distance, km
              {renderSortBtn('distance')}
            </th>
            <th>Comment</th>
          </tr>
        </thead>
        {trainingsIds.length === 0 ? null : renderTableBody(trainingsById, trainingsIds)}
      </Table>
      {trainingsIds.length === 0 ? renderPlug : null}
    </StyledTable>
  );
};

export default TrainingsTable;
