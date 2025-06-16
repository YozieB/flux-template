import React, { FC, ReactNode } from 'react';

type SectionProps = {
    children: ReactNode | ReactNode[];
    wrapperStyles?: string;
    title: string;
    orderNumber: string;
};

export const Section: FC<SectionProps> = ({ children, title, orderNumber, wrapperStyles }) => {
    return (
        <section className={wrapperStyles}>
            <div className={`text-lg flex justify-between font-['Konstant_Grotesk']`}>
                <h3>{title}</h3>
                <p>{orderNumber}</p>
            </div>
            <hr className="h-0.5 bg-neutral-200 dark:bg-neutral-700 my-1 my-25 mb-5" />
            {children}
        </section>
    );
};
