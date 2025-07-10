import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials, skills, languages, hobbies }) => {
    return (
        <div className="flex relative justify-center items-center min-h-screen bg-[#141414] py-24 text-[#94BA81]">
            <div className="w-[600px]">
                <div className="flex justify-between py-12 ">
                    <div>
                        <h1>
                            {firstName} {lastName}
                        </h1>
                        <p>{role}</p>
                    </div>
                    <div>
                        <div className="flex">
                            <ul className="flex">
                                <li>sdfsd</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>
                        {!!experience?.length && (
                            <ul>
                                <h2>Expirience</h2>
                                {experience.map((exp) => {
                                    return (
                                        <li>
                                            <h3>
                                                {exp.companyName} / {exp.role}
                                            </h3>
                                            <p></p>
                                            <p>{exp.description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
