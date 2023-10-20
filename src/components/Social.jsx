import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const Social = () => {
    return (
        <div className='flex items-center gap-4 lg:gap-6'>
            <a href='https://www.linkedin.com/in/nwang15/' target='_blank'>
                <RiLinkedinLine className='rounded-md social-icon' />
            </a>

            <a href='https://github.com/nickjxwang' target='_blank'>
                <RiGithubLine className='rounded-full social-icon' />
            </a>
        </div>
    )
}
export default Social
