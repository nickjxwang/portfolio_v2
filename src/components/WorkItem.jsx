import { BsArrowRightShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const WorkItem = ({ item }) => {
    return (
        <div className='h-full relative z-10'>
            <dir className='absolute bottom-4 right-2 -z-10 sm:right-10 xl:right-7 xl:bottom-6'>
                <h2 className='text-[#f0f0f0] text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl'>
                    {item.category}
                </h2>
            </dir>
            <div className='h-full p-4 pb-3 flex flex-col justify-between sm:p-6 sm:pb-3 md:p-8 md:pb-4 lg:p-10 lg:pb-6 xl:px-12'>
                <div>
                    <h3 className='text-sm pt-1 text-text font-normal sm:text-lg md:text-xl lg:text-[1.8rem]'>
                        {item.title}
                    </h3>
                </div>
                <a
                    href={`/${item.category}/${item.id}`}
                    className='inline-flex justify-end items-center'
                >
                    <div className='flex justify-center items-center gap-[2px] cursor-pointer border-[1px] py-[4px] px-2 group transition duration-300 hover:border-title_dark border-[#d7d7d7] md:px-3 md:py-1 lg:px-4 lg:py-[.4rem] xl:px-5 md:gap-1'>
                        <h3 className='text-text font-normal rounded-[2px] text-[8px] group-hover:text-title sm:text-xs xl:text-base'>
                            View
                        </h3>

                        <BsArrowRightShort className='group-hover:animate-move text-xs font-light text-text group-hover:text-title sm:text-base' />
                    </div>
                </a>
            </div>
        </div>
    )
}
export default WorkItem
