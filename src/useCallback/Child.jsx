import React, { useState } from 'react';
import useCountRenders from './useCountRenders';

const Child = React.memo(
  ({ increment, incrementNumber, setIncrementNumber }) => {
    useCountRenders();
    return (
      <>
        <button onClick={() => increment(incrementNumber)}>
          Increment by
          <input
            type='number'
            value={incrementNumber}
            onChange={(e) => {
              setIncrementNumber(e.target.valueAsNumber);
            }}
          />
        </button>
      </>
    );
  }
);

export default Child;
