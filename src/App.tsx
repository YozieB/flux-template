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
        <div className=" flex relative justify-center items-center min-h-screen bg-[#181616] text-[#ffff]">
            <div className="w-[600px]">
                <p className="text-4xl">{'<HTML>'}</p>
                <div>
                    <h1 className="text-5xl font-bold mb-2">
                        //{firstName} {lastName}
                    </h1>
                    <div className="flex text-2xl">
                        <p>{'<title>'}</p>
                        <p>{role}</p>
                        <p>{'<title>'}</p>
                    </div>
                    <p className="text-2xl">{'<body>'}</p>
                </div>
                <div>
                    <div className="mt-5">
                        <h2 className="text-2xl">{'<EXPIRIENCE>'}</h2>
                        {experience && (
                            <ul className="text-base">
                                {experience.map((exper) => (
                                    <li className="mb-" key={exper.companyName + exper.role}>
                                        <h3 className="">{'<li>' + exper.role + ' | ' + exper.companyName + '</li>'}</h3>
                                        <p className="">{exper.description && '<p>' + exper.description + '</p>'}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="text-2xl">{'<EXPIRIENCE>'}</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-2xl">{'<education>'}</h2>
                        {education && (
                            <ul className="text-base">
                                {education.map((educate, index) => (
                                    <li className="" key={index}>
                                        <div className="flex">
                                            <h3 className="">{'<li>' + educate.university}</h3>
                                            <p className="">
                                                {`(${educate.dates[0].getFullYear()} — ${
                                                    educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()
                                                }) </li>`}
                                            </p>
                                        </div>
                                        <p className="">{'<p>' + educate.degree + '</p>'}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="text-2xl">{'<education>'}</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className="text-2xl">{'<contact>'}</h2>
                        {socials && (
                            <ul className="text-base relative">
                                {socials.map((social) => (
                                    <li key={social.name} className="left1-1/4">
                                        <a href={social.link} target="_blank">
                                            {'<a href=”' + social.link + '”>' + social.name + '</a>'}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="text-2xl">{'<contact>'}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
