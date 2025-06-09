import React, {FC, ReactNode} from "react";


type SectionProps = {
    children: ReactNode | ReactNode[];
    wrapperStyles?: string;
    title: string
    orderNumber: string
}

export const Section: FC<SectionProps> = ({ children, title, orderNumber, wrapperStyles }) => {


    return (
        <section className={wrapperStyles}>
            <div className={`text-[9px] flex justify-between font-['Konstant_Grotesk']`}>
                <h3>{title}</h3>
                <p>{orderNumber}</p>
            </div>
            <hr className="border-0,2px border-solid 0,2 my-1 my-25"/>
            {children}
        </section>
    )
}