/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                'press-start': ['Press Start 2P', 'cursive'], // ! Кавычки для названия с пробелами
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
