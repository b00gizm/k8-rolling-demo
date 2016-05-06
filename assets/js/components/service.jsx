import React from 'react';
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
                {pods.map(pod => <Pod {...pod} key={pod.uid} />)}
            </div>
        </div>
    );
};

export default Service;
