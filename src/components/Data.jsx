import { FiSend } from 'react-icons/fi'
import { RiSendPlaneLine } from 'react-icons/ri'
import Social from './Social'

const Data = () => {
    return (
        <div className='w-full absolute bottom-[16rem] left-[10%] md:bottom-[17rem] md:left-[15%]  lg:bottom-[18rem] lg:left-[20%] xl:left-[25%] xl:bottom-[20rem]'>
            <h1 className='text-4xl mb-4 text-container lg:text-6xl md:text-5xl lg:mb-10'>
                Nick Wang
            </h1>
            <p className=' text-text text-base mb-6 lg:text-3xl lg:mb-8 md:text-xl'>
                I'm a <span className='text-[#D6C7BC]'>Developer</span> with a
                background in <span className='text-[#D6C7BC]'>Design</span>.
            </p>
            <Social />
        </div>
    )
}
export default Data
