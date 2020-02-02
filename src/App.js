import React from 'react';
import { useCountState} from './countContext';
import Counter from './Counter';

function App() {
    const {count} = useCountState();
    return (
        <>
            <div>{`The current count is ${count}`}</div>
            <Counter/>
        </>
    )
}

export default App;
