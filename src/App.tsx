import './styles/main.css';

import React, { FC, useState } from 'react';

import { TemplateProps } from './types';
import { Section } from '@/components/section';
import { Circle } from './components/circle';
import { Grain } from './components/grain';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Link } from "@/components/link";

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
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    const darkModeIcon = darkMode ? <BiSun className="text-2xl" /> : <BiMoon className="text-2xl" />;

    return (
        <div
            className={`flex relative justify-center items-center min-h-screen dark:text-white text-neutral-800 bg-[#F8F8F8] dark:bg-[#1B1B1B]`}
        >
            <div className={`absolute h-0.5 dark:bg-neutral-700 bg-neutral-200 w-full left-0 z-20 top-20 hidden sm:block`} />
            <div className={`absolute h-0.5 dark:bg-neutral-700 bg-neutral-200 w-full left-0 z-20 bottom-20 hidden sm:block`} />
            {grain && <Grain />}
            <main className='font-[Inter] max-w-[1200px] relative overflow-hidden sm:py-28 py-12 min-h-screen'>
                <div className={`absolute w-0.5 max-[1200px]:hidden dark:bg-neutral-700 bg-neutral-200 h-full left-0 z-20 top-0 bottom-0`} />
                <div className={`absolute w-0.5 max-[1200px]:hidden dark:bg-neutral-700 bg-neutral-200 h-full right-0 z-20 top-0 bottom-0`} />
                {circle && <Circle color={circle} />}
                <div className="sm:px-10 px-4 min-[860px]:grid grid-cols-3 gap-20 max-[860px]:gap-10 flex flex-col">
                        <Section title="КОНТАКТЫ" orderNumber="01" wrapperStyles={'max-[860px]:hidden'}>
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
                    <div className="col-span-2">
                        <button type="button" className="absolute right-10 top-10 print:hidden" onClick={toggleDarkMode}>
                            {darkModeIcon}
                        </button>
                        <h1 className={`sm:text-[80px] text-5xl font-['Konstant_Grotesk'] leading-[1]`}>
                            {firstName} {lastName}, <br /> {role}
                        </h1>
                        <div className="sm:grid grid-cols-2 min:[860px]:gap-20 gap-10 mt-12 flex flex-col">
                            <div className="">
                                <Section title="КОНТАКТЫ" orderNumber="01" wrapperStyles={'min-[860px]:hidden visible mb-8'}>
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
                                <Section title="ОПЫТ" orderNumber="02">
                                    {experience && (
                                        <ul className="flex flex-col gap-8">
                                            {experience.map((exper) => (
                                                <li className="flex flex-col gap-2" key={exper.companyName + exper.role}>
                                                    <h2 className="text-2xl font-semibold">{exper.companyName}</h2>
                                                    <p className="text-base text-neutral-400 dark:text-neutral-500">{`${beautifyDate(
                                                        exper.dates[0]
                                                    )} — ${exper.isCurrentPosition ? 'Present' : beautifyDate(exper.dates[1])}`}</p>
                                                    <p className="text-base">{exper.description && exper.description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                                <Section title="ОБРАЗОВАНИЕ" orderNumber="03" wrapperStyles="mt-8">
                                    {education && (
                                        <ul className="flex flex-col gap-8">
                                            {education.map((educate, index) => (
                                                <li className="flex flex-col gap-2" key={index}>
                                                    <div className="text-base flex items-center gap-2">
                                                        <p className="text-neutral-400 dark:text-neutral-500">
                                                            {educate.dates[0].getFullYear()} —{' '}
                                                            {educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()}
                                                        </p>
                                                    </div>
                                                    <h2 className="font-semibold text-2xl">{educate.university}</h2>
                                                    <p className="text-base">{educate.degree}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </Section>
                            </div>
                            <div className="">
                                <Section title="НАВЫКИ" orderNumber="04">
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
                                <Section title="ЯЗЫКИ" orderNumber="05" wrapperStyles="mt-8">
                                    {languages && (
                                        <ul>
                                            {languages.map((obj) => (
                                                <li className="mt-3 text-lg flex justify-between w-full" key={obj.name}>
                                                    <p>{obj.name}</p>
                                                    <p className="text-neutral-400 dark:text-neutral-500">{obj.level}</p>
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
            <footer className="flex items-center justify-center gap-3 absolute bottom-7 left-1/2 -translate-x-1/2">
                Создано в <Link text="Resumify.ru" href="https://resumify.ru" target="_blank" rel="noopener noreferrer" />
            </footer>
        </div>
    );
};
