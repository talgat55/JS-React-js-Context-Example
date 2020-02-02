import React from  'react';
import { useCountDispatch} from './countContext';
const Counter = () => {
    const dispatch = useCountDispatch();
    return(
        <button onClick={() => dispatch({type: 'increment'})}>
            Increment count
        </button>
    )
};
export default  Counter;
