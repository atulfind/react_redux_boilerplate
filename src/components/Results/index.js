import React from 'react';
import {connect} from 'react-redux';
import * as resultActions from '../../store/actions/result';

const Results = ({res, ctr, onStoreResult, onDeleteResult}) => {

  return (
   <div className="results">
     <button onClick={()=> onStoreResult(ctr)}>Add to The Result</button>
     {
       res.length > 0 &&
       <ul>
       {
         res.map((result, index)=> {
          return(
            <li key={index} onClick={()=> onDeleteResult(result.id)}>{result.value}</li>
          )
        })
       }
      </ul>
     }
   </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    res: state.res.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (result) => dispatch({ type: resultActions.STORE_RESULT, payload: result }),
    onDeleteResult: (result) => dispatch({ type: resultActions.DELETE_RESULT, payload: result })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
