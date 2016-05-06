import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import sortBy from 'lodash.sortby';

import Pod from './pod.jsx';

const podsByVersion = (pods, version) => {
    return sortBy(pods.filter(pod => pod.labels.release === version), 'name');
};

const Service = (props) => {
    const v1Pods = podsByVersion(props.pods, 'v1');
    const v2Pods = podsByVersion(props.pods, 'v2');

    const pods = v1Pods.concat(...v2Pods);

    return (
        <div className="service">
            <div className="pods-container">
                <ReactCSSTransitionGroup
                    transitionName={ {
                        enter: 'bounceIn',
                        enterActive: 'bounceIn',
                        leave: 'bounceOut',
                        leaveActive: 'bounceOut',
                        appear: 'bounceIn',
                        appearActive: 'bounceIn'
                    } }
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    {pods.map(pod => <Pod {...pod} key={pod.uid} />)}
                </ReactCSSTransitionGroup>
            </div>
        </div>
    );
};

export default Service;
