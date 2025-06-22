import './styles/main.css';

import React, { FC, useState } from 'react';

import { TemplateProps } from './types';

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials }) => {
    return (
        <div className=" flex relative justify-center items-center min-h-screen bg-[#181616] text-[#ffff]">
            <div className="w-[600px] text-[#696969]">
                <p className="text-4xl ">{'<HTML>'}</p>
                <div>
                    <h1 className="text-5xl font-bold mb-2 text-[#3DFFDB]">
                        //{firstName} {lastName}
                    </h1>
                    <div className="flex text-2xl">
                        <p>{'<title>'}</p>
                        <p className="text-[#FFFFFF]">{role}</p>
                        <p>{'<title>'}</p>
                    </div>
                    <p className="text-2xl">{'<body>'}</p>
                </div>
                <div className="">
                    <div className="mt-5">
                        <h2 className="relative left-7 mb-2 text-2xl first-letter:text-[#696969] text-[#0094FF]">
                            {'<experience'}
                            <span className="text-[#696969]">{'>'}</span>
                        </h2>
                        {experience && (
                            <ul className="relative left-16 text-base">
                                {experience.map((exper) => (
                                    <li className="mb-5" key={exper.companyName + exper.role}>
                                        <h3 className="">
                                            {'<li>'}{' '}
                                            <span className="text-[#3DFFDB]">
                                                {exper.role}|{exper.companyName}
                                            </span>{' '}
                                            {'</li>'}
                                        </h3>
                                        {exper.description && (
                                            <p className="-indent-8 relative left-8">
                                                {'<p>'} <span className="text-[#FFFF]">{exper.description}</span>
                                                {'</p>'}
                                            </p>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="relative left-7 bottom-4 text-2xl ">{'<experience>'}</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className="relative left-7 text-2xl mb-2 first-letter:text-[#696969] text-[#0094FF]">
                            {'<education'}
                            <span className="text-[#696969]">{'>'}</span>
                        </h2>
                        {education && (
                            <ul className="relative left-16 text-base">
                                {education.map((educate, index) => (
                                    <li className="" key={index}>
                                        <div className="flex">
                                            <h3>
                                                {'<li>'}
                                                <span className="text-[#3DFFDB]">{educate.university}</span>
                                            </h3>
                                            <p className="text-[#3DFFDB]">
                                                {`(${educate.dates[0].getFullYear()} — ${
                                                    educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()
                                                })`}
                                                <span className="text-[#696969]">{'</li>'}</span>
                                            </p>
                                        </div>
                                        <p className="-indent-8 relative left-8">
                                            {'<p>'}
                                            <span className="text-[#FFFF]">{educate.degree}</span>
                                            {'</p>'}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="relative left-7 text-2xl">{'<education>'}</h2>
                    </div>
                    <div className="mt-5">
                        <h2 className="relative left-7 text-2xl first-letter:text-[#696969] text-[#0094FF]">
                            {'<contact'}
                            <span className="text-[#696969]">{'>'}</span>
                        </h2>
                        {socials && (
                            <ul className="text-base relative left-16">
                                {socials.map((social) => (
                                    <li key={social.name} className="left1-1/4">
                                        <a href={social.link} target="_blank">
                                            {'<a href=”'}
                                            <span className="text-[#ffff]">{social.link}</span>
                                            {'”>'}
                                            <span className="text-[#3DFFDB]">{social.name}</span>
                                            {'</a>'}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h2 className="relative left-7 text-2xl">{'<contact>'}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
