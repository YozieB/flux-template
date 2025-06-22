import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';
import { Tag } from '@/components/tag';
import { Section } from '@/components/section';

// TODO: Вынести все теги в компонент Tag
// TODO: Добавить закрывающие body, html
// TODO: цвета в переменные
// TODO: убрать везде relative и left, использовать паддинги
// TODO: добавить блок с языками, name - li, level - p
// TODO: добавить блок со skills, все лишками делаем
// TODO: добавить блок с hobbies, все лишками делаем
// TODO: добавить даты в experience блок (только года)
// TODO: использовать для всех блоков компонент Section

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials }) => {
    return (
        <div className="flex relative justify-center items-center min-h-screen bg-[#181616] py-24">
            <div className="w-[650px] text-default">
                <p className="text-4xl">{'<HTML>'}</p>
                <div>
                    <h1 className="text-5xl font-bold mb-2 text-title">
                        //{firstName} {lastName}
                    </h1>
                    <div className="flex text-2xl">
                        <Tag tag="p">title</Tag>
                        <p className="text-white">{role}</p>
                        <Tag tag="p">/title</Tag>
                    </div>
                    <Tag tag="p" wrapperClassNames="text-2xl">
                        body
                    </Tag>
                </div>
                {!!experience?.length && (
                    <Section title="experience">
                        {experience.map((exper) => (
                            <li key={exper.companyName + exper.role}>
                                <div className="flex">
                                    <Tag tag="span">li</Tag>
                                    <span className="text-title">
                                        {exper.role} | {exper.companyName}
                                    </span>
                                    <Tag tag="p">/li</Tag>
                                </div>
                                {exper.description && (
                                    <p className="flex">
                                        <Tag tag="span">p</Tag>
                                        <span className="text-white">
                                            {exper.description}
                                            <Tag wrapperClassNames="inline text-default" tag="span">
                                                /p
                                            </Tag>
                                        </span>
                                    </p>
                                )}
                            </li>
                        ))}
                    </Section>
                )}
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
    );
};
