import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import currentUser from './currentUser';

export default combineReducers({
  router: routerReducer,
  currentUser,
});
