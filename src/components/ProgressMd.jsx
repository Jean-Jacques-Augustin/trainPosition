import React, { useRef, useEffect } from 'react';
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

    // Créez une référence pour le conteneur de défilement
    const scrollContainerRef = useRef();

    useEffect(() => {
        if (scrollContainerRef.current) {
            const scrollContainer = scrollContainerRef.current;
            const progressContainer = scrollContainer.querySelector('.stepper');

            const scrollWidth = progressContainer.offsetWidth - scrollContainer.offsetWidth;
            const scrollOffset = (currentPosition / 100) * scrollWidth;

            scrollContainer.scrollLeft = scrollOffset;
        }
    }, [currentPosition]);

    return (
        <div className="progress-lg" ref={scrollContainerRef}>
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
                <div className="train-marker" style={{ left: `${currentPosition}%` }}></div>
            </div>
            <div className="progress-bar">
                <div className="train-position" style={{ width: `${currentPosition}%` }}></div>
            </div>
        </div>
    );
};

export default ProgressLG;
