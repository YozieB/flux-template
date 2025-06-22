/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                default: '#696969',
                title: '#3DFFDB',
                tag: '#0094FF',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
