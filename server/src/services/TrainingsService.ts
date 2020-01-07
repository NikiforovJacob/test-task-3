import * as R from 'ramda';

let trainings = {
  byId: { 
    13: { id: 13, date: '2019-12-12', trainingType: 'Running', distance: '3.3', comment: 'fe' },
    12: { id: 12, date: '2019-10-02', trainingType: 'Cycling', distance: '20.3', comment: 'fe' },
    11: { id: 11, date: '2019-11-08', trainingType: 'Cycling', distance: '18.3', comment: 'fe' },
    10: { id: 10, date: '2019-09-02', trainingType: 'Cycling', distance: '19.3', comment: 'fe' },
    9: { id: 9, date: '2019-09-12', trainingType: 'Walking', distance: '12.3', comment: 'fe' },
    8: { id: 8, date: '2019-10-02', trainingType: 'Walking', distance: '8.8', comment: 'fe' },
    7: { id: 7, date: '2019-11-02', trainingType: 'Walking', distance: '3.6', comment: 'fe' },
    6: { id: 6, date: '2019-09-05', trainingType: 'Running', distance: '6.3', comment: 'fe' },
    5: { id: 5, date: '2019-10-24', trainingType: 'Running', distance: '2.8', comment: 'fe' },
    4: { id: 4, date: '2019-11-11', trainingType: 'Running', distance: '5.0', comment: 'fe' },
    3: { id: 3, date: '2019-09-02', trainingType: 'Skiing', distance: '10.3', comment: 'fe' },
    2: { id: 2, date: '2019-10-22', trainingType: 'Skiing', distance: '12.3', comment: 'fe' },
    1: { id: 1, date: '2019-11-16', trainingType: 'Skiing', distance: '11.3', comment: 'fe' },
  },
  allIds: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
}

class TrainingsService {

  public static getTrainings() {
    return trainings.byId;
  }

  public static addTraining(training) {
    const newTrainingId = trainings.allIds[0] + 1;
    trainings.allIds = [newTrainingId, ...trainings.allIds];
    trainings.byId = { [newTrainingId]: { id: newTrainingId, ...training }, ...trainings.byId};
    return trainings.byId[newTrainingId];
  }

  public static editTraining(training) {
    trainings.byId = { ...trainings.byId, [training.id]: training };
    return true;
  }

  public static deleteTraining(id) {
    trainings.byId = R.omit([id], trainings.byId);
    trainings.allIds = R.without([id], trainings.allIds);
    return true;
  }
}

export default TrainingsService;