import { TemplateProps } from './types';

export const mockData: TemplateProps = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'REACT', 'ANGULAR', 'java', 'node.js', 'mysql'],
    languages: [
        { name: 'Русский', level: 'C2' },
        { name: 'Белорусский', level: 'C2' },
        { name: 'Английский', level: 'B1' },
        { name: 'Немецкий', level: 'A2' },
    ],
    education: [
        {
            degree: 'Computer Science',
            university: 'University of X',
            dates: [new Date(2012, 11, 17, 0, 0, 0, 0), new Date(2017, 11, 17, 0, 0, 0, 0)],
        },
        {
            degree: 'Frontend Development',
            university: 'University of X',
            dates: [new Date(2020, 11, 17, 0, 0, 0, 0), new Date(2024, 11, 17, 0, 0, 0, 0)],
        },
        {
            degree: 'Law',
            university: 'University of X',
            dates: [new Date(2003, 11, 17, 0, 0, 0, 0), new Date(2008, 11, 17, 0, 0, 0, 0)],
        },
    ],
    experience: [
        {
            role: 'Junior Web Developer',
            dates: [new Date(2016, 11, 17, 0, 0, 0, 0), new Date(2018, 11, 17, 0, 0, 0, 0)],
            companyName: 'Company X',
            description:
                'A dolor, dolores ducimus, non nostrum odit optio quae quod recusandae reprehenderit sit ut veritatis! Ad ex fugit laboriosam laborum necessitatibus obcaecati?',
        },
        {
            role: 'Senior Web Developer',
            dates: [new Date(2012, 11, 17, 0, 0, 0, 0), new Date(2013, 11, 17, 0, 0, 0, 0)],
            companyName: 'Company Y',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
            role: 'Middle Web Developer',
            dates: [new Date(2020, 11, 17, 0, 0, 0, 0), new Date(2022, 11, 17, 0, 0, 0, 0)],
            companyName: 'Company Z',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor, dolores ducimus, non nostrum odit optio quae quod recusandae reprehenderit sit ut veritatis! Ad ex fugit laboriosam laborum necessitatibus obcaecati?',
        },
    ],
    socials: [
        {
            link: 'https://test-link.ru/',
            name: 'Email',
        },
        {
            link: 'https://test-link.ru/',
            name: 'Dribble',
        },
        {
            link: 'https://test-link.ru/',
            name: 'Github',
        },
    ],
};
