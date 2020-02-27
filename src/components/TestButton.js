import React, { useState } from 'react';

function TestButton(props) {

    const[counter, setCounter] = useState(0); // use of JS array destructuring functionality

    return (
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    );
}

export default TestButton;
