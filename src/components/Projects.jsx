import WorkItems from './WorkItems'

const Projects = ({ projects }) => {
    if (projects.length < 1) {
        return <h4>Sorry,no products matched your search...</h4>
    }
    return (
        <div className='h-full xl:w-[90%] xl:mx-auto'>
            <div className='h-full sm:px-10'>
                {projects.map((item, index) => (
                    <WorkItems item={item} key={item.id} index={index} />
                ))}
            </div>
        </div>
    )
}
export default Projects
