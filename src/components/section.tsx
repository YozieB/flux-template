import { Tag } from '@/components/tag';
import React, { FC, ReactNode } from 'react';

type SectionProps = {
    title: string;
    haveGap?: boolean;
    children: ReactNode | ReactNode[];
};

export const Section: FC<SectionProps> = ({ title, children, haveGap = true }) => {
    return (
        <div className="mt-5">
            <Tag tag="h2" titleClassNames="text-tag" wrapperClassNames="pl-7 mb-2 text-2xl">
                {title}
            </Tag>

            <ul className={`pl-16 text-base flex flex-col ${haveGap ? 'gap-5' : 'gap-0'}`}>{children}</ul>

            <Tag tag="div" wrapperClassNames="pl-7 mb-2 text-2xl">
                /{title}
            </Tag>
        </div>
    );
};
