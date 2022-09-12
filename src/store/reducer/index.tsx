import { combineReducers } from 'redux';
import whiteListReducer from './whitelist-reducer';
import blackListReducer from './blacklist-reducer'

const rootReducer = combineReducers({
  savedCounter: whiteListReducer,
  unSavedCounter: blackListReducer,
});

export default rootReducer;