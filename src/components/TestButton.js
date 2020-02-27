import React, { useState } from 'react';

function TestButton(props) {
    
    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>
    );
}

export default TestButton;
