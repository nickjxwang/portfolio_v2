import { BsArrowRightShort } from 'react-icons/bs'
import WorkItem from './WorkItem'

const WorkItems = ({ item, index }) => {
    return (
        <div className='grid grid-cols-2' key={item.id}>
            <div
                className={`${
                    index % 2 != 0 ? 'order-1' : ''
                } overflow-hidden h-[90px] sm:h-[110px] md:h-[150px] lg:h-[180px] xl:h-[250px]`}
            >
                <a href={`/${item.category}/${item.id}`}>
                    <img
                        src={item.img}
                        alt=''
                        className='object-cover w-full h-full transition duration-500 cursor-pointer hover:scale-105'
                    />
                </a>
            </div>

            <div className='w-full bg-body'>
                <WorkItem item={item} />
            </div>
        </div>

        // <div className='grid grid-cols-2'>
        //     <div className='w-full h-[200px] bg-title border border-container'>
        //         <a href={`/${item.category}/${item.id}`}>
        //             <img
        //                 src={item.img}
        //                 alt=''
        //                 className='object-cover w-full h-full transition duration-500 cursor-pointer hover:scale-105'
        //             />
        //         </a>
        //     </div>
        //     <div className='w-full h-[200px] bg-title_dark border border-container'></div>
        // </div>
    )
}
export default WorkItems
