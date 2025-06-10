import React, {FC, ReactNode} from "react";

type circleProps = {
    color: string
}

export const Circle: FC <circleProps> = ({color}) => {
    const circleColors = {
    orange: '#FFB800',
    purple: '',
    yellow: '#F0E04B'
}

    return <div className={`bg-[]  [#F0E04B] blur-2xl z-0 h-[300px] w-[300px] rounded-full absolute top-1/2 left-[-150px]`}/>
}

