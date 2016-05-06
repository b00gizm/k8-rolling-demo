import React from 'react';
import classNames from 'classnames';

import { BASE_URL } from '../constants';

const Pod = (props) => {
    const classes = classNames({
        pod: true,
        [props.labels.release]: true,
        term: props.status === 'Terminating',
    });

    const openApp = () => {
        window.open(`http://${BASE_URL}`, '_blank');
    };

    return (
        <div className={classes} onClick={openApp}>
            <div className="avatar"></div>
            <h3>{props.name}</h3>
        </div>
    );
};

export default Pod;