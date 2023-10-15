import Social from '../components/Social'
import Data from '../components/Data'
import AboutImg from '../assets/about.jpg'

const Hero = () => {
    return (
        <section className='relative h-screen' id='home'>
            <div className='w-full h-full relative bg-profile bg bg-no-repeat bg-[center_right_-4rem] bg-cover sm:bg-center'>
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-title_dark bg-opacity-30'>
                    <div className=''>
                        <Data />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
