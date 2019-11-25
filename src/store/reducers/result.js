import * as actionTypes from '../actions/result';

const initialState = {
  result: []
}

const reducer = (state = initialState, action)=> {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {...state, result: [{id: new Date(), value: action.payload}, ...state.result]}
    case actionTypes.DELETE_RESULT:
      const filtered = state.result.filter(result => result.id !== action.payload)
      return {...state, result: filtered}
    default:
      return state;
  }
}

export default reducer;