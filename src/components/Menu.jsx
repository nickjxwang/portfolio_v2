import { AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

import { GoHome, GoGear } from 'react-icons/go'

const Menu = ({ showMenu, activeNav, setActiveNav, isScrolled }) => {
    return (
        <div
            className={`fixed bg-[#f0f0f0] bg-opacity-10 left-0 right-0 p-2 duration-300  rounded-full -z-10 ${
                showMenu ? 'top-0 opacity-100' : '-top-[80%] opacity-0'
            } ${
                isScrolled
                    ? 'bg-[#f0f0f0] bg-opacity-100 drop-shadow-[0_-1px_2px_rgba(0,0,0,0.1)]'
                    : ''
            } `}
        >
            <ul
                className={`flex flex-col items-center justify-between gap-3 pt-12`}
            >
                <li
                    className={`text-text font-medium transition duration-300 ${
                        activeNav === '#about' && isScrolled
                            ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                            : ''
                    } ${
                        activeNav === '#home' && !isScrolled
                            ? 'hover:text-container active:text-container'
                            : ''
                    }`}
                >
                    <a href='#about' onClick={() => setActiveNav('#about')}>
                        <AiOutlineUser className='text-lg' />
                    </a>
                </li>
                <li
                    className={`text-text font-medium transition duration-300   ${
                        activeNav === '#projects' && isScrolled
                            ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                            : ''
                    } ${
                        activeNav === '#home' && !isScrolled
                            ? 'hover:text-container active:text-container'
                            : ''
                    }`}
                >
                    <a
                        href='#projects'
                        onClick={() => setActiveNav('#projects')}
                    >
                        <AiOutlineProject className='text-lg' />
                    </a>
                </li>
                <li
                    className={`pb-1 text-text font-medium transition duration-300   ${
                        activeNav === '#contact' && isScrolled
                            ? 'text-title_dark hover:text-title_dark active:text-title_dark'
                            : ''
                    } ${
                        activeNav === '#home' && !isScrolled
                            ? 'hover:text-container active:text-container'
                            : ''
                    }`}
                >
                    <a href='#contact' onClick={() => setActiveNav('#contact')}>
                        <AiOutlineMail className='text-lg ' />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Menu
