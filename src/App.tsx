import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';

const beautifyDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric',
        era: undefined,
    });
    const monthYear = formatter.format(new Date(date)).replace(' г.', '');

    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
};

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials, skills, languages, hobbies }) => {
    return (
        <div className="flex relative justify-center items-center min-h-screen bg-[#141414] py-24 text-[#94BA81] font-[Press_Start_2P]">
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
                                <li className="font-[Press_Start_2P]">sdfsd</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-11">
                    <div>
                        {!!experience?.length && (
                            <ul>
                                <h2>Expirience</h2>
                                {experience.map((exp) => {
                                    return (
                                        <li key={exp.companyName + '_' + exp.role} className="pt-6">
                                            <h3 className="pb-2">
                                                {exp.companyName} / {exp.role}
                                            </h3>
                                            <p className="pb-3">
                                                {beautifyDate(exp.dates[0])} - {beautifyDate(exp.dates[1])}
                                            </p>
                                            <p>{exp.description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <div>
                        {!!education?.length && (
                            <ul>
                                <h2>Education</h2>
                                {education.map((educate, index) => {
                                    return (
                                        <li key={index} className="pt-6">
                                            <p>
                                                {educate.university} / {educate.degree}
                                            </p>
                                            <p>
                                                {educate.dates[0].getFullYear()} - {educate.dates[1].getFullYear()}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {!!skills?.length && (
                            <ul className=" ">
                                <h2 className="py-6">Skills</h2>
                                <div className="grid grid-cols-2 gap-2">
                                    {skills.map((skill) => {
                                        return <li className="">{skill}</li>;
                                    })}
                                </div>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
