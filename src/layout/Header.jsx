import { HiMenuAlt2 } from 'react-icons/hi'
import Menu from '../components/Menu'
import Social from '../components/Social'
import React, { useState, useLayoutEffect } from 'react'

const Header = ({ showMenu, setShowMenu, aboutP, projectsP, contactP }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')

    useLayoutEffect(() => {
        const windowHeight = window.innerHeight

        const handleScroll = () => {
            const scrollY = window.scrollY

            if (scrollY >= windowHeight - 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            if (scrollY < windowHeight - 80) {
                setActiveNav('#home')
            }
            if (scrollY > windowHeight - 80) {
                setActiveNav('#about')
            }
            if (scrollY > aboutP + windowHeight - 80) {
                setActiveNav('#projects')
            }
            if (scrollY > projectsP + aboutP + windowHeight - 80) {
                setActiveNav('#contact')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [aboutP, projectsP, contactP])

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition duration-300 ${
                isScrolled ? 'bg-[#f0f0f0] bg-opacity-100 scroll-header' : ''
            }`}
            id='header'
        >
            <nav className='section-center w-xl h-[calc(3rem+1.5rem)] flex justify-between items-center gap-4'>
                <a
                    href='#home'
                    className={`relative text-container font-medium transition duration-300 ${
                        isScrolled ? 'text-title_dark' : ''
                    }`}
                    onClick={() => setActiveNav('#home')}
                >
                    NICK
                    <span
                        className={`absolute top-[9.5px] right-[14px] rounded-full transition duration-300 bg-[#D6C7BC] w-[4.5px] h-[4.5px] ${
                            isScrolled ? 'bg-title_dark' : 'bg-container'
                        }`}
                    ></span>
                </a>
                <div className='hidden sm:flex'>
                    <ul className='grid-c flex gap-8'>
                        <li
                            className={`pb-1 text-text font-medium transition duration-300 ${
                                activeNav === '#about' && isScrolled
                                    ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                                    : ''
                            } ${
                                activeNav === '#home' && !isScrolled
                                    ? 'hover:text-container active:text-container'
                                    : ''
                            } ${isScrolled ? 'hover:text-title_dark' : ''}`}
                        >
                            <a
                                href='#about'
                                onClick={() => setActiveNav('#about')}
                            >
                                About
                            </a>
                        </li>
                        <li
                            className={`pb-1 text-text font-medium transition duration-300 ${
                                activeNav === '#projects' && isScrolled
                                    ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                                    : ''
                            } ${
                                activeNav === '#home' && !isScrolled
                                    ? 'hover:text-container active:text-container'
                                    : ''
                            } ${
                                isScrolled
                                    ? 'hover:text-title_dark active:text-title_dark'
                                    : ''
                            }`}
                        >
                            <a
                                href='#projects'
                                onClick={() => setActiveNav('#projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li
                            className={`pb-1 text-text font-medium transition duration-300 ${
                                activeNav === '#contact' && isScrolled
                                    ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                                    : ''
                            } ${
                                activeNav === '#home' && !isScrolled
                                    ? 'hover:text-container active:text-container'
                                    : ''
                            } ${
                                isScrolled
                                    ? 'hover:text-title_dark active:text-title_dark'
                                    : ''
                            }`}
                        >
                            <a
                                href='#contact'
                                onClick={() => setActiveNav('#contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times hidden'></i>
                </div>
                <div
                    className={`flex justify-center font-medium transition duration-300 ease-in-out cursor-pointer rounded-lg transition duration-300 z-[999] sm:hidden ${
                        showMenu ? 'text-title_dark' : 'text-title'
                    }  ml-6`}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div
                        className={`bg-opacity-0 p-2 rounded-full text-container transition z-10 duration-300 ${
                            showMenu
                                ? 'bg-opacity-10 bg-container drop-shadow-[0_-1px_2px_rgba(255,255,255,0)]'
                                : ''
                        } ${isScrolled ? 'bg-text' : 'bg-body'}`}
                    >
                        <div className='bg-opacity-0 rounded-full'>
                            <HiMenuAlt2
                                size={25}
                                className={`text-container font-medium transition duration-300 text-right ${
                                    isScrolled ? 'text-title_dark' : ''
                                }`}
                            />
                        </div>
                        <Menu
                            showMenu={showMenu}
                            activeNav={activeNav}
                            setActiveNav={setActiveNav}
                            isScrolled={isScrolled}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
