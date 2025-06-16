import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';
import { Section } from '@/components/section';
import { Circle } from './components/circle-bacground';
import { GrainBackground } from './components/bacground';

const beautifyDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric',
        era: undefined,
    });
    const monthYear = formatter.format(new Date(date)).replace(' г.', '');

    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
};

export const Flux: FC<TemplateProps> = ({
    firstName,
    lastName,
    skills,
    role,
    experience,
    languages,
    education,
    socials,
    circle,
    grain,
}) => {
    return (
        <div className="flex justify-center items-center min-h-screen py-4">
            <GrainBackground grain={grain} wrapperStyles={'bg-[#F8F8F8] max-w-[1200px] max-h-[1800px] absolute w-full h-full'} />
            {/*  TODO: На основе пропса grain - добавлять зернистость  */}
            <main className="bg-[#F8F8F8] font-[Inter] max-w-[1200px] relative overflow-hidden p-6">
                {/* TODO: Вынести кружок в отдельный компонент и добавить ему пропс, на основе которого он будет менять свой цвет */}
                <Circle color={circle.purple} wrapperStyles={'blur-3xl h-[500px] w-[500px] rounded-full absolute top-1/2 left-[-200px]'} />
                {/* <div className='bg-[#F0E04B] blur-2xl z-0 h-[300px] w-[300px] rounded-full absolute top-1/2 left-[-150px]' /> */}
                <div className="mx-10 grid grid-cols-3 gap-20">
                    <div>
                        <Section title="CONTACTS" orderNumber="01">
                            {socials && (
                                <ul className="flex flex-col gap-2">
                                    {socials.map((social) => (
                                        <li key={social.name} className={`text-base uppercase font-['Konstant_Grotesk']`}>
                                            <a href={social.link} target="_blank">
                                                {social.name}
                                            </a>{' '}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Section>
                    </div>
                    <div className="col-span-2">
                        <h1 className={`text-[80px] font-['Konstant_Grotesk'] leading-[1]`}>
                            {firstName} {lastName}, <br /> {role}
                        </h1>
                        <div className="grid grid-cols-2 gap-20 mt-12">
                            <div className="">
                                <Section title="EXPIRIENCE" orderNumber="02">
                                    {experience && (
                                        <ul className="flex flex-col gap-8">
                                            {experience.map((exper) => (
                                                <li className="flex flex-col gap-2" key={exper.companyName + exper.role}>
                                                    <p className="text-base">{`${beautifyDate(exper.dates[0])} — ${
                                                        exper.isCurrentPosition ? 'Present' : beautifyDate(exper.dates[1])
                                                    }`}</p>
                                                    <h2 className="text-2xl font-medium">{exper.companyName}</h2>
                                                    <p className="text-base">{exper.description && exper.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                                <Section title="EDUCATION" orderNumber="03" wrapperStyles="mt-10">
                                    {education && (
                                        <ul className="flex flex-col gap-8">
                                            {education.map((educate, index) => (
                                                <li className="flex flex-col gap-2" key={index}>
                                                    <div className="text-base flex items-center gap-2">
                                                        <p>{educate.dates[0].getFullYear()}</p>-
                                                        <p>{educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()}</p>
                                                    </div>
                                                    <h2 className="font-medium text-2xl">{educate.university}</h2>
                                                    <p className="text-base">{educate.degree}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                            </div>
                            <div className="">
                                <Section title="SKILLS" orderNumber="04">
                                    {skills && (
                                        <ul className="text-lg grid grid-cols-2">
                                            {skills.map((skill) => (
                                                <li className="mt-3" key={skill}>
                                                    <p>{skill}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                                <Section title="LANGUAGES" orderNumber="05" wrapperStyles="mt-8">
                                    {languages && (
                                        <ul>
                                            {languages.map((obj) => (
                                                <li className="mt-3 text-lg flex justify-between w-full" key={obj.name}>
                                                    <p>{obj.name}</p>
                                                    <p>{obj.level}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
