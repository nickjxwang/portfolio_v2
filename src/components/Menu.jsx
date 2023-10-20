import { AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll'

import { GoHome, GoGear } from 'react-icons/go'

const Menu = ({
    showMenu,
    activeNav,
    setActiveNav,
    isScrolled,
    setShowMenu,
}) => {
    return (
        <div
            className={`fixed top-3 duration-300 rounded-full -z-10 ${
                showMenu ? 'right-12 opacity-100' : '-right-[100%] opacity-0'
            } ${isScrolled ? '' : ''} `}
        >
            <ul className={`flex items-center justify-between gap-3`}>
                <li
                    className={`font-medium transition duration-300 hover:text-container active:text-container ${
                        activeNav === '#about' && isScrolled
                            ? 'text-container '
                            : 'text-title'
                    }`}
                >
                    <ScrollLink
                        to='about'
                        onClick={() => setActiveNav('#about')}
                    >
                        <AiOutlineUser
                            className='text-lg'
                            onClick={() => setShowMenu(false)}
                        />
                    </ScrollLink>
                </li>
                <li
                    className={`font-medium transition duration-300 hover:text-container active:text-container ${
                        activeNav === '#projects' && isScrolled
                            ? 'text-container '
                            : 'text-title '
                    }`}
                >
                    <ScrollLink
                        to='projects'
                        onClick={() => setActiveNav('#projects')}
                    >
                        <AiOutlineProject
                            className='text-lg'
                            onClick={() => setShowMenu(false)}
                        />
                    </ScrollLink>
                </li>
                <li
                    className={` font-medium transition duration-300 hover:text-container active:text-container ${
                        activeNav === '#contact' && isScrolled
                            ? 'text-container '
                            : 'text-title'
                    }`}
                >
                    <ScrollLink
                        to='contact'
                        onClick={() => setActiveNav('#contact')}
                    >
                        <AiOutlineMail
                            className='text-lg '
                            onClick={() => setShowMenu(false)}
                        />
                    </ScrollLink>
                </li>
            </ul>
        </div>
    )
}
export default Menu
