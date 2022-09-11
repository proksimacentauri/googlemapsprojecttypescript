import React from 'react';

interface AppProps {
    clearList: () => void;
}

const App: React.FC<AppProps> = ({ clearList }) => {
    return (
        <button className='primary-button' onClick={clearList}>
            Clear List
        </button>
    );
};

export default App;
