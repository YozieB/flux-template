import React, {FC, ReactNode} from "react";

type SectionProps = {
    children: ReactNode | ReactNode[];
    wrapperStyles?: string;
}

export const Section: FC<SectionProps> = ({ children, title, orderNumber, wrapperStyles }) => {


    return (
        <section className={wrapperStyles}>
            <div className='text-[9px] flex justify-between'>
                <h3>SKILLS</h3>
                <p>04</p>
            </div>
            <hr className="border-0,2px border-solid 0,2 my-1 my-25"/>
            {children}
        </section>
    )
}