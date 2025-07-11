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
        <div className="flex relative justify-center items-center min-h-screen bg-[#141414] py-24 text-[#94BA81]">
            <div className="w-[1000px]">
                <div className="flex justify-between py-12 ">
                    <div>
                        <h1 className="text-3xl">
                            {firstName} {lastName}
                        </h1>
                        <p className="text-xl opacity-40">{role}</p>
                    </div>
                    <div>
                        {!!socials?.length && (
                            <ul className="grid grid-cols-3 divide-x divide-solid divide-[#94BA81]">
                                {socials.map((social) => {
                                    return (
                                        <li key={social.link} className="px-3">
                                            <a target="_blank" href={social.link}>
                                                {social.name} <img src="./assets/Vector.svg" alt="" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-[80px] pt-11">
                    <div>
                        {!!experience?.length && (
                            <ul>
                                <h2 className="text-lg opacity-40">Expirience</h2>
                                {experience.map((exp) => {
                                    return (
                                        <li key={exp.companyName + '_' + exp.role} className="pt-11">
                                            <h3 className="pb-4">
                                                {exp.companyName} / {exp.role}
                                            </h3>
                                            <p className="pb-10 opacity-40">
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
                                <h2 className="text-lg">Education</h2>
                                {education.map((educate, index) => {
                                    return (
                                        <li key={index} className="pt-11">
                                            <p>
                                                {educate.university} / {educate.degree}
                                            </p>
                                            <p className="opacity-40">
                                                {educate.dates[0].getFullYear()} - {educate.dates[1].getFullYear()}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {!!skills?.length && (
                            <ul className=" ">
                                <h2 className="text-lg pt-12 opacity-40">Skills</h2>
                                <div className="grid grid-cols-2 gap-4 pt-6">
                                    {skills.map((skill, index) => {
                                        return <li key={index}>{skill}</li>;
                                    })}
                                </div>
                            </ul>
                        )}
                        {!!languages?.length && (
                            <ul className="pt-12">
                                <h2 className="text-lg opacity-40">Languages</h2>
                                {languages.map((language) => {
                                    return (
                                        <li key={language.name + '_' + language.level} className="pt-6">
                                            <p>{language.name}</p>
                                            <p className="opacity-40">{language.level}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
