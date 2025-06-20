import React from 'react';

export const Grain = () => {
    return (
        <div
            className={`absolute left-0 right-0 bottom-0 top-0 pointer-events-none opacity-10`}
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
                backgroundSize: '240px',
            }}
        />
    );
};
