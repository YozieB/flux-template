import './styles/main.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';
import {Section} from "@/components/section";


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
}) => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
        <main className='bg-[#F8F8F8] font-[Inter] max-w-[595px] relative overflow-hidden p-6'>
            <div className='bg-[#F0E04B] blur-2xl z-0 h-[300px] w-[300px] rounded-full absolute top-1/2 left-[-150px]' />
            <div className='mx-5 grid grid-cols-3 gap-20'>
                <div>
                    <Section  title='CONTACTS' orderNumber='01'>
                        {socials && (
                            <ul className='mt-[18px]'>
                                {socials.map((social) => <li key={social.name} className='text-[8px]'>{social.link}</li>)}
                            </ul>)}
                    </Section>
                </div>
                <div className="col-span-2">
                    <h1 className={`text-[40px] font-['Konstant_Grotesk'] leading-[1]`}>{firstName} {lastName}, <br /> {role}</h1>
                    <div className='grid grid-cols-2 gap-20 mt-[25px]'>
                        <div className="">
                            <Section title='EXPIRIENCE' orderNumber='02'>
                                {experience && (
                                    <ul>
                                     {experience.map(exper =>
                                        <li className='mt-[18px]' key={exper.companyName + exper.role}>
                                            <p className='text-[8px]'>{`${beautifyDate(exper.dates[0])} — ${exper.isCurrentPosition ? 'Present' : beautifyDate(exper.dates[1])}`}</p>
                                            <h2 className='text-[12px]'>{exper.companyName}</h2>
                                            <p className='text-[8px]'>{exper.description && exper.description}</p>
                                        </li>)}
                                    </ul>)}
                            </Section>
                            <Section title='EDUCATION' orderNumber='03' wrapperStyles='mt-8'>
                                {education && (
                                <ul>
                                    {education.map((educate, index) => 
                                        <li className='mt-[15px]' key={index}>
                                            <div className='text-[8px] flex items-center gap-2'>
                                                <p>{educate.dates[0].getFullYear()}</p>-<p>{educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()}</p>
                                            </div>
                                            <h2 className='font-medium text-[12px]'>{educate.university}</h2>
                                            <p className='text-[9px]'>{educate.degree}</p>
                                        </li>)}
                                </ul>)}
                            </Section>
                        </div>
                        <div className="">
                            <Section title='SKILLS' orderNumber='04' >
                                {skills && (
                                    <ul className='text-[9px] grid grid-cols-2'>
                                        {skills.map(skill => <li className='mt-3' key={skill}><p>{skill}</p></li>)}
                                    </ul>)}
                            </Section>
                            <Section title='LANGUAGES' orderNumber='05' wrapperStyles='mt-8'>
                                {languages && (
                                <ul>
                                    {languages.map(obj => 
                                        <li className='mt-3 text-[9px] flex justify-between w-full' key={obj.name}>
                                            <p>{obj.name}</p>
                                            <p>{obj.level}</p>
                                        </li>)}
                                </ul>)}
                            </Section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
};


