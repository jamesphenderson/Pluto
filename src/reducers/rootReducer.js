import {combineReducers} from 'redux';
import {authState} from './auth/login';

export const rootReducer = combineReducers({
  isAuthenticated: authState,
});
