import React from 'react';
import './ProgressLG.css';

const ProgressLG = ({ stops, currentPosition }) => {
    const totalStops = stops.length;
    const stepHeight = 100 / (totalStops - 1);

    const getCurrentStopIndex = () => {
        for (let i = 0; i < totalStops - 1; i++) {
            if (currentPosition < i * stepHeight + stepHeight / 2) {
                return i;
            }
        }
        return totalStops - 1;
    };

    const currentStopIndex = getCurrentStopIndex();
    const currentStop = stops[currentStopIndex];

    return (
        <div className="progress-sm">
            <div className="vertical-progress-bar">
                <div className="progress-track">
                    <div
                        className="train-position"
                        style={{ height: `${currentPosition}%` }}
                    ></div>
                </div>
                <div className="stops-container">
                    {stops.map((stop, index) => (
                        <div
                            key={index}
                            className={`step ${currentStopIndex === index ? 'active' : ''}`}
                            style={{ top: `${stop.position}%` }}
                        >
                            {stop.position}%<br />
                            {stop.name}
                        </div>
                    ))}
                </div>
                <div
                    className="train-marker"
                    style={{ top: `${currentPosition}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressLG;
