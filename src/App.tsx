import './styles/main.css';

import React, { FC, useState } from 'react';

import { TemplateProps } from './types';
import { Section } from '@/components/section';
import { Circle } from './components/circle';
import { Grain } from './components/grain';
import { BiMoon, BiSun } from 'react-icons/bi';
import { Link } from '@/components/link';

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
    return <div></div>;
};
