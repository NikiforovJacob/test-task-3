import * as R from 'ramda';

let trainings = {
  byId: {
    3: {
      id: 3,
      date: '2019-12-02',
      trainingType: 'Running',
      distance: '4.3',
      comment: 'fe',
    },
    2: {
      id: 2,
      date: '2020-01-01',
      trainingType: 'Cycling',
      distance: '10.8',
      comment: 'fe',
    },
    1: {
      id: 1,
      date: '2019-12-29',
      trainingType: 'Swimming',
      distance: '0.5',
      comment: 'fe',
    },
  },
  allIds: [3, 2, 1],
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
