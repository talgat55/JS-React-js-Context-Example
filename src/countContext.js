import React, {createContext, useReducer} from 'react'

const CountStateContext = createContext();
const CountDispatchContext = createContext();

const countReducer = (state, action) => {
    switch (action.type) {
        case 'increment': {
            return {count: state.count + 1}
        }
        case 'decrement': {
            return {count: state.count - 1}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
};


export default function CountProvider({children}) {

    const [state, dispatch] = useReducer(countReducer, {count: 0});

    return (
        <CountStateContext.Provider value={state}>
            <CountDispatchContext.Provider value={dispatch}>
                {children}
            </CountDispatchContext.Provider>
        </CountStateContext.Provider>
    )
}

const useCountState = () => {
    const context = React.useContext(CountStateContext);
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
};

const useCountDispatch = () => {
    const context = React.useContext(CountDispatchContext);
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
};
export {useCountDispatch, useCountState};
