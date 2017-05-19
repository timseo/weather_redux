import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
      // return state.concat([action.payload.data])
      //bottom line inside of array is identical to line above it is es6
      return [ action.payload.data, ...state ]

  }
  return state
}
