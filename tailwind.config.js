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
            title_dark: '#343434',
            text: '#979696',
            body: '#eaeaea',
            container: '#f6f6f6',
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
                moveLeft: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-8px)' },
                },
                expand: {
                    '0%, 100%': {
                        opacity: '1',
                    },
                    '50%': {
                        opacity: '0',
                    },
                },
            },
            animation: {
                move: 'move 1s ease-in-out infinite',
                move_left: 'moveLeft 1.2s ease-in-out infinite',
                expand: 'expand 1.2s ease-out infinite',
            },
        },
    },
    plugins: [],
}
