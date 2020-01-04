import { reducer as reduxFormReducer } from 'redux-form';
import mainContainerDataReducer from '../../MainContainer/redux/reducer';

export default {
  form: reduxFormReducer,
  mainContainerData: mainContainerDataReducer,
};
