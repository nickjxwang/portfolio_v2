import Work1 from '../assets/work1.jpg'
import Work2 from '../assets/work2.jpg'
import Work3 from '../assets/work3.jpg'
import Work4 from '../assets/work4.jpg'
import Work5 from '../assets/work5.jpg'

export const projectsData = [
    {
        id: '1',
        img: Work1,
        title: 'Web design',
        category: 'web',
        data: '2023',
        video: 'https://www.youtube.com/embed/lwDSuDfKlIo',
        url: 'https://www.youtube.com/embed/lwDSuDfKlIo',
        code: '',
    },
    {
        id: '2',
        img: Work2,
        title: 'Movie',
        category: 'design',
        data: '2023',
        slider: [Work1, Work2, Work3, Work4, Work5],
    },
    {
        id: '3',
        img: Work3,
        title: '3D model',
        category: '3d',
        data: '2023',
        image: Work3,
    },
    {
        id: '4',
        img: Work4,
        title: 'Interaction design',
        category: 'unity',
        data: '2023',
        image: Work4,
    },
    {
        id: '5',
        img: Work5,
        title: 'Music',
        category: 'web',
        data: '2023',
        image: Work5,
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
        name: '3D',
    },
    {
        name: 'unity',
    },
]
