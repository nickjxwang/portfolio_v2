import { useNavigate, useParams } from 'react-router-dom'
import { projectsData } from '../context/projects_context'
import { BsArrowLeftShort } from 'react-icons/bs'
import ScrollToTop from './ScrollToTop'
import SingleProjectHeader from './SingleProjectHeader'
import SingleProjectVideo from './SingleProjectVideo'
import SingleProjectSlider from './SingleProjectSlider'
import SingleProjectImage from './SingleProjectImage'
import Footer from '../layout/Footer'

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

            <div
                className='relative w-full h-full bg-center bg-no-repeat bg-cover'
                style={{ backgroundImage: `url(${project.img})` }}
            >
                <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-[#000] bg-opacity-70'></div>
            </div>

            <div className='h-full absolute top-0 left-[10%] right-[10%] z-20'>
                <div className='z-20 flex flex-col items-start justify-between h-full'>
                    <button
                        onClick={handleGoBack}
                        className='flex items-center gap-1 pt-20 text-container group'
                    >
                        <BsArrowLeftShort className='text-xl group-hover:animate-move_left' />
                        Back
                    </button>
                    <div className='w-[100%] h-full flex flex-col justify-end pb-52 gap-4'>
                        <h2 className='text-4xl mb-2 text-container md:text-5xl lg:text-6xl'>
                            {project.title}
                        </h2>
                        <p className='text-container mb-2 text-xs xl:w-[100%] lg:text-lg md:text-base'>
                            {project.desc}
                        </p>

                        <ul className='flex gap-3'>
                            {project.tool.map((item, index) => (
                                <li
                                    className='px-3 py-1 text-sm border rounded-full bg-title_dark text-container border-container'
                                    key={index}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className='w-full h-[1px] gradient-line rounded-lg mt-1'></div>

                        <div className='flex items-center gap-10 mt-2'>
                            {project.view ? (
                                <div className='px-2 py-2 text-xs font-medium transition duration-300 border rounded-sm border-body text-body hover:text-title_dark hover:bg-body lg:text-base md:px-3 md:py-3'>
                                    <a href={project.view} target='_blank'>
                                        View the project
                                    </a>
                                </div>
                            ) : (
                                ''
                            )}

                            {project.code ? (
                                <div className='px-2 py-2 text-xs font-medium transition duration-300 border rounded-sm border-body text-body hover:text-title_dark hover:bg-body lg:text-base md:px-3 md:py-3'>
                                    <a href={project.code} target='_blank'>
                                        View the code
                                    </a>
                                </div>
                            ) : (
                                ''
                            )}
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
