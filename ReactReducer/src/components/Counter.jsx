import React, { useReducer } from 'react';

// initial state
const initialState = { count: 0 };

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Counter: {state.count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => dispatch({ type: 'increment' })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => dispatch({ type: 'decrement' })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;