// /** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    screen: {
        sm: '350px',
        md: '768px',
        lg: '992px',
        xl: '1170px',
        // lg: { max: '992px' },

        // md: { min: '576px', max: '768px' },

        // sm: { max: '350px' },
    },
    theme: {
        colors: {
            title: '#6D6F6E',
            title_dark: '#38383F',
            text: '#979696',
            body: '#EAEAEA',
            container: '#F6F6F6',
        },
        fontFamily: {
            Poppins: 'Poppins',
        },
        backgroundImage: {
            profile: "url('/src/assets/Profile.jpg')",
            about: "url('/src/assets/about.jpg')",
        },
        extend: {
            keyframes: {
                move: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(8px)' },
                },
            },
            animation: {
                move: 'move 1s ease-in-out infinite',
            },
        },
    },
    plugins: [],
}
