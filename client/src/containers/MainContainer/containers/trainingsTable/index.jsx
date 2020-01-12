import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actionsCRUDTrainings from '../modalCRUDTraining/redux/actions';
import * as actions from './redux/actions';
import TrainingsTable from './components/TrainingsTable';
import trainingTypes from '../../../../shared/data';
import {
  trainingsByIdSelector,
  isFetchingSelector,
} from '../../redux/selectors';
import {
  trainingsAllFilteredAndSortedIdsSelector,
  trainingsFilterByTypesSelector,
  trainingsSortBySelector,
  trainingsSortDirectionSelector,
} from './redux/selectors';

const TrainingsTableContainer = (props) => {
  const {
    trainingsById,
    trainingsIds,
    openEditTrainingModal,
    filterByTypesConfig,
    sortBy,
    sortDirection,
    isFetching,
  } = props;

  const handleSetFilterByType = (e) => {
    const { setFilterByType } = props;
    const filterByTypes = { ...filterByTypesConfig, [e.target.name]: e.target.checked };
    setFilterByType({ filterByTypes });
  };

  const handleSetSortBy = (sortByNew) => () => {
    const { setSort } = props;
    const reverseSortDirection = (sortDirection === 'toLower' ? 'toHigher' : 'toLower');
    const sortDirectionNew = (sortByNew === sortBy ? reverseSortDirection : 'toLower');
    setSort({ sortBy: sortByNew, sortDirection: sortDirectionNew });
  };

  const handleOpenEditTrainingModal = (editableTrainingId) => () => {
    openEditTrainingModal({ editableTrainingId });
  };

  return (
    <TrainingsTable
      trainingsById={trainingsById}
      trainingsIds={trainingsIds}
      filterByTypesConfig={filterByTypesConfig}
      sortBy={sortBy}
      sortDirection={sortDirection}
      handleOpenEditTrainingModal={handleOpenEditTrainingModal}
      handleSetFilterByType={handleSetFilterByType}
      handleSetSortBy={handleSetSortBy}
      filterAttributes={trainingTypes}
      isFetching={isFetching}
    />
  );
};

const actionCreators = {
  openEditTrainingModal: actionsCRUDTrainings.openEditTrainingModal,
  setFilterByType: actions.setFilterByType,
  setSort: actions.setSort,
};

const mapStateToProps = (state) => ({
  trainingsById: trainingsByIdSelector(state),
  trainingsIds: trainingsAllFilteredAndSortedIdsSelector(state),
  filterByTypesConfig: trainingsFilterByTypesSelector(state),
  sortBy: trainingsSortBySelector(state),
  sortDirection: trainingsSortDirectionSelector(state),
  isFetching: isFetchingSelector(state),
});

TrainingsTableContainer.propTypes = {
  trainingsById: PropTypes.objectOf(PropTypes.object).isRequired,
  trainingsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByTypesConfig: PropTypes.objectOf(PropTypes.bool).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDirection: PropTypes.string.isRequired,
  openEditTrainingModal: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actionCreators)(TrainingsTableContainer);
