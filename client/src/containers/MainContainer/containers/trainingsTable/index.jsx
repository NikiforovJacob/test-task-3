import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../modalCRUDTraining/redux/actions';
import * as actionsDomainData from '../../redux/actions';
import TrainingsTable from './components/TrainingsTable';
import trainingTypes from '../../../../shared/data';
import {
  tainingsAllFilteredAndSortedIdsSelector,
  tainingsByIdSelector,
  tainingsFilterByTypesSelector,
  tainingsSortBySelector,
  tainingsSortDerrectionSelector,
} from '../../redux/selectors';

const TrainingsTableContainer = (props) => {
  const {
    trainingsById,
    trainingsIds,
    openEditTrainingModal,
    filterByTypesConfig,
    sortBy,
    sortDerrection,
  } = props;

  const handleSetFilterByType = (e) => {
    const { setFilterByType } = props;
    const filterByTypes = { ...filterByTypesConfig, [e.target.name]: e.target.checked };
    setFilterByType({ filterByTypes });
  };

  const handleSetSortBy = (sortByNew) => () => {
    const { setSort } = props;
    const rewerseSortDerrection = (sortDerrection === 'toLower' ? 'toHigher' : 'toLower');
    const sortDerrectionNew = (sortByNew === sortBy ? rewerseSortDerrection : 'toLower');
    setSort({ sortBy: sortByNew, sortDerrection: sortDerrectionNew });
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
      sortDerrection={sortDerrection}
      handleOpenEditTrainingModal={handleOpenEditTrainingModal}
      handleSetFilterByType={handleSetFilterByType}
      handleSetSortBy={handleSetSortBy}
      filterAttributes={trainingTypes}
    />
  );
};

const actionCreators = {
  openEditTrainingModal: actions.openEditTrainingModal,
  setFilterByType: actionsDomainData.setFilterByType,
  setSort: actionsDomainData.setSort,
};

const mapStateToProps = (state) => ({
  trainingsById: tainingsByIdSelector(state),
  trainingsIds: tainingsAllFilteredAndSortedIdsSelector(state),
  filterByTypesConfig: tainingsFilterByTypesSelector(state),
  sortBy: tainingsSortBySelector(state),
  sortDerrection: tainingsSortDerrectionSelector(state),
});

TrainingsTableContainer.propTypes = {
  trainingsById: PropTypes.objectOf(PropTypes.object).isRequired,
  trainingsIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByTypesConfig: PropTypes.objectOf(PropTypes.bool).isRequired,
  sortBy: PropTypes.string.isRequired,
  sortDerrection: PropTypes.string.isRequired,
  openEditTrainingModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actionCreators)(TrainingsTableContainer);
