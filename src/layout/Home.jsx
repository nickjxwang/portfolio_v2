import Social from '../components/Social'
import Data from '../components/Data'
import AboutImg from '../assets/about.jpg'

const Home = () => {
    return (
        <section className='relative h-screen' id='home'>
            {/* <div className='pt-20 container-c grid justify-center md:grid-cols-2 lg:gap-32 md:px-10'>
                <div className='bg-body z-10 p-2 drop-shadow-[0_-1px_4px_rgba(0,0,0,0.3)] rounded-full justify-self-center home-img'>
                    <div className='bg-profile bg-no-repeat bg-center bg-cover w-[200px] h-[200px] custom-box-shadow drop-shadow-[0_-1px_4px_rgba(0,0,0,0.15)] md:w-[300px] md:h-[300px] rounded-full'></div>
                </div>
                <Data />
            </div> */}
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

export default Home
