import React from 'react';
import './ProgressLG.css';

const ProgressLG = ({ stops, currentPosition }) => {
    const totalStops = stops.length;
    const stepWidth = 100 / (totalStops - 1);

    const getCurrentStopIndex = () => {
        for (let i = 0; i < totalStops - 1; i++) {
            if (currentPosition < i * stepWidth + stepWidth / 2) {
                return i;
            }
        }
        return totalStops - 1;
    };

    const currentStopIndex = getCurrentStopIndex();
    const currentStop = stops[currentStopIndex];

    return (
        <div className="progress-lg">
            <div className="stepper">
                {stops.map((stop, index) => (
                    <div
                        key={index}
                        className={`step ${currentStopIndex === index ? 'active' : ''}`}
                        style={{ left: `${stop.position}%` }}
                    >
                        {stop.position}%<br />
                        {stop.name}
                    </div>
                ))}
                <div
                    className="train-marker"
                    style={{ left: `${currentPosition}%` }}
                ></div>
            </div>
            <div className="progress-bar">
                <div className="train-position" style={{ width: `${currentPosition}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressLG;
