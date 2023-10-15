import { useNavigate, useParams, Link } from 'react-router-dom'
import { projectsData } from '../context/projects_context'
import { useEffect, useState } from 'react'
import ScrollToTop from './ScrollToTop'
import img from '../assets/Profile.webp'

const SingleProject = () => {
    const [isScrolledProject, setIsScrolledProject] = useState(false)

    const navigate = useNavigate()
    const { id } = useParams()
    const product = projectsData.find(product => product.id === id)

    const handleGoBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const scrollY = window.scrollY

            if (scrollY >= 50) {
                setIsScrolledProject(true)
            } else {
                setIsScrolledProject(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='h-screen bg-title_dark'>
            <div
                className={`w-full fixed top-0 left-0 z-50 ${
                    isScrolledProject
                        ? 'bg-[#000] bg-opacity-40 backdrop-blur-[2px] scroll-header'
                        : ''
                }`}
            >
                <nav className='section-center w-xl h-[calc(3rem+1.5rem)] flex justify-center items-center gap-4'>
                    <Link
                        to='/'
                        className={`relative cursor-pointer text-container font-medium transition duration-300`}
                    >
                        NICK
                        <span
                            className={`absolute top-[9.5px] right-[14px] rounded-full transition duration-300 bg-[#D6C7BC] w-[4.5px] h-[4.5px]`}
                        ></span>
                    </Link>
                </nav>
            </div>

            <button onClick={handleGoBack} className='text-container section'>
                Back
            </button>
            {/* <div className='w-full h-full absolute bg-profile bg bg-no-repeat bg-[center_right_-4rem] bg-cover sm:bg-center'> */}
            {/* <div className='section '>
                <button onClick={handleGoBack} className='text-container'>
                    Back
                </button>
                <h2 className='text-container'>{product.title}</h2>
                <img src={img} alt='' className='w-1/2 bg-cover' />
            </div> */}
            {/* </div> */}
        </div>
    )
}
export default SingleProject
