import WorkItems from './WorkItems'

const Projects = ({ projects }) => {
    return (
        <div className='h-full xl:w-[90%] xl:mx-auto'>
            <div className='h-full lg:px-10'>
                {projects.map((item, index) => (
                    <WorkItems item={item} key={item.id} index={index} />
                ))}
            </div>
        </div>
    )
}
export default Projects
