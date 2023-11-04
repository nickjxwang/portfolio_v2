import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const WorkItem = ({ item }) => {
    return (
        <div className='relative z-10 h-full'>
            {/* <ScrollToTop /> */}
            <dir className='absolute bottom-4 right-2 -z-10 sm:right-10 xl:right-7 xl:bottom-6'>
                <h2 className='text-[#f0f0f0] text-5xl uppercase font-semibold sm:text-6xl md:text-7xl lg:text-8xl'>
                    {item.category}
                </h2>
            </dir>
            <div className='flex flex-col justify-between h-full p-4 pb-3 sm:p-6 sm:pb-3 md:p-8 md:pb-4 lg:p-10 lg:pb-6 xl:px-12'>
                <div className=''>
                    <h3 className='text-[.75rem] pt-1 text-text font-normal sm:text-lg md:text-xl lg:text-[1.8rem]'>
                        {item.title}
                    </h3>
                </div>
                <Link
                    to={`/${item.category}/${item.id}`}
                    className='inline-flex items-center justify-end'
                >
                    <div className='flex justify-center items-center gap-[2px] cursor-pointer border-[1px] py-[4px] px-2 group transition duration-30 border-[#C9D6DF] hover:border-title_dark hover:bg-title_dark md:px-3 md:py-1 lg:px-4 lg:py-[.4rem] xl:px-5 md:gap-1'>
                        <h3 className='text-text font-normal rounded-sm text-[8px] group-hover:text-[#C9D6DF] sm:text-xs xl:text-base'>
                            More
                        </h3>

                        <BsArrowRightShort className='text-xs font-light group-hover:animate-move text-text group-hover:text-[#C9D6DF] sm:text-base' />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default WorkItem
