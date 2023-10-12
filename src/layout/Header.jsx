import { HiMenuAlt2 } from 'react-icons/hi'
import Menu from '../components/Menu'
import Social from '../components/Social'
import React, { useState, useEffect } from 'react'

const Header = ({ showMenu, setShowMenu }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')
    // const [menuAbout, setMenuAbout] = useState(false)
    // const [menuWork, setMenuWork] = useState(false)
    // const [menuEmail, setMenuEmail] = useState(false)

    // const handelMenuActive = () => {
    //     if (activeNav === '#about' && isScrolled) {
    //         setMenuAbout(true)
    //     } else {
    //         setMenuAbout(false)
    //     }
    //     if (activeNav === '#about' && isScrolled) {
    //         setMenuWork(true)
    //     }
    //     if (activeNav === '#about' && isScrolled) {
    //         setMenuEmail(true)
    //     }
    // }

    // useEffect(() => {
    //     handelMenuActive()
    // }, [activeNav, isScrolled])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 ${
                isScrolled ? 'bg-title_dark bg-opacity-30' : ''
            }`}
            id='header'
        >
            <nav className='section-center w-xl h-[calc(3rem+1.5rem)] flex justify-between items-center gap-4'>
                <a
                    href='#home'
                    className={`relative text-container font-medium ${
                        isScrolled ? 'text-title_dark' : ''
                    }`}
                    onClick={() => setActiveNav('#home')}
                >
                    NICK
                    <span
                        className={`absolute top-[9.5px] right-[14px] rounded-full bg-[#D6C7BC] w-[4.5px] h-[4.5px] ${
                            isScrolled ? 'bg-title' : ''
                        }`}
                    ></span>
                </a>
                <div className='hidden sm:flex'>
                    <ul className='grid-c flex gap-8'>
                        <li>
                            <a
                                href='#about'
                                onClick={() => setActiveNav('#about')}
                                className={
                                    activeNav === '#about'
                                        ? 'nav-link nav-active'
                                        : 'nav-link'
                                }
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='#projects'
                                onClick={() => setActiveNav('#projects')}
                                className={
                                    activeNav === '#projects'
                                        ? 'nav-link nav-active'
                                        : 'nav-link'
                                }
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href='#contact'
                                onClick={() => setActiveNav('#contact')}
                                className={
                                    activeNav === '#contact'
                                        ? 'nav-link nav-active'
                                        : 'nav-link'
                                }
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <i className='uil uil-times hidden'></i>
                </div>
                <div
                    className={`flex justify-center font-medium transition duration-300 ease-in-out cursor-pointer rounded-lg z-[999] sm:hidden ${
                        showMenu ? 'text-title_dark' : 'text-title'
                    }  ml-6`}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <div
                        className={`bg-opacity-0 p-2 rounded-full text-container transition z-10 duration-300 ${
                            showMenu
                                ? 'bg-opacity-10 drop-shadow-[0_-1px_2px_rgba(255,255,255,0.15)]'
                                : ''
                        } ${isScrolled ? 'bg-text' : 'bg-body'}`}
                    >
                        <div className='bg-opacity-0 rounded-full'>
                            <HiMenuAlt2
                                size={25}
                                className={`text-container font-medium text-right ${
                                    isScrolled ? 'text-title_dark' : ''
                                }`}
                            />
                        </div>
                        <Menu
                            showMenu={showMenu}
                            activeNav={activeNav}
                            setActiveNav={setActiveNav}
                            // menuAbout={menuAbout}
                            // menuWork={menuWork}
                            // menuEmail={menuEmail}
                            isScrolled={isScrolled}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
