import React from 'react';

interface RandomLocationButtonProps {
  goToRandomPlace: () => void;
}

const RandomLocationButton: React.FC<RandomLocationButtonProps> = ({goToRandomPlace}) => {
    return (
        <button className='secondary-button' onClick={goToRandomPlace}>
            Take me to somwhere random
        </button>
    );
};

export default RandomLocationButton;
