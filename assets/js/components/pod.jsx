import React from 'react';
import classNames from 'classnames';
import { format } from '../utils';
import { BASE_URL } from '../constants';

const Pod = (props) => {
    const classes = classNames({
        pod: true,
        [props.labels.release]: true,
        term: props.status === 'Terminating',
        animated: true,
    });

    const openApp = () => {
        window.open(`http://${BASE_URL}`, '_blank');
    };

    return (
        <div className={classes} onClick={openApp}>
            <div className="avatar"></div>
            <h3><span className="hint--rounded hint--bottom" data-hint={format(props.labels)}>{props.name}</span></h3>
        </div>
    );
};

export default Pod;
