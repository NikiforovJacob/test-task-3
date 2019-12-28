import { reducer as reduxFormReducer } from 'redux-form';
import mainContainerDataReducer from '../../MainContainer/Redux/reducer';

export default {
  form: reduxFormReducer,
  mainContainerData: mainContainerDataReducer,
};
