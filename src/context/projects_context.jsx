import Work1 from '../assets/work1.jpg'
import Work2 from '../assets/work2.jpg'
import Work3 from '../assets/work3.webp'
import Work4 from '../assets/work4.webp'
import Work5 from '../assets/work5.jpg'
import slide1_3d from '../assets/slide1-3d.jpg'
import slide2_3d from '../assets/slide2-3d.jpg'
import slide3_3d from '../assets/slide3-3d.jpg'
import slide4_3d from '../assets/slide4-3d.jpg'
import slide5_3d from '../assets/slide5-3d.jpg'

export const projectsData = [
    {
        id: '1',
        img: Work1,
        title: 'Movie DB',
        category: 'web',
        data: '2023',
        image: Work1,
        view: 'https://next-imdb-azure.vercel.app',
        code: 'https://github.com/nickjxwang/next-imdb',
        tool: ['NextJS', 'Tailwind CSS'],
        desc: 'This is a movie database website primarily built using Next.js and Tailwind CSS technologies. The website offers a wealth of information about various movies. Users can easily search for movies of their interest through a simple search feature. Furthermore, the website features responsive design, ensuring a great display and user experience on different devices.',
    },
    {
        id: '2',
        img: Work2,
        title: 'Japanese Temple',
        category: '3d',
        data: '2022',
        slider: [slide1_3d, slide2_3d, slide3_3d, slide4_3d, slide5_3d],
        tool: ['Maya', 'Substance Painter'],
        desc: 'This is a 3D artwork I created using Maya modeling and Substance Painter texturing techniques. It showcases a traditional Japanese temple nestled in a forest with blossoming cherry trees. Through this piece, I aim to immerse the audience in a captivating scene filled with historical and cultural charm, capturing the serene beauty of a traditional Japanese temple.',
    },
    {
        id: '3',
        img: Work3,
        title: 'Monster Battle',
        category: 'ar',
        data: '2023',
        view: 'https://www.youtube.com/embed/lwDSuDfKlIo',
        video: 'https://www.youtube.com/embed/lwDSuDfKlIo',
        tool: ['Unity', 'C#', 'Vuforia'],
        desc: 'This project is an AR game created using Unity and Vuforia technologies. It brings the excitement of a monster showdown to life, with gameplay inspired by the classic "Rock, Paper, Scissors" game. I used pre-made models downloaded from the Unity Asset Store, harnessing the power of Unity engine and Vuforia to craft an immersive and enjoyable AR gaming experience.',
    },
    {
        id: '4',
        img: Work4,
        title: 'Mirror Mirror',
        category: 'ar',
        data: '2023',
        view: 'https://www.youtube.com/embed/jSQUVWTtPJI',
        video: 'https://www.youtube.com/embed/jSQUVWTtPJI',
        tool: ['Unity', 'C#', 'Vuforia'],
        desc: 'The main objective of this project is to provide users with the ability to browse and virtually try on different clothing items using AR technology. My role in this project was to develop an AR application specifically designed for clothing exploration and information provision. The application utilizes Unity and Vuforia technologies to create an AR experience. The application enables users to view and interact with clothing models, providing them with information about the items. Users can utilize gesture-based zooming and button-controlled rotation to enhance their experience with the models.',
    },
    {
        id: '5',
        img: Work5,
        title: 'ComfortZone',
        category: 'web',
        data: '2023',
        image: Work5,
        view: 'https://testing-comfortzone.netlify.app',
        code: 'https://github.com/nickjxwang/react-ecommerce',
        tool: ['React', 'Styled-Components'],
        desc: 'This project is an e-commerce website focused on product sales, developed using React and styled-components technologies. The website aims to help consumers create comfortable environments by browsing and selecting various products. Utilizing React ensures a dynamic and interactive website, while styled-components contribute to creating aesthetically pleasing user interfaces. This project not only offers a diverse range of options but also delivers an exceptional shopping experience through intuitive design, providing consumers with a convenient platform for purchasing products.',
    },
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'design',
    },
    {
        name: 'AR',
    },
    {
        name: '3D',
    },
]
