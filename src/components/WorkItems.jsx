import { BsArrowRightShort } from 'react-icons/bs'
import WorkItem from './WorkItem'

const WorkItems = ({ item, index }) => {
    return (
        <div
            className='grid grid-cols-2 grid-rows-[6rem] xl:rid-rows-[14rem] lg:grid-rows-[12rem] md:grid-rows-[10rem] sm:grid-rows-[8rem]'
            key={item.id}
        >
            <div className={`${index % 2 != 0 ? 'order-1' : ''}`}>
                <img
                    src={item.image}
                    alt=''
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='w-full bg-body'>
                <WorkItem item={item} />
            </div>
        </div>
    )
}
export default WorkItems
