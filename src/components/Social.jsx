import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri'

const Social = () => {
    return (
        <div className='flex items-center gap-8'>
            <a href='https://www.linkedin.com/in/nwang15/' target='_blank'>
                <RiLinkedinLine className='social-icon rounded-md' />
            </a>

            <a href='https://github.com/nickjxwang' target='_blank'>
                <RiGithubLine className='social-icon rounded-full' />
            </a>
        </div>
    )
}
export default Social
