import {combineReducers} from 'redux';
import {dummyReducer} from './dummy/dummy';

export const rootReducer = combineReducers({
  dummy: dummyReducer,
});
