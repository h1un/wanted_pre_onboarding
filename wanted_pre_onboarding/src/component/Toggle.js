import React, {useState} from 'react';
import './../App.css';
import './Toggle.css';

const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);

    const onToggle = () => {
        setIsToggled(!isToggled);
    };

    const toggleChecked = isToggled ? 'ON' : 'OFF';

    return (
        <div className="wrapper ">
            <h2>Toggle</h2>
            <div className="content">
                <label className="switch">
                    <input type="checkbox" onClick={() => onToggle()}/>
                    <span className="slider"></span>
                </label>
                <p>Toggle Switch {toggleChecked}</p>
            </div>
        </div>
    )
};

export default Toggle;
