const SingleProjectImage = ({ project }) => {
    return (
        <div className='mb-4 md:mb-10'>
            <div className=''>
                <img
                    src={project.image}
                    alt=''
                    className='w-full mx-auto bg-cover p-4 md:p-8'
                />
            </div>
        </div>
    )
}
export default SingleProjectImage
