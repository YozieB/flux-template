import React from 'react';
import ReactDOM from 'react-dom/client';

import { Flux } from './App';
import { mockData } from './mock-data';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* @ts-ignore */}
        <Flux {...mockData} />
    </React.StrictMode>
);
