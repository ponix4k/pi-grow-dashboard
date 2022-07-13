import React, { useState } from 'react';

import './Probe.css';

function ProbeCard (props){
const [pumpState, togglePump] = useState(false);
  return (
        <div className="probe-border">
          <div className="probe">
            <div className="probe-label">{props.name}</div>
            <div className={`moisture-${props.moistlevel}`}>{props.hertz}</div>
            <div className="moisture-slider"/>
            <button className="flush-pump" onClick={() => {
              togglePump(!pumpState)
              console.log(props.name + " : " + pumpState);
              }}> Toggle Pump</button>
            <div className="probe-bottom"/>
          </div>
        </div>
    );
}

export default ProbeCard;
