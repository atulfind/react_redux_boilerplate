const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return {...state, counter: state.counter + action.payload}
    case 'ADD':
      return {...state, counter: state.counter + action.payload}
    default:
      break;
  }
}


// store
const store = createStore(rootReducer);


// subscription
store.subscribe(()=> {
  console.log('[Subscription]', store.getState())
})


// dispatching action
store.dispatch({type:'INC', payload: 1})
store.dispatch({type:'ADD', payload: 10})
