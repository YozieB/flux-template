import React , {FC, ReactNode} from "react";

type grainbackgroundProps = {
    grain: boolean,
    wrapperStyles: string
}

export const GrainBackground: FC<grainbackgroundProps> = ({grain, wrapperStyles}) => {
        return<div className = {wrapperStyles}/>}