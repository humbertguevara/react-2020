import React from 'react';

function TestButton(props) {
    const handleClick = () => {
        props.onClickFunction(props.increment);
    }
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

export default TestButton;
