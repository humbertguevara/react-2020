import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const render = () => {

    document.getElementById('root2').innerHTML = `
        <div>
            Hello HTML
            <input />
            <pre>${(new Date).toLocaleTimeString()}</pre>
        </div>`;

    ReactDOM.render(
        React.createElement(
            "div",
            null,
            "Hello React",
            React.createElement(
                'input', null
            ),
            React.createElement(
                'pre', 
                null,
                (new Date).toLocaleTimeString()
            )
        ),
        document.getElementById('root3')
    );
        }

setInterval(render, 1000)

ReactDOM.render(<App />,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
