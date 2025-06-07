import './index.css';

import React, { FC } from 'react';

import { TemplateProps } from './types';

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
        <main>
            <div className=''>
                <div className="">
                    <div className='mx-5 mt-60 grid grid-cols-3 gap-20 w-[595px]'>
                        <div className=""> 
                            <div>
                                <div className='flex justify-between'>
                                    <h3>CONTACTS</h3>
                                    <p>01</p>
                                </div>
                                <hr className="border border-solid 0,2 my-4" />
                                <ul className='text-8px'>
                                    {socials && socials.map(social => {
                                        return <li className='text-8'>{social.link}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-2 w-358">
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
                                                    <p>{`${exper.dates[0].getFullYear()}. ${exper.dates[0].getMonth()} — ${exper.isCurrentPosition ? 'Present' : exper.dates[1].getFullYear() + '.' + exper.dates[1].getMonth()}`}</p>
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
                                                return <li>
                                                    <p>{educate.dates[0].getFullYear() + ' - ' + educate.isOngoing ? 'Present' : educate.dates[1].getFullYear()}</p>
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
                </div>
            </div>
            
        </main>
    );
};
