import { ActionType } from '../types/action-types';

export interface ICounter {
  savedCount: number;
}

const initialState = {
  savedCount: 0,
};

export default function locationReducer (state:ICounter = initialState, action: ActionType){
  switch(action.type){
    case "UPDATE_WHITELIST_COUNTER": {
      return {...state, savedCount: action.payload}
    }
    
    default:
      return state
  }
}
