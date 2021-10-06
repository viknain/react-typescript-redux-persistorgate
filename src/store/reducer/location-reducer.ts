import { Location } from '../../shared/utils/types';
import { LocationTypes } from '../types/location-types';

export interface ILocation {
  location: Location;
}

const initialState = {
  location: {},
};

// export default function locationReducer (state:ILocation = initialState, action: LocationTypes){
//   switch(action.type){
//     case "SAVE_LOCATION": {
//         debugger
//       return {...state, location: action.payload}
//     }
//     default:
//       return state
//   }
// }

export default function locationReducer(
  state = initialState,
  { type, payload }: any
): any {
  switch (type) {
    case 'SAVE_LOCATION': {
      debugger;
      return { ...state, location: payload };
    }
    default:
      return state;
  }
}
