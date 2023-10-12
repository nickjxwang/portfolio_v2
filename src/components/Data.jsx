import { FiSend } from 'react-icons/fi'
import { RiSendPlaneLine } from 'react-icons/ri'
import Social from './Social'

const Data = () => {
    return (
        <div className='max-w-[80%] mx-auto sm:max-w-full lg:mb-10 md:mb-5'>
            <h1 className='text-4xl mb-4 text-container lg:text-6xl lg:mb-10'>
                Nick Wang
            </h1>
            <p className=' text-text text-base mb-6 lg:text-3xl lg:mb-8 md:text-xl'>
                I'm a <span className='text-[#D6C7BC]'>Developer</span> with a
                background in <span className='text-[#D6C7BC]'>Design</span>.
            </p>
            <Social />
            {/* <div className='mt-6'>
                <a href='#contact' className='button-c button--flex gap-2'>
                    <span className='text-container'>Let's Talk</span>
                    <div className='text-container'>
                        <RiSendPlaneLine />
                    </div>
                </a>
            </div> */}
        </div>
    )
}
export default Data
