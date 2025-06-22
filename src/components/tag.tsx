import React, { FC, ReactNode } from 'react';
import { JSX } from 'react/jsx-runtime';
import IntrinsicElements = JSX.IntrinsicElements;

type TagProps = {
    titleClassNames?: string;
    wrapperClassNames?: string;
    tag: keyof IntrinsicElements;
    children: ReactNode | ReactNode[];
};

export const Tag: FC<TagProps> = ({ titleClassNames, wrapperClassNames, tag, children }) => {
    return React.createElement(
        tag,
        { className: wrapperClassNames },
        '<',
        React.createElement('span', { className: titleClassNames }, children),
        '>'
    );
};
