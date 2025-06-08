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
                    <div className={`text-[9px] flex justify-between font-['Konstant_Grotesk']`}>
                        <h3>CONTACTS</h3>
                        <p>01</p>
                    </div>
                    <hr className="border-0,2px border-solid [0,2px] my-1" />
                    {socials && (
                        <ul className='mt-[18px]'>
                            {socials.map((social) => <li key={social.name} className='text-[8px]'>{social.link}</li>)}
                        </ul>)}
                </div>
                <div className="col-span-2">
                    <h1 className={`text-[40px] font-['Konstant_Grotesk'] leading-[1]`}>{firstName} {lastName}, <br /> {role}</h1>
                    <div className='grid grid-cols-2 gap-20 mt-[25px]'>
                        <div className="">
                            <div className="">
                                <div className='font-medium text-[9px] flex justify-between'>
                                    <h3>EXPIRIENCE</h3>
                                    <p>02</p>
                                </div>
                                <hr className="border-0,2px border-solid  my-4 my-25"/>
                                {experience && (
                                    <ul>
                                     {experience.map(exper =>
                                        <li className='mt-[18px]' key={exper.companyName + exper.role}>
                                            <p className='text-[8px]'>{`${beautifyDate(exper.dates[0])} — ${exper.isCurrentPosition ? 'Present' : beautifyDate(exper.dates[1])}`}</p>
                                            <h2 className='text-[12px]'>{exper.companyName}</h2>
                                            <p className='text-[8px]'>{exper.description && exper.description}</p>
                                        </li>)}
                                    </ul>)}
                            </div>
                            <div className='mt-8'>
                                <div className='text-[9px] flex justify-between'>
                                    <h3>EDUCATION</h3>
                                    <p>03</p>
                                </div>
                                <hr className="border-0,2px border-solid 0,2 my-4 my-25"/>
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
                            </div>
                        </div>
                        <div className="">
                            <Section title='Навыки' orderNumber='01' wrapperStyles='h-[100px]'>
                                {skills && (
                                    <ul className='text-[9px] grid grid-cols-2'>
                                        {skills.map(skill => <li key={skill}><p>{skill}</p></li>)}
                                    </ul>)}
                            </Section>
                            <div className='mt-8'>
                                <div className='text-[9px] flex justify-between'>
                                    <h3>LANGUAGES</h3>
                                    <p>05</p>
                                </div>
                                <hr className="border-0,2px border-solid 0,2 my-4 my-25"/>
                                {languages && (
                                    <ul>
                                    {languages.map(obj => 
                                        <li className='text-[9px] flex justify-between w-full' key={obj.name}>
                                            <p>{obj.name}</p>
                                            <p>{obj.level}</p>
                                        </li>)}
                                </ul>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </div>
    );
};


