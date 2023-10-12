import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const Footer = () => {
    return (
        <footer className=' bg-container footer mt-10'>
            <div className='container-c flex flex-col justify-center items-center py-6'>
                {/* <h1 className='text-title text-3xl text-center mb-4'>Nick</h1> */}

                <ul className='flex justify-center gap-6 mb-4'>
                    <li>
                        <a
                            href='#about'
                            className='text-title hover:text-title_dark'
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href='#skills'
                            className='text-title hover:text-title_dark'
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href='#projects'
                            className='text-title hover:text-title_dark'
                        >
                            Projects
                        </a>
                    </li>
                </ul>

                <div className='w-full h-[1px] gradient-line rounded-lg mb-5'></div>

                <div className='flex justify-center gap-5'>
                    {/* <a
                        href='https://www.linkedin.com/in/nwang15/'
                        target='_blank'
                        className='inline-flex bg-title text-container text-lg p-[0.4rem] rounded-lg hover:bg-title_dark'
                    >
                        <AiFillLinkedin />
                    </a>

                    <a
                        href='https://github.com/nickjxwang'
                        target='_blank'
                        className='inline-flex bg-title text-container text-lg p-[0.4rem] rounded-lg hover:bg-title_dark'
                    >
                        <AiFillGithub />
                    </a> */}
                    <a
                        href='https://www.linkedin.com/in/nwang15/'
                        target='_blank'
                    >
                        <RiLinkedinLine className='social-icon-footer rounded-md' />
                    </a>

                    <a href='https://github.com/nickjxwang' target='_blank'>
                        <RiGithubLine className='social-icon-footer rounded-full' />
                    </a>
                </div>

                <span className='block mt-10 text-title text-center text-[0.813rem]'>
                    &copy; {new Date().getFullYear()} NICK WANG
                </span>
            </div>
        </footer>
    )
}
export default Footer
