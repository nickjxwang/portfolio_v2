import { BsArrowRightShort } from 'react-icons/bs'

const WorkItems = ({ item, index }) => {
    return (
        <div
            className='grid grid-cols-2 grid-rows-[6rem] xl:rid-rows-[16rem] lg:grid-rows-[12rem] md:grid-rows-[10rem]'
            key={item.id}
        >
            <div className={`${index % 2 != 0 ? 'order-1' : ''}`}>
                <img
                    src={item.image}
                    alt=''
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='w-full bg-title_dark'>
                <h3 className='text-base font-medium mb-2 text-left'>
                    {item.title}
                </h3>
            </div>

            {/* <h3 className='text-base font-medium mb-2 text-left'>
                {item.title}
            </h3>
            <a href='#' className='text-title flex items-center gap-1 text-sm'>
                Demo{' '}
                <BsArrowRightShort className='text-lg transition duration-300 group-hover:translate-x-1' />
            </a> */}
        </div>
    )
}
export default WorkItems
