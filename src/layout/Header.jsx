import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenuAlt2 } from 'react-icons/hi'
import Menu from '../components/Menu'
import Social from '../components/Social'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({
    showMenu,
    setShowMenu,
    isScrolled,
    activeNav,
    setActiveNav,
    setIsScrolled,
}) => {
    // useEffect(() => {
    //     const windowHeight = window.innerHeight
    //     const scrollY = window.scrollY

    //     if (scrollY >= windowHeight - 50) {
    //         setIsScrolled(true)
    //     } else {
    //         setIsScrolled(false)
    //     }
    // }, [])

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const scrollY = window.scrollY

            if (scrollY >= windowHeight - 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        const initialScrollY = window.scrollY
        handleScroll()

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 transition duration-300 ${
                isScrolled
                    ? 'bg-[#000] bg-opacity-40 backdrop-blur-[2px] scroll-header'
                    : ''
            }`}
            id='header'
        >
            <nav className='section-center w-xl h-[calc(3rem+1.5rem)] flex justify-between items-center gap-4'>
                <ScrollLink
                    to='home'
                    smooth={true}
                    duration={500}
                    className={`relative cursor-pointer text-container font-medium transition duration-300`}
                    onClick={() => setActiveNav('#home')}
                >
                    NICK
                    <span
                        className={`absolute top-[9.6px] right-[14px] rounded-full transition duration-300 bg-[#C9D6DF] w-[4.5px] h-[4.5px]`}
                    ></span>
                </ScrollLink>

                <div className='hidden sm:flex'>
                    <ul className='flex gap-8 text-sm grid-c text-container'>
                        <li
                            className={`pb-1 cursor-pointer font-medium transition duration-300 hover:animate-expand ${
                                activeNav === '#about' ? '' : ''
                            }`}
                        >
                            <ScrollLink
                                to='about'
                                smooth={true}
                                duration={500}
                                onClick={() => setActiveNav('#about')}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li
                            className={`pb-1 relative cursor-pointer font-medium hover:animate-expand ${
                                activeNav === '#projects' ? '' : ''
                            }`}
                        >
                            <ScrollLink
                                to='projects'
                                smooth={true}
                                duration={500}
                                offset={-20}
                                onClick={() => setActiveNav('#projects')}
                            >
                                Projects
                            </ScrollLink>
                        </li>
                        <li
                            className={`pb-1 relative cursor-pointer font-medium transition duration-300 hover:animate-expand ${
                                activeNav === '#contact' ? '' : ''
                            }`}
                        >
                            <ScrollLink
                                to='contact'
                                smooth={true}
                                duration={500}
                                offset={-10}
                                onClick={() => setActiveNav('#contact')}
                            >
                                Contact
                            </ScrollLink>
                        </li>
                    </ul>
                    <i className='hidden uil uil-times'></i>
                </div>
                <div
                    className={`flex justify-center font-medium cursor-pointer rounded-lg transition duration-300 z-[999] sm:hidden ${
                        showMenu ? 'text-title_dark' : 'text-title'
                    }  ml-6`}
                >
                    <div
                        className={`bg-opacity-0 p-2 rounded-full text-container transition z-10 duration-300 ${
                            showMenu
                                ? 'bg-opacity-10 drop-shadow-[0_-1px_2px_rgba(255,255,255,0)]'
                                : ''
                        }`}
                    >
                        <div className='bg-opacity-0 rounded-full'>
                            <HiMenuAlt2
                                size={25}
                                className={`text-container font-medium transition duration-300 text-right`}
                                onClick={() => setShowMenu(!showMenu)}
                            />
                        </div>
                        <Menu
                            showMenu={showMenu}
                            setShowMenu={setShowMenu}
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
