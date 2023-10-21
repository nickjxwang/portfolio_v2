import WorkItems from './WorkItems'

const Projects = ({ projects }) => {
    if (projects.length < 1) {
        return (
            <h4 className='p-4 text-xl text-center text-title_dark'>
                Coming Soon...
            </h4>
        )
    }
    return (
        <div className='h-full xl:w-[90%] xl:mx-auto sm:px-10'>
            {projects.map((item, index) => (
                <WorkItems item={item} key={item.id} index={index} />
            ))}
        </div>
    )
}
export default Projects
