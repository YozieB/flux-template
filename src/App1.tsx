import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';
import { Tag } from '@/components/tag';
import { Section } from '@/components/section';

// TODO: Вынести все теги в компонент Tag d
// TODO: Добавить закрывающие body, html d
// TODO: цвета в переменные d
// TODO: убрать везде relative и left, использовать паддинги d
// TODO: добавить блок с языками, name - li, level - p d
// TODO: добавить блок со skills, все лишками делаем d
// TODO: добавить блок с hobbies, все лишками делаем
// TODO: добавить даты в experience блок (только года) d
// TODO: использовать для всех блоков компонент Section d

export const Flux: FC<TemplateProps> = ({ firstName, lastName, role, experience, education, socials, skills, languages, hobbies }) => {
    return (
        <div className="flex relative justify-center items-center min-h-screen bg-[#181616] py-24">
            <div className="w-[650px] text-default">
                <Tag tag="p" wrapperClassNames="text-4xl">
                    HTML
                </Tag>
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
                {!!skills?.length && (
                    <Section haveGap={false} title="skills">
                        <div className="grid grid-cols-2">
                            {skills.map((skill) => (
                                <li key={skill} className="flex">
                                    <Tag tag="p">li</Tag>
                                    <p className="text-title">
                                        {skill}
                                        <Tag tag="span" wrapperClassNames="text-default">
                                            /li
                                        </Tag>
                                    </p>
                                </li>
                            ))}
                        </div>
                    </Section>
                )}
                {!!languages?.length && (
                    <Section haveGap={false} title="languages">
                        {languages.map((language) => (
                            <li className="flex">
                                <div className="flex">
                                    <Tag tag="p">li</Tag>
                                    <p className="text-title">
                                        {language.name}
                                        <Tag tag="span" wrapperClassNames="text-default">
                                            /li
                                        </Tag>
                                    </p>
                                </div>
                                <div className="flex">
                                    <Tag tag="p">p</Tag>
                                    <p className="text-white">
                                        {language.level}
                                        <Tag tag="span" wrapperClassNames="text-default">
                                            /p
                                        </Tag>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </Section>
                )}
                {!!experience?.length && (
                    <Section title="experience">
                        {experience.map((exper) => (
                            <li key={exper.companyName + exper.role}>
                                <div className="flex">
                                    <Tag tag="span">li</Tag>
                                    <span className="text-title">
                                        {exper.role} | {exper.companyName}
                                        {' ( ' + exper.dates[0].getFullYear() + '-' + exper.dates[1].getFullYear() + ' )'}
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
                {!!education?.length && (
                    <Section title="education">
                        {education.map((educate, index) => (
                            <li className="" key={index}>
                                <div className="flex">
                                    <Tag tag="span">li</Tag>
                                    <p className="text-title">
                                        {educate.university}
                                        {` (${educate.dates[0].getFullYear()} — ${
                                            educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()
                                        })`}
                                        <Tag tag="span" wrapperClassNames="text-default">
                                            /li
                                        </Tag>
                                    </p>
                                </div>
                                <p className="text-white">
                                    <Tag tag="span" wrapperClassNames="text-default">
                                        p
                                    </Tag>
                                    {educate.degree}
                                    <Tag tag="span" wrapperClassNames="text-default">
                                        /p
                                    </Tag>
                                </p>
                            </li>
                        ))}
                    </Section>
                )}
                {!!hobbies?.length && (
                    <Section haveGap={false} title="hobbies">
                        {hobbies.map((hobbie) => (
                            <li className="flex">
                                <Tag tag="p">li</Tag>
                                <p className="text-white">{hobbie}</p>
                                <Tag tag="p">/li</Tag>
                            </li>
                        ))}
                    </Section>
                )}
                {!!socials?.length && (
                    <Section title="contact" haveGap={false}>
                        {socials.map((social) => (
                            <li key={social.name} className="">
                                <a href={social.link} target="_blank">
                                    {'<a href=”'}
                                    <span className="text-white">{social.link}</span>
                                    {'”>'}
                                    <span className="text-title">{social.name}</span>
                                    {'</a>'}
                                </a>
                            </li>
                        ))}
                    </Section>
                )}

                <Tag tag="p" wrapperClassNames="text-2xl pt-4">
                    body
                </Tag>
                <Tag tag="p" wrapperClassNames="text-4xl">
                    HTML
                </Tag>
            </div>
        </div>
    );
};
