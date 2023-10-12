import { AiOutlineProject, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'

import { GoHome, GoGear } from 'react-icons/go'

const Menu = ({ showMenu, activeNav, setActiveNav, isScrolled }) => {
    return (
        <div
            className={`fixed bg-body bg-opacity-10 left-0 right-0 p-2 duration-300  rounded-full -z-10 ${
                showMenu ? 'top-0 opacity-100' : '-top-[80%] opacity-0'
            } ${isScrolled ? 'bg-title_dark' : 'bg-body'}`}
        >
            <ul
                className={`flex flex-col items-center justify-between gap-3 pt-12`}
            >
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
                        <AiOutlineUser className='text-lg' />
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
                        <AiOutlineProject className='text-lg' />
                    </a>
                </li>
                <li className='pb-1'>
                    <a
                        href='#contact'
                        onClick={() => setActiveNav('#contact')}
                        className={
                            activeNav === '#contact'
                                ? 'nav-link nav-active'
                                : 'nav-link'
                        }
                    >
                        <AiOutlineMail className='text-lg ' />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Menu
