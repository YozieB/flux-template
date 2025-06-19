import './styles/main.css';

import React, { FC, useState } from 'react';

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

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials }) => {
    return (
        <div className=" flex relative justify-center items-center min-h-screen">
            <div>
                <p>{'<HTML>'}</p>
                <div>
                    <h1>
                        //{firstName} {lastName}
                    </h1>
                    <div className="">
                        <p>{'<title>'}</p>
                        <p>{role}</p>
                        <p>{'<title>'}</p>
                    </div>
                    <p>{'<body>'}</p>
                </div>
                <div>
                    <div>
                        <h2>{'<EXPIRIENCE>'}</h2>
                        {experience && (
                            <ul className="">
                                {experience.map((exper) => (
                                    <li className="" key={exper.companyName + exper.role}>
                                        <h3 className="">{exper.role + ' | ' + exper.companyName}</h3>
                                        <p className="">{exper.description && exper.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2>{'<EXPIRIENCE>'}</h2>
                    </div>
                    <div>
                        <h2>{'<education>'}</h2>
                        {education && (
                            <ul className="flex flex-col gap-8">
                                {education.map((educate, index) => (
                                    <li className="" key={index}>
                                        <div className="">
                                            <h3 className="">{educate.university}</h3>
                                            <p className="">
                                                {`(${educate.dates[0].getFullYear()} — ${
                                                    educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()
                                                })`}
                                            </p>
                                        </div>
                                        <p className="">{educate.degree}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2>{'<education>'}</h2>
                    </div>
                    <div>
                        <h2>{'<contact>'}</h2>
                        {socials && (
                            <ul className="flex flex-col gap-2">
                                {socials.map((social) => (
                                    <li key={social.name} className={`text-base uppercase font-['Konstant_Grotesk']`}>
                                        <a href={social.link} target="_blank">
                                            {social.link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2>{'<contact>'}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
