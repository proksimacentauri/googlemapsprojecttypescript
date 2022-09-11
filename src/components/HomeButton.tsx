import React from 'react';

interface HomeButtonProps {
    goHome: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({ goHome }) => {
    return (
        <button className='primary-button' onClick={goHome}>
           Bring me back home
        </button>
    );
};

export default HomeButton;
