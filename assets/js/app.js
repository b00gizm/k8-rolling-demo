import React from 'react';
import ReactDOM from 'react-dom';

import Service from './components/service.jsx';

require('animate.css/animate.min.css');
require('hint.css/hint.css');
require('../scss/main.scss');

document.addEventListener('DOMContentLoaded', () => {

    const conn = new WebSocket('ws://localhost:8080/ws/service');
    conn.onopen = () => {
        conn.send('ready');
    };

    conn.onmessage = (msg) => {
        render(JSON.parse(msg.data));
    };

    const render = (json) => {
        ReactDOM.render(
            <Service {...json} />,
            document.getElementById('root')
        );
    }

});
