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
        <main className='min-h-[100vh] flex justify-center items-center'>
            <div className='mx-5 mt-60 grid grid-cols-3 gap-20 max-w-[595px]'>
                <div>
                    <div className='flex justify-between'>
                        <h3>CONTACTS</h3>
                        <p>01</p>
                    </div>
                    <hr className="border border-solid 0,2 my-4" />
                    {socials && (
                        <ul className='text-8px'>
                            {socials.map((social) => <li key={social.name} className='text-8'>{social.link}</li>)}
                        </ul>
                    )
                    }
                </div>
                <div className="col-span-2">
                    <h1 className='text-7xl h-60'>{firstName} {lastName}, <br /> {role}</h1>
                    <div className='grid grid-cols-2 gap-20 '>
                        <div className="">
                            <div className="">
                                <div className='flex justify-between'>
                                    <h3>EXPIRIENCE</h3>
                                    <p>02</p>
                                </div>
                                <hr className="border border-solid 0,2 my-4 my-25"/>
                                <ul>
                                    {experience && experience.map(exper =>{
                                        return <li>
                                            <p>{`${beautifyDate(exper.dates[0])} — ${exper.isCurrentPosition ? 'Present' : beautifyDate(exper.dates[1])}`}</p>
                                            <h2>{exper.companyName}</h2>
                                            <p>{exper.description && exper.description}</p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <h3>EDUCATION</h3>
                                    <p>03</p>
                                </div>
                                <hr className="border border-solid 0,2 my-4 my-25"/>
                                <ul>
                                    {education && education.map(educate => {
                                        console.log(educate.isOngoing)
                                        return <li>
                                            <div className='flex items-center gap-2'>
                                                <p>{educate.dates[0].getFullYear()}</p> - <p>{educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()}</p>
                                            </div>
                                            <h2>{educate.university}</h2>
                                            <p>{educate.degree}</p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="ml-">
                            <div>
                                <div className='flex justify-between'>
                                    <h3>SKILLS</h3>
                                    <p>04</p>
                                </div>
                                <hr className="border border-solid 0,2 my-4 my-25"/>
                                <ul className='grid grid-cols-2'>
                                    {skills && skills.map(skill =>{
                                        return <li><p>{skill}</p></li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <h3>LANGUAGES</h3>
                                    <p>05</p>
                                </div>
                                <hr className="border border-solid 0,2 my-4 my-25"/>
                                <ul>
                                    {languages && languages.map(obj => {
                                        return <li className='flex justify-between w-full'>
                                            <p>{obj.name}</p>
                                            <p>{obj.level}</p>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
