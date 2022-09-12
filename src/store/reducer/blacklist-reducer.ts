import { ActionType } from '../types/action-types';

export interface ICounter {
  unSavedCount:number
}

const initialState = {
  unSavedCount: 0
};

export default function locationReducer (state:ICounter = initialState, action: ActionType){
  switch(action.type){
    case "UPDATE_BLACKLIST_COUNTER": {
      return {...state, unSavedCount: action.payload}
    }
    default:
      return state
  }
}

// export default function locationReducer(
//   state = initialState,
//   { type, payload }: any
// ): any {
//   switch (type) {
//     case 'SAVE_LOCATION': {
//       return { ...state, location: payload };
//     }
//     default:
//       return state;
//   }
// }
