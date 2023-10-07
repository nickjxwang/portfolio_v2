/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    screen: {
        sm: '350px',
        md: '768px',
        lg: '992px',
        //     xl: '1440px',
    },
    theme: {
        color: {
            title: '#333333',
            title_dark: '#000000',
            text: '#757575',
            body: '#fafafa',
            container: '#fff',
        },
        fontFamily: {
            Poppins: 'Poppins',
        },
        extend: {},
    },
    plugins: [],
}
