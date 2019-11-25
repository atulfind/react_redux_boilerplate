import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';

const Counter = ({ res, ctr, onIncrementCounter, onAddCounter, onSubtractCounter, onDecrementCounter, onStoreResult, onDeleteResult }) => {
  return (
    <div>
      <button onClick={onDecrementCounter}>DECREMENT</button>
      <button onClick={onIncrementCounter}>INCREMENT</button>
     
      <span> {ctr}</span>
      <button onClick={onAddCounter}>ADD 10</button>
      <button onClick={onSubtractCounter}>SUBTRACT 10</button>
      <hr />
      <button onClick={()=> onStoreResult(ctr)}>Store Result</button>
      <ul>
        {
          res.map((result, index) => {
            return (
              <li key={result.id} onClick={()=> onDeleteResult(result.id)}>{result.value}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ctr: state.ctr.counter,
    res: state.res.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, payload: 10 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, payload: 10 }),
    onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, payload: result }),
    onDeleteResult: (result) => dispatch({ type: actionTypes.DELETE_RESULT, payload: result })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
