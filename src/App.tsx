import './index.css';

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
        <main className='min-h-[100vh] flex justify-center items-center bg-[#F8F8F8]'>
            <div className='bg-[#F0E04B] blur-2xl sticky left-[-100] z-0 h-[300px] w-[300px] rounded-full'></div>
            <div className='mx-5 mt-60 grid grid-cols-3 gap-20 max-w-[595px]'>
                <div>
                    <div className='text-[9px] flex justify-between'>
                        <h3 className=''>CONTACTS</h3>
                        <p>01</p>
                    </div>
                    <hr className="border-0,2px border-solid [0,2px] my-[4px]" />
                    {socials && (
                        <ul className='mt-[18px]'>
                            {socials.map((social) => <li key={social.name} className='text-[8px]'>{social.link}</li>)}
                        </ul>)}
                </div>
                <div className="col-span-2">
                    <h1 className='text-[40px]'>{firstName} {lastName}, <br /> {role}</h1>
                    <div className='font-[inter] grid grid-cols-2 gap-20 mt-[25px]'>
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
                            <div className='mt-[32px]'>
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
                            <div>
                                <div className='text-[9px] flex justify-between'>
                                    <h3>SKILLS</h3>
                                    <p>04</p>
                                </div>
                                <hr className="border-0,2px border-solid 0,2 my-4 my-25"/>
                                {skills && (
                                    <ul className='text-[9px] grid grid-cols-2'>
                                        {skills.map(skill => <li key={skill}><p>{skill}</p></li>)}
                                    </ul>)}
                            </div>
                            <div className='mt-[32px]'>
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
    );
};
