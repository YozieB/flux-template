import React, { FC } from 'react';
import circleImage from '@/assets/circle.svg';

type CircleProps = {
    color: 'yellow' | 'orange' | 'purple';
};

const circleColors: Record<CircleProps['color'], string> = {
    orange: '#FFB800',
    purple: '#722a9b',
    yellow: '#F0E04B',
};

export const Circle: FC<CircleProps> = ({ color }) => {
    console.log(color);
    if (color === 'purple') {
        return (
            <img
                src={circleImage}
                alt="circle"
                className={`blur-3xl absolute left-[-250px] h-[500px] w-[500px] top-1/2 -translate-y-1/2`}
                style={{ background: circleColors[color] }}
            />
        );
    }

    return (
        <div
            className={`blur-3xl absolute left-[-250px] h-[500px] w-[500px] top-1/2 -translate-y-1/4 rounded-full`}
            style={{ background: circleColors[color] }}
        />
    );
};
