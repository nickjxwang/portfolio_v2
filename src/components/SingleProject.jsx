import { useNavigate, useParams } from 'react-router-dom'
import { projectsData } from '../context/projects_context'
import { BsArrowLeftShort } from 'react-icons/bs'
import ScrollToTop from './ScrollToTop'
import img from '../assets/Profile.webp'
import SingleProjectHeader from './SingleProjectHeader'
import SingleProjectVideo from './SingleProjectVideo'
import SingleProjectSlider from './SingleProjectSlider'
import Footer from '../layout/Footer'
import SingleProjectImage from './SingleProjectImage'

const SingleProject = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const project = projectsData.find(product => product.id === id)
    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className='h-screen bg-[#f0f0f0]'>
            <ScrollToTop />
            <SingleProjectHeader />

            <div className='w-full h-full relative bg-profile bg-center bg-no-repeat bg-cover'>
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#000] bg-opacity-40'></div>
            </div>

            <div className='h-full absolute top-0 left-[10%] right-[10%] z-20'>
                <div className='h-full flex flex-col items-start justify-between z-20'>
                    <button
                        onClick={handleGoBack}
                        className='text-container pt-20 group flex items-center gap-1'
                    >
                        <BsArrowLeftShort className='text-xl group-hover:animate-move_left' />
                        Back
                    </button>
                    <div className='w-[100%] h-full flex flex-col justify-end pb-52 gap-4'>
                        <h2 className='text-container text-4xl md:text-5xl lg:text-6xl'>
                            {project.title}
                        </h2>
                        <p className='text-container text-opacity-80 text-xs xl:w-[85%] lg:text-lg md:text-base'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Optio fuga vero fugit explicabo similique
                            repellat impedit mollitia ipsa! Quod quae ipsa
                            numquam, aut pariatur qui quibusdam magnam omnis
                            repudiandae ducimus.
                        </p>
                        <div className='w-full h-[1px] gradient-line rounded-lg mt-5'></div>
                        <div className='flex  items-center gap-10 mt-4'>
                            <div className='border border-body px-2 py-2 rounded-sm text-body text-xs transition duration-300 hover:text-title_dark hover:bg-body md:text-base md:px-3 md:py-3'>
                                <a href='#'>View the project</a>
                            </div>
                            <div className='border border-body px-2 py-2 rounded-sm text-body text-xs transition duration-300 hover:text-title_dark hover:bg-body md:text-base md:px-3 md:py-3'>
                                <a href='#'>View the code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {project.video && <SingleProjectVideo project={project} />}
            {project.slider && <SingleProjectSlider project={project} />}
            {project.image && <SingleProjectImage project={project} />}

            <Footer />
        </div>
    )
}
export default SingleProject
