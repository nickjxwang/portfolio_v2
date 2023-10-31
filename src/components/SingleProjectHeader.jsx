import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const SingleProjectHeader = () => {
    const [isScrolledProject, setIsScrolledProject] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const scrollY = window.scrollY

            if (scrollY >= 30) {
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
    )
}
export default SingleProjectHeader
