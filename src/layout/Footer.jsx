import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className=' bg-container footer'>
            <div className='flex flex-col items-center justify-center py-6 container-c'>
                {/* <h1 className='mb-4 text-3xl text-center text-title'>Nick</h1> */}

                {/* <ul className='flex justify-center gap-6 mb-4'>
                    <li>
                        <a
                            href='#about'
                            className='transition duration-300 text-title hover:text-title_dark'
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href='#projects'
                            className='transition duration-300 text-title hover:text-title_dark'
                        >
                            Projects
                        </a>
                    </li>
                </ul> */}

                <div className='flex justify-center gap-5'>
                    <a
                        href='https://www.linkedin.com/in/nwang15/'
                        target='_blank'
                    >
                        <RiLinkedinLine className='rounded-md social-icon-footer' />
                    </a>

                    <a href='https://github.com/nickjxwang' target='_blank'>
                        <RiGithubLine className='rounded-full social-icon-footer' />
                    </a>
                </div>

                <div className='w-full h-[1px] gradient-line rounded-lg mt-5'></div>

                <span className='block mt-10 text-title text-center text-[.8rem]'>
                    &copy; {new Date().getFullYear()} NICK WANG
                </span>
            </div>
        </footer>
    )
}
export default Footer
