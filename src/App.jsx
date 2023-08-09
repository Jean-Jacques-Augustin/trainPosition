import React, { useRef, useEffect } from 'react';
import ProgressLG from "./components/ProgressMd.jsx";

const App = () => {
    const stops = [
        { position: 0, name: 'Paris' },
        { position: 20, name: 'Marseille' },
        { position: 40, name: 'Lyon' },
        { position: 60, name: 'Toulouse' },
        { position: 80, name: 'Nice' },
        { position: 86, name: 'Nantes' },
        { position: 100, name: 'Strasbourg' },
    ];
    const currentPosition = 50;

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
        <div>
            <h3>Position en temps réel du train</h3>
            <div
                style={{
                    width: '800px',
                    overflowX: 'scroll',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '150px',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
                ref={scrollContainerRef} // Utilisez la référence pour le conteneur de défilement
            >
                <ProgressLG stops={stops} currentPosition={currentPosition} />
            </div>
        </div>
    );
};

export default App;
