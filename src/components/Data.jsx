import { FiSend } from 'react-icons/fi'
import { RiSendPlaneLine } from 'react-icons/ri'
import Social from './Social'

const Data = () => {
    return (
        <div className='w-full absolute bottom-[20rem] left-[10%] md:left-[15%]   lg:left-[20%] xl:left-[25%]'>
            <h1 className='mb-4 text-4xl text-container lg:text-6xl md:text-5xl lg:mb-10'>
                Nick Wang
            </h1>
            <p className='mb-6 text-base text-text lg:text-3xl lg:mb-8 md:text-xl'>
                I'm a{' '}
                <span className='text-[#D6C7BC] font-medium'>Developer</span>{' '}
                with a background in{' '}
                <span className='text-[#D6C7BC] font-medium'>Design</span>.
            </p>
            <Social />
        </div>
    )
}
export default Data
