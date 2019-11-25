import * as actionTypes from './action';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action)=> {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {...state, counter: state.counter + 1}
    case actionTypes.ADD: 
      return {...state, counter: state.counter + action.payload}
    default:
      return state;
  }
}

export default reducer;