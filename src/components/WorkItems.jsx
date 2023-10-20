import { BsArrowRightShort } from 'react-icons/bs'
import WorkItem from './WorkItem'

const WorkItems = ({ item, index }) => {
    return (
        <div
            className='grid grid-cols-2 grid-rows-[6rem] xl:grid-rows-[13rem] lg:grid-rows-[12rem] md:grid-rows-[10rem] sm:grid-rows-[8rem]'
            key={item.id}
        >
            <div className={`${index % 2 != 0 ? 'order-1' : ''}`}>
                <img
                    src={item.img}
                    alt=''
                    className='object-cover w-full h-full'
                />
            </div>

            <div className='w-full bg-body'>
                <WorkItem item={item} />
            </div>
        </div>
    )
}
export default WorkItems
