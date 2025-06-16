import React, {FC, ReactNode} from "react";

type circleProps = {
    color: string,
    wrapperStyles: string
}


export const Circle: FC <circleProps> = ({color, wrapperStyles}) =>
    color === 'bg-[#722a9b]' ? <div > <div className='bg-[#FFB800] blur-3xl h-[550px] w-[500px] rounded-full absolute top-[48%] left-[-150px]'/><div className={`${color} ${wrapperStyles}`}/></div> : <div className={`${color} ${wrapperStyles}`}/>



