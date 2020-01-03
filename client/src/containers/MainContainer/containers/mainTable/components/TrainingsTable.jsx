import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import * as actions from '../../modalCRUDTraining/redux/actions';

const actionCreators = {
  openEditTrainingModal: actions.openEditTrainingModal,
};

const mapStateToProps = (state) => {
  const { mainContainerData: { domainData: { trainings: { byId, allIds } } } } = state;
  return {
    trainingsById: byId,
    trainingsIds: allIds,
  };
};

const TrainingsTable = (props) => {
  const { trainingsById, trainingsIds, openEditTrainingModal } = props;

  const handleOpenEditTrainingModal = (editableTrainingId) => () => {
    openEditTrainingModal({ editableTrainingId });
  };

  const renderTableBody = (tById, tIds) => tIds.map((tId) => (
    <tbody key={`${tId}`} onClick={handleOpenEditTrainingModal(tId)} onKeyDown={handleOpenEditTrainingModal(tId)}>
      <tr>
        {Object.keys(tById[tId]).map(
          (key) => (key === 'id' ? null : (<td key={`${tId}-${key}`}>{tById[tId][key]}</td>)),
        )}
      </tr>
    </tbody>
  ));

  const renderGug = <div>List is empty</div>;

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Type of activity</th>
          <th>Distance, km</th>
          <th>Comment</th>
        </tr>
      </thead>
      {trainingsIds.length === 0 ? renderGug : renderTableBody(trainingsById, trainingsIds)}
    </Table>
  );
};

export default connect(mapStateToProps, actionCreators)(TrainingsTable);
