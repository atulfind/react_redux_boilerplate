import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../store/actions/counter';
import Results from '../Results';

const Counter = ({ ctr, onIncrementCounter, onAddCounter, onSubtractCounter, onDecrementCounter}) => {
  return (
    <React.Fragment>
        <div className="header">
      <button onClick={onDecrementCounter}>DECREMENT</button>
      <button onClick={onIncrementCounter}>INCREMENT</button>
      <span> {ctr}</span>
      <button onClick={onAddCounter}>ADD 10</button>
      <button onClick={onSubtractCounter}>SUBTRACT 10</button>
    </div>
     <Results/>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: counterActions.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: counterActions.DECREMENT }),
    onAddCounter: () => dispatch({ type: counterActions.ADD, payload: 10 }),
    onSubtractCounter: () => dispatch({ type: counterActions.SUBTRACT, payload: 10 }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
